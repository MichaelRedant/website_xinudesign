interface GlassPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export default function GlassPane({
  children,
  className = "",
  ...props
}: GlassPaneProps) {
  return (
    <div
      {...props}
      className={`bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/25 dark:border-white/15 rounded-xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
