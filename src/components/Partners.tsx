import Heading from "@/ui/Heading";
import PartnersSlider from "@/ui/PartnersSlider";
import { section } from "framer-motion/client";

export default function Partners() {
  return (
    <section className="container-custom py-10">
      <Heading>Партнёры и клиенты</Heading>
      <h2 className="text-4xl md:text-4xl font-bold mt-2 mb-5 leading-tight whitespace-pre-line">
        Нам доверяют лидеры отрасли
      </h2>
      <p className="text-lg leading-relaxed text-gray-400">
        Более{" "}
        <span className="font-semibold text-(--base) underline">
          43 компаний-партнёров
        </span>
        , при этом около{" "}
        <span className="font-semibold text-(--base) underline">
          50% клиентов
        </span>{" "}
        возвращаются с повторными проектами и долгосрочным сотрудничеством.
      </p>
      <PartnersSlider />
    </section>
  );
}
