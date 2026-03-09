import Link from "next/link";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  target,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-[0.1em] font-medium uppercase transition-all duration-300 relative overflow-hidden group rounded-xl";

  const variants = {
    primary: "bg-brand-gold text-white hover:bg-brand-gold-dark shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]",
    secondary: "bg-white text-brand-black hover:bg-brand-cream border border-black/10 hover:border-brand-gold/50",
    outline: "bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white",
    ghost: "bg-transparent text-brand-charcoal hover:text-brand-gold",
    glass: "bg-white/40 backdrop-blur-md border border-white text-brand-black hover:bg-white/60 hover:border-brand-gold/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const combinedStyles = cn(baseStyles, variants[variant], sizes[size], className);

  const innerGlowSpan = (
    <span className="absolute inset-0 w-full h-full -ml-[100%] transition-all duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:ml-[100%] pointer-events-none" />
  );

  if (href) {
    return (
      <Link href={href} target={target} className={combinedStyles}>
        {children}
        {innerGlowSpan}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
      {innerGlowSpan}
    </button>
  );
}
