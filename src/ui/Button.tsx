import Link from "next/link";
import clsx from "clsx";

type Variant = "filled" | "outline";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}

export default function Button({
  href,
  children,
  variant = "filled",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-block px-5 py-2 md:px-6 md:py-3 rounded-lg transition-colors duration-300 text-sm md:text-base font-semibold",
        {
          // 🔵 filled
          "bg-[#16b5da] text-white hover:bg-[#1f8da6]": variant === "filled",

          // ⚪ outline
          "border border-[#16b5da] text-[#16b5da] hover:border-[#ccc] hover:text-[#ccc]":
            variant === "outline",
        },
      )}
    >
      {children}
    </Link>
  );
}
