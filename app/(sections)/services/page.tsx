"use client";

import { useEffect } from "react";
import { FaBullseye, FaLaptop, FaPaintBrush } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Gestão de Tráfego",
    description:
      "Maximize seu alcance e atraia mais clientes com nossas estratégias de gestão de tráfego. Garantimos que seus anúncios sejam vistos pelas pessoas certas, na hora certa.",
    icon: FaBullseye,
    details: [
      "Análise de público-alvo",
      "Otimização de campanhas",
      "Relatórios detalhados",
    ],
    reason:
      "A gestão eficiente de tráfego é crucial para aumentar a visibilidade e atrair clientes qualificados, maximizando seu retorno sobre investimento.",
  },
  {
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites modernos e responsivos que refletem a identidade da sua marca. Nossos sites são otimizados para proporcionar a melhor experiência ao usuário.",
    icon: FaLaptop,
    details: [
      "Design responsivo",
      "SEO integrado",
      "Experiência do usuário otimizada",
    ],
    reason:
      "Um site bem projetado é fundamental para criar uma presença online forte, facilitar a navegação e melhorar a experiência do usuário.",
  },
  {
    title: "Serviços de Design",
    description:
      "Crie uma identidade visual impactante com nossos serviços de design gráfico. Desenvolvemos artes que capturam a essência da sua marca e engajam seu público.",
    icon: FaPaintBrush,
    details: [
      "Logotipos personalizados",
      "Materiais de marketing",
      "Design para redes sociais",
    ],
    reason:
      "Um design gráfico de qualidade é essencial para comunicar efetivamente a identidade da sua marca e atrair seu público-alvo.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center pt-32 pb-12 md:pt-40 md:pb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
            Nossos{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-orange-500 to-red-400">
              Serviços
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Oferecemos uma variedade de serviços para atender às suas
            necessidades de marketing digital. Confira abaixo como podemos
            ajudar você a alcançar seus objetivos.
          </p>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className="mb-16 flex flex-col lg:flex-row border-2 border-gray-300 text-gray-700 p-10 rounded-md relative"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="lg:ml-8 ">
              <div className="flex items-center left-1/2 -translate-x-1/2 w-2/3 sm:left-auto sm:translate-x-0 sm:w-auto gap-2 bg-primary text-white h-16 absolute top-0 -translate-y-1/2 p-4 rounded-lg rounded-r-2xl">
            
                  <service.icon className="w-10 h-10 text-white" />
               
                <h2 className="text-base sm:text-3xl  font-bold leading-snug tracking-tight pr-2 ">
                  {service.title}
                </h2>
              </div>
              <p className="text-xl mt-6 mb-4">
                {service.description}
              </p>
              <ul className="list-disc list-inside text-lg pl-4  mb-4 space-y-1">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="font-semibold">{detail}</li>
                ))}
              </ul>
              <p className="text-lg  mt-10">{service.reason}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button></button>
      </div>
    </section>
  );
}
