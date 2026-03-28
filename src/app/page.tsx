import Section from "@/components/section/Section";
import { sectionsData } from "@/lib/data";

export default function Home() {
  return (
    <>
      {sectionsData.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          services={section.services}
          checklist={section.checklist}
          buttonText={section.buttonText}
          showButton={section.showButton}
        />
      ))}
    </>
  );
}
