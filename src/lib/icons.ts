import {
  ChartBarStacked,
  ChartNoAxesCombined,
  Globe,
  Hammer,
  LucideIcon,
  MonitorCheck,
  Phone,
  Road,
  RulerDimensionLine,
  Ship,
  TvMinimal,
  UserSearch,
  Plane,
} from "lucide-react";

export const icons = {
  chartBarStacked: ChartBarStacked,
  chartNoAxesCombined: ChartNoAxesCombined,
  globe: Globe,
  hammer: Hammer,
  monitorCheck: MonitorCheck,
  phone: Phone,
  road: Road,
  rulerDimensionLine: RulerDimensionLine,
  ship: Ship,
  tvMinimal: TvMinimal,
  userSearch: UserSearch,
  plane: Plane,
};

export type IconKey = keyof typeof icons;
