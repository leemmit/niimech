import Image from "next/image";

export default function PartnersSlider() {
  const logos1 = ["autodor", "severstal", "tochinvest", "nami"];
  const logos2 = ["rosavtodor", "ktc", "madi", "mfond"];

  // дублируем для бесконечной ленты
  const row1 = [...logos1, ...logos1];
  const row2 = [...logos2, ...logos2];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="container-custom">
        {/* ===== 1 РЯД ===== */}
        <div className="relative overflow-hidden mb-6">
          <div className="flex w-max gap-16 animate-marquee">
            {row1.map((name, i) => (
              <img
                key={i}
                src={`/partners/${name}.png`}
                alt={name}
                width={120}
                height={40}
                className="h-14 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>

        {/* ===== 2 РЯД (в обратную сторону) ===== */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-28 animate-marquee-reverse">
            {row2.map((name, i) => (
              <Image
                key={i}
                src={`/partners/${name}.png`}
                alt={name}
                width={120}
                height={40}
                className="h-26 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
