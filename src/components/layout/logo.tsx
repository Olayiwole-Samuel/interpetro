import { cn } from '@/lib/utils';

export function Logo({ className, light = true }: { className?: string; light?: boolean }) {
  return (
    <div className={cn('flex items-center gap-2.5 select-none', className)}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <circle cx="15" cy="15" r="15" fill={light ? '#0057B8' : '#FFFFFF'} />
        <path
          d="M5 18.5C8 13.5 11 21 15 16C19 11 22 18.5 25 13.5"
          stroke="#9BD600"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span
        className={cn(
          'font-bold text-lg tracking-tight leading-none',
          light ? 'text-white' : 'text-brand-navy'
        )}
      >
        Interpetro
        <span className="text-brand-green">.</span>
      </span>
    </div>
  );
}
