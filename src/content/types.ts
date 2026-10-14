import type { IconId } from '../components/Icon/icons';

export type Locale = 'zh' | 'en';
export type FeatureId = 'capture' | 'rules' | 'breakpoints' | 'composer' | 'agent' | 'mcp';

export interface FeatureCard {
  icon: IconId;
  title: string;
  body: string;
  tags: string[];
}

export interface FeatureDetail extends FeatureCard {
  id: FeatureId;
  label: string;
  points: string[];
  imageAlt: string;
}
