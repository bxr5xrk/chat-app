import { Theme } from './types';

const THEME_OPTIONS = {
  success: 'text-sm text-green-600',
  error: 'text-sm text-red-600',
  default: '',
};

const DEFAULT_THEME: Theme = 'default';
const DEFAULT_DURATION = 5000; // 5s

export { THEME_OPTIONS, DEFAULT_THEME, DEFAULT_DURATION };
