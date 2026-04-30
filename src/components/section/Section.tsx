import SectionTop from "./SectionTop";
import SectionBottom from "./SectionBottom";
import { ServiceItem } from "@/lib/data";

interface SectionProps {
  id: string;
  title: string;
  image: string;
  description: string;
  services?: ServiceItem[];
  services2?: ServiceItem[];
  checklist?: string[];
  buttonText?: string;
  showButton?: boolean;
  servicesTitle?: string;
  servicesTitle2?: string;
}

export default function Section({
  id,
  title,
  image,
  description,
  services = [],
  services2 = [],
  checklist = [],
  buttonText = "Узнать больше",
  showButton = true,
  servicesTitle,
  servicesTitle2,
}: SectionProps) {
  return (
    <section
      id={id}
      className="w-full flex flex-col"
      // style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <SectionTop
        title={title}
        image={image}
        description={description}
        buttonText={buttonText}
        showButton={showButton}
      />
      <SectionBottom
        services={services}
        services2={services2}
        checklist={checklist}
        servicesTitle={servicesTitle}
        servicesTitle2={servicesTitle2}
      />
    </section>
  );
}
