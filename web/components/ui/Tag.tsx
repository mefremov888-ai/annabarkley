export function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={[
        'inline-block px-[18px] py-[7px] rounded-[30px] uppercase font-bold',
        'text-[11px] tracking-[0.2em]',
        dark ? 'bg-white/5 text-sage-muted' : 'text-sage',
      ].join(' ')}
      style={
        dark
          ? undefined
          : { background: 'linear-gradient(135deg, var(--sage-pale), var(--rose-pale))' }
      }
    >
      {children}
    </span>
  );
}
