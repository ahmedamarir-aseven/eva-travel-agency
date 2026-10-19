interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Eva Travel Agency Logo"
      className={`object-contain transition-transform duration-300 hover:scale-[1.02] dark:brightness-0 dark:invert ${className}`}
    />
  );
}
