import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Heading({ children }: Props) {
  return (
    <span className="text-sm uppercase tracking-[0.2em] text-(--heading) font-semibold">
      {children}
    </span>
  );
}
