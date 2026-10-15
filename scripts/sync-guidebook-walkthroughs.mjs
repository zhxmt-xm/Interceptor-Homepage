import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [version, ...chapters] = process.argv.slice(2);
if (!/^v\d+\.\d+\.\d+(?:-[a-z0-9.]+)?$/.test(version ?? '') || chapters.length === 0) {
  throw new Error(
    'Usage: node scripts/sync-guidebook-walkthroughs.mjs <version> <chapter[:recording]> [...]',
  );
}

const escape = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll('\r', '&#13;')
    .replaceAll('\n', '&#10;');
const timestamp = (seconds) =>
  `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
for (const selection of chapters) {
  const [chapter, mediaChapter = chapter, extra] = selection.split(':');
  if (extra !== undefined) throw new Error(`Invalid chapter selection: ${selection}`);
  if (!/^[a-z]+(?:-[a-z]+)*$/.test(chapter)) throw new Error(`Invalid chapter name: ${chapter}`);
  if (!/^[a-z]+(?:-[a-z]+)*$/.test(mediaChapter))
    throw new Error(`Invalid recording name: ${mediaChapter}`);
  const appendix = mediaChapter !== chapter;
  const opening = `<!-- recorded-walkthrough${appendix ? `:${mediaChapter}` : ''}:start -->`;
  const closing = `<!-- recorded-walkthrough${appendix ? `:${mediaChapter}` : ''}:end -->`;
  const anchor = appendix ? `walkthrough-${mediaChapter}` : 'walkthrough';
  const videoAnchor = `${anchor}-video`;
  const directory = path.join(root, 'guidebook/media', version, mediaChapter);
  const manifest = JSON.parse(await readFile(path.join(directory, 'manifest.json'), 'utf8'));
  assert.equal(manifest.chapter, mediaChapter);
  assert.equal(`v${manifest.appVersion}`, version);
  assert.ok(manifest.steps.length > 0);
  for (const asset of manifest.assets) {
    if (path.basename(asset.file) !== asset.file)
      throw new Error('Media filenames must not escape their directory.');
    const bytes = await readFile(path.join(directory, asset.file));
    assert.equal(bytes.length, asset.bytes);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256);
    assert.ok(bytes.length < 25 * 1024 * 1024, 'Media exceeds the free static asset limit.');
  }
  const fileNames = new Set(manifest.assets.map((asset) => asset.file));
  assert.ok(fileNames.has(manifest.video) && fileNames.has(manifest.captions));
  for (const step of manifest.steps) {
    assert.ok(fileNames.has(step.image), `Missing image for step ${step.id}`);
    assert.ok(
      Number.isFinite(step.seconds) && step.seconds >= 0 && step.seconds < manifest.duration,
    );
    assert.equal(
      step.title.split(' / ').length,
      2,
      'Step titles must name the same action in both languages.',
    );
  }

  for (const [language, index] of [
    ['zh-CN', 0],
    ['en', 1],
  ]) {
    const chinese = language === 'zh-CN';
    const prefix = `../media/${version}/${mediaChapter}`;
    const heading = appendix
      ? manifest.title?.[language]
      : chinese
        ? '逐步骤实操：真实产品录制'
        : 'Recorded walkthrough: actual product steps';
    assert.ok(
      typeof heading === 'string' && heading.length > 0,
      'Additional recordings need a human-readable localized title.',
    );
    const source = chinese
      ? `以下图片和视频来自已发布的 <code>${manifest.appVersion}</code>、${manifest.platform}，App保持<code>${manifest.appLanguage}</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。`
      : `These images and video show the published <code>${manifest.appVersion}</code> on ${manifest.platform}, retaining the App language <code>${manifest.appLanguage}</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.`;
    const warning = chinese
      ? '本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。'
      : 'Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.';
    const notes = [];
    if (chapter === 'agent')
      notes.push(
        chinese
          ? '> 这里的本地模型是无Key、固定公开回复的演示服务。视频证明配置和对话控件的真实行为，不证明商业模型的能力或计费；不要将真实Key填入这个演示地址。'
          : '> This keyless local model returns fixed public demonstration replies. The video shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.',
      );
    if (chapter === 'mcp')
      notes.push(
        chinese
          ? '> 调用方是官方SDK构建的本地演示Client，不是VS Code或云端Host兼容性演示。凭据未进入图文或视频，Copy后的配置只在本机测试内存中使用。'
          : '> The caller is a local official-SDK demonstration client, not proof of VS Code or cloud-host compatibility. Credentials are not shown in the images or video; copied configuration is used only in local test memory.',
      );
    if (chapter === 'settings')
      notes.push(
        chinese
          ? '> 本段展示已有CA、设置入口和可放弃的草稿。Manual和PAC示例没有Apply；视频不证明这些示例地址可用，也没有重新生成或卸载日常CA。'
          : '> This recording shows the existing CA, settings and discardable drafts. Manual/PAC examples are not applied or claimed reachable. The daily-use CA is not regenerated or uninstalled.',
      );
    if (chapter === 'tool-permissions')
      notes.push(
        chinese
          ? '> 这里只演示单项权限的独立开关，不等于已经把整个入口配置为只读；没有实际执行Clear。'
          : '> This demonstrates independent per-tool switches, not a complete read-only configuration. Clear is not executed.',
      );

    const examples = Object.entries(manifest.example)
      .map(([key, value]) => `| <code>${escape(key)}</code> | <code>${escape(value)}</code> |`)
      .join('\n');
    const steps = manifest.steps
      .map((step, position) => {
        const title = step.title.split(' / ')[index];
        return (
          `<a id="${anchor}-${step.id}"></a>\n### ${String(position + 1).padStart(2, '0')} · ${title}\n\n` +
          `[${chinese ? '视频' : 'Video'} ${timestamp(step.seconds)}](${prefix}/${manifest.video}#t=${step.seconds.toFixed(3)})` +
          ` · [${chinese ? '返回本节视频' : 'Back to the video'}](#${videoAnchor})\n\n` +
          `![${String(position + 1).padStart(2, '0')} · ${title}](${prefix}/${step.image})`
        );
      })
      .join('\n\n');
    const section = [
      opening,
      `<a id="${anchor}"></a>`,
      `## ${heading}`,
      '',
      source,
      '',
      warning,
      '',
      ...notes,
      '',
      `| ${chinese ? '示例字段' : 'Example field'} | ${chinese ? '录制中的实际值' : 'Actual recorded value'} |`,
      '| --- | --- |',
      examples,
      '',
      `<a id="${videoAnchor}"></a>`,
      '',
      `<video controls preload="metadata" playsinline lang="${language}" src="${prefix}/${manifest.video}" poster="${prefix}/${manifest.steps[0].image}">`,
      `<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="${prefix}/${manifest.captions}" default>`,
      '</video>',
      '',
      steps,
      '',
      chinese
        ? '下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。'
        : 'The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.',
      closing,
      '',
    ].join('\n');
    const documentPath = path.join(root, 'guidebook', language, `${chapter}.md`);
    const document = await readFile(documentPath, 'utf8');
    const start = document.indexOf(opening);
    let next;
    if (start >= 0) {
      const end = document.indexOf(closing, start);
      if (end < 0) throw new Error(`Unclosed generated walkthrough: ${documentPath}`);
      next =
        document.slice(0, start) +
        section +
        document.slice(end + closing.length).replace(/^\n+/, '\n');
    } else {
      if (document.includes(`<a id="${anchor}">`))
        throw new Error(`An authored walkthrough already exists: ${documentPath}`);
      const navigation = /^\[(?:教程目录|Guide directory)\][^\n]*\n+/m.exec(document);
      if (!navigation || navigation.index === undefined)
        throw new Error(`Missing chapter navigation: ${documentPath}`);
      const after = navigation.index + navigation[0].length;
      if (appendix) {
        next = `${document.trimEnd()}\n\n${section}`;
      } else {
        next = document.slice(0, after) + section + '\n' + document.slice(after);
      }
    }
    if ((await readFile(documentPath, 'utf8')) !== document) {
      throw new Error(
        `Chapter changed during generation; retry without overwriting it: ${documentPath}`,
      );
    }
    await writeFile(documentPath, next.replace(/\n+$/, '\n'), 'utf8');
  }

  console.log(
    `${chapter} / ${mediaChapter}: ${manifest.steps.length} matching steps in both languages`,
  );
}

const imageDimensions = {};
async function collectImageDimensions(directory, relative = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    const name = relative ? `${relative}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      await collectImageDimensions(file, name);
    } else if (entry.name.endsWith('.png')) {
      const bytes = await readFile(file);
      assert.deepEqual(bytes.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
      const width = bytes.readUInt32BE(16);
      const height = bytes.readUInt32BE(20);
      assert.ok(width > 0 && height > 0);
      imageDimensions[name] = [width, height];
    }
  }
}
await collectImageDimensions(path.join(root, 'guidebook/media'));
await writeFile(
  path.join(root, 'guidebook/media/image-dimensions.json'),
  JSON.stringify(imageDimensions, null, 2) + '\n',
  'utf8',
);
execFileSync(
  path.join(root, 'node_modules/.bin/biome'),
  ['format', '--write', 'guidebook/media/image-dimensions.json'],
  { cwd: root, stdio: 'inherit' },
);
