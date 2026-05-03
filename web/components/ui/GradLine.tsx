export function GradLine({ center = false, width = 80, className = '' }: { center?: boolean; width?: number; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={['h-[3px] rounded-[3px] animate-gradient-shift', center ? 'mx-auto' : '', className].join(' ')}
      style={{
        width: `${width}px`,
        background: 'linear-gradient(90deg, var(--sage), var(--rose), var(--sage))',
        backgroundSize: '200% 100%',
      }}
    />
  );
}
