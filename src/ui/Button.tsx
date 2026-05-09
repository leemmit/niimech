import Link from "next/link";
import clsx from "clsx";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import type { UrlObject } from "url";

type Variant = "filled" | "outline";

type Href = string | UrlObject;

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: Href;
}

interface NativeButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">, BaseProps {
  href?: never;
}

type Props = LinkButtonProps | NativeButtonProps;

export default function Button(props: Props) {
  const { children, variant = "filled", className } = props;

  const classes = clsx(
    "inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 rounded-xl transition-all duration-300 text-sm md:text-base font-semibold",
    {
      "bg-[#00BFFF] text-white hover:bg-[#009ad2] shadow-lg shadow-sky-500/20":
        variant === "filled",

      "border border-[#00BFFF] text-[#00BFFF] hover:border-[#8ae0ff] hover:text-[#8ae0ff]":
        variant === "outline",
    },
    className,
  );

  // ✅ LINK MODE
  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  // ✅ BUTTON MODE
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
