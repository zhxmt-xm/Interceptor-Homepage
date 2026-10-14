import type { FeatureId } from '../../content/types';
import type { Theme } from '../../theme/utils';

export function getFeatureImagePath(feature: FeatureId, theme: Theme): string {
  return `${import.meta.env.BASE_URL}media/features/${feature}-${theme}.png`;
}
