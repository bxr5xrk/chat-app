import { cl } from '@/shared/lib';

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    // <span className="flex h-full w-full justify-center">
    <svg
      fill="none"
      className={cl('h-7 w-7 animate-spin', className)}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
    // </span>
  );
}
