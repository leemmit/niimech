import Hero from "@/components/Hero";
import Section from "@/components/section/Section";
import ServicesGrid from "@/components/section/ServicesGrid";
import Timeline from "@/components/Timeline";
import Tabs from "@/components/Tabs";
import Projects from "@/components/Projects";
import { projectsData, sectionsData, ServiceItem } from "@/lib/data";
import { block2, timelineData, servicesTabs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid services={block2} />
      <Tabs tabs={servicesTabs} />
      <Timeline items={timelineData} />
      <Projects projects={projectsData} />
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
