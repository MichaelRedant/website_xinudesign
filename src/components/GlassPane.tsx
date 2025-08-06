interface GlassPaneProps {
  children: React.ReactNode;
  className?: string;
}
export default function GlassPane({
  children,
  className = "",
}: GlassPaneProps) {
  return (
    <div
      className={`bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/25 dark:border-white/15 rounded-xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
