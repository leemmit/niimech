import SectionTop from "./SectionTop";
import SectionBottom from "./SectionBottom";
import { ServiceItem } from "@/lib/data";

interface SectionProps {
  id: string;
  title: string;
  description: string;
  services?: ServiceItem[];
  checklist?: string[];
  buttonText?: string;
  showButton?: boolean;
}

export default function Section({
  id,
  title,
  description,
  services = [],
  checklist = [],
  buttonText = "Узнать больше",
  showButton = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className="w-full flex flex-col"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <SectionTop
        title={title}
        description={description}
        buttonText={buttonText}
        showButton={showButton}
      />
      <SectionBottom services={services} checklist={checklist} />
    </section>
  );
}
