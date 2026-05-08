// import { ServiceItem } from "@/lib/data";
// import ServicesGrid from "./ServicesGrid";
// import { SectionData } from "@/lib/data";

// const data: SectionData[] = [
//   {
//     id: "main",
//     title: "Проектируем уверенность.\nЦифровая инженерия для критических задач",
//     image: "/logo_glow3.png",
//     description: "",
//     buttonText: "Начать сотрудничество",
//     servicesTitle: "Наши направления",
//     servicesTitle2: "Ключевые услуги",
//     services: [
//       {
//         icon: "🚀",
//         title: "Авиакосмическая отрасль",
//       },
//       {
//         icon: "⭐",
//         title: "Судостроение",
//       },
//       {
//         icon: "🤝",
//         title: "Дорожная инфраструктура",
//       },
//     ],
//     services2: [
//       {
//         icon: "🚀",
//         title: "Цифровые двойники",
//       },
//       {
//         icon: "⭐",
//         title: "Виртуальная сертификация",
//       },
//       {
//         icon: "🤝",
//         title: "Предиктивная аналитика",
//       },
//       {
//         icon: "🤝",
//         title: "Инженерный консалтинг",
//       },
//     ],
//     checklist: [],
//   },
// ];

// export default function MainSectionBottom() {
//   return (
//     <div className="bg-[#e6e6e6] " style={{ height: "55%" }}>
//       <div className="flex items-center overflow-hidden">
//         <div className="container-custom py-4 md:py-6 lg:py-8">
//           <h3 className="text-xl md:text-2xl font-bold mb-4">
//             {data.servicesTitle}
//           </h3>
//           <ServicesGrid services={services} />
//           <h3 className="text-xl md:text-2xl font-bold mb-4">
//             {servicesTitle}
//           </h3>
//           <ServicesGrid services={services} />

//           {/* Checklist */}
//           {checklist.length > 0 && (
//             <div>
//               <h3 className="text-lg md:text-xl font-bold text-dark mb-3 md:mb-4 text-center">
//                 Преимущества
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
//                 {checklist.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-white/80 transition-all duration-300 group"
//                   >
//                     <span className="text-blue text-lg md:text-xl shrink-0 group-hover:scale-110 transition-transform">
//                       ✓
//                     </span>
//                     <span className="text-xs md:text-sm text-gray-700 group-hover:text-dark transition-colors">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
