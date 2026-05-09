import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export const icons = LucideIcons as unknown as Record<string, LucideIcon>;

export type IconKey = keyof typeof LucideIcons;
