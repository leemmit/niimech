import Hero from "@/components/Hero";
import Section from "@/components/section/Section";
import ServicesGrid from "@/components/section/ServicesGrid";
import { sectionsData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ServicesGrid services={} /> */}
      {sectionsData.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          image={section.image}
          description={section.description}
          servicesTitle={section.servicesTitle}
          servicesTitle2={section.servicesTitle2}
          services={section.services}
          services2={section.services2}
          checklist={section.checklist}
          buttonText={section.buttonText}
          showButton={section.showButton}
        />
      ))}
    </>
  );
}
