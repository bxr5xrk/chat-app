import { Size, Theme } from './types';

const SIZE_OPTIONS = {
  default: 'h-10 py-2 px-4',
  sm: 'h-9 px-2',
  lg: 'h-11 px-8',
};

const THEME_OPTIONS = {
  default: 'bg-slate-900 text-white hover:bg-slate-800',
  ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
};

const DEFAULT_SIZE: Size = 'default';
const DEFAULT_THEME: Theme = 'default';

export { SIZE_OPTIONS, THEME_OPTIONS, DEFAULT_SIZE, DEFAULT_THEME };
