import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

// фильтруем только реальные React-компоненты
export const icons: Record<string, LucideIcon> = Object.fromEntries(
  Object.entries(LucideIcons).filter(
    ([_, value]) =>
      typeof value === "function" &&
      value.name &&
      value.name[0] === value.name[0].toUpperCase(),
  ),
) as Record<string, LucideIcon>;

export type IconKey = keyof typeof icons;
