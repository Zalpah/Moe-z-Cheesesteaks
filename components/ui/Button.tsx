import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-light" | "dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-condensed font-bold uppercase tracking-wide transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-offset-2 min-h-11";

const variants: Record<Variant, string> = {
  primary: "bg-red text-white hover:bg-red-dark active:bg-red-darker",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border-2 border-white text-white hover:bg-white hover:text-ink",
  dark: "bg-ink text-white hover:bg-black",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const rest = props as ButtonAsButton;

  return (
    <button
      type={rest.type ?? "button"}
      disabled={rest.disabled}
      onClick={rest.onClick}
      form={rest.form}
      name={rest.name}
      value={rest.value}
      aria-label={rest["aria-label"]}
      className={classes}
    >
      {children}
    </button>
  );
}
