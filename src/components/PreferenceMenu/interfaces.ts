import type { IconId } from '../Icon/icons';

export interface PreferenceChoice<Value extends string> {
  value: Value;
  label: string;
  icon?: IconId;
}
