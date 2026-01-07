"use client";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Define the props for a single FAQ item for TypeScript
interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

// A single collapsible FAQ item component
const FaqItem: React.FC<FaqItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`border-b border-gray-200 transition-colors duration-300 ${
        isOpen ? "bg-primary text-white" : "bg-white"
      }`}
    >
      <button
        aria-label="toggle"
        className={`w-full text-left py-4 px-6 flex justify-between items-center transition-colors duration-300 ${
          isOpen ? "text-white" : "text-gray-800"
        }`}
        onClick={onToggle}
      >
        <span className="text-lg font-semibold flex items-center">
          {/* <span>{id}.</span> */}
          {question}
        </span>

        <ChevronsRight
          className={`w-6 h-6 transition-transform duration-300 transform ${
            isOpen ? "rotate-90 text-white" : "text-gray-800"
          }`}
        />
      </button>
      {/* The answer section, conditionally rendered with a smooth transition */}
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <p className="text-base  text-white/80">{answer}</p>
      </div>
    </div>
  );
};
const Faq = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question:
        "Sind Sie ein autorisierter Küchenfachhändler vor Ort?",
      answer:
        "Ja, wir sind der autorisierte NOLTE Küchen-Partner in Töging am Inn. Als inhabergeführtes Familienunternehmen mit über 28 Jahren Erfahrung in der Region planen und realisieren wir Ihre Küche exklusiv mit der hochwertigen NOLTE Neo Serie.",
    },
    {
      id: 2,
      question: "Wie läuft die erste Beratung ab und was kostet sie?",
      answer:
        "Sie haben zwei Möglichkeiten: Eine kostenlose und unverbindliche Erstberatung findet in unserem Studio in Töging am Inn statt. Wenn Sie eine detaillierte Vor-Ort-Beratung inklusive Aufmaß in Ihrem Zuhause wünschen, berechnen wir dafür eine Planungspauschale von 120€.",
    },
    {
      id: 3,
      question: "Wie funktioniert die Angebotserstellung und was kostet ein Festpreisangebot?",
      answer:
        "Nach der Beratung erhalten Sie zunächst eine kostenlose mündliche Preisinformation. Ein detailliertes, schriftliches Festpreisangebot mit allen Leistungen, Plänen und der 3D-Visualisierung erstellen wir gegen eine Planungspauschale von 595€. Diese Gebühr wird bei späterem Kaufvertrag selbstverständlich vollständig angerechnet.",
    },
    {
      id: 4,
      question:
        "In welchem Umkreis um Töging liefern und montieren Sie?",
      answer:
        "Unser Servicegebiet umfasst den gesamten Landkreis und einen Umkreis von ca. 40 km um Töging am Inn. Dazu gehören insbesondere Altötting, Mühldorf, Rosenheim, Burghausen, Garching und Neuötting.",
    },
    {
      id: 5,
      question: "Wer baut die Küche bei mir ein?",
      answer:
        "Wir arbeiten mit langjährigen, zuverlässigen Montagepartnern aus der Region zusammen. Sie übernehmen die schlüsselfertige Montage inklusive aller Wasser- und Elektroanschlüsse mit größter Sorgfalt.",
    },
    {
      id: 6,
      question:
        "Bieten Sie auch Badplanung und -sanierung an?",
      answer:
        "Ja! Neben Küchen sind wir auch Ihr Ansprechpartner für neue Bäder. Wir bieten die gleiche persönliche Beratung und Planung wie bei Ihrer Küche – alles aus einer Hand.",
    },
    {
      id: 7,
      question:
        "Was passiert mit meiner alten Küche?",
      answer:
        "Auf Wunsch übernehmen wir für Sie den kompletten Abbau und die fachgerechte Entsorgung Ihrer alten Küche. So starten Sie stressfrei in Ihr neues Küchenglück.",
    },
    {
      id: 8,
      question: "Wie lange dauert es von der Planung bis zur fertigen Küche?",
      answer:
        "Nach der finalen Planung und Auftragserteilung beträgt die Herstellungszeit bei NOLTE in der Regel 6-8 Wochen. Die Montage erfolgt dann termingerecht innerhalb weniger Tage.",
    },
    // {
    //   id: 9,
    //   question:
    //     " Kann ich bei Ihnen auch Möbel für andere Räume planen lassen?",
    //   answer:
    //     "Ja – neben Küchen bieten wir auch maßgeschneiderte Lösungen für Wohnräume, Garderoben, Hauswirtschaftsräume, Ankleidezimmer und vieles mehr.",
    // },
    // {
    //   id: 10,
    //   question:
    //     "Habe ich während der Küchenplanung einen festen Ansprechpartner?",
    //   answer:
    //     "Ja – Sie haben immer einen persönlichen Ansprechpartner, der Ihr Küchenprojekt von der Planung bis zur Fertigstellung betreut.",
    // },
  ];

  return (
    <section className=" py-20 px-4">
      <div className="flex flex-col lg:flex-row items-start justify-center container mx-auto  font-sans">
        {/* Left side: Hero text and project stats */}

        <div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-12 lg:mb-0 lg:pr-16">
          <div className="text-sm uppercase font-semibold text-gray-500 tracking-wide mb-2">
            FAQ
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black/80  leading-tight tracking-tight mb-4">
            Häufige Fragen – Ihr Küchen- und Badprofi in Töging am Inn
          </h3>
          <p className="text-lg text-gray-500 max-w-xl mb-8">
            Sie haben Fragen zu Ihrer neuen Küche oder Badplanung? Hier finden Sie die wichtigsten Antworten rund um Planung, Service und Montage in Töging, Altötting, Mühldorf, Rosenheim und dem gesamten Umkreis von 40 km. Sollten Sie weitere Fragen haben, kontaktieren Sie uns gerne direkt.
          </p>

          {/* Project completed box */}
          <div className="flex items-center space-x-4 border-1 border-primary  p-6 rounded shadow-lg">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-4 ">
                  <Image
                    src={"/images/faq_icon.png"}
                    width={60}
                    height={60}
                    alt="icon"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  1k+ Hunderte Projekte. Unzählige Erfolgsgeschichten.
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Jedes Projekt ist einzigartig – und doch verbindet sie alle
                unser Anspruch an Qualität, Design und Perfektion. Von modernen
                Küchen bis zu ganzheitlichen Raumkonzepten: Unsere Referenzen
                zeigen, wie aus Ideen inspirierende Wohnräume werden.
              </span>
            </div>
          </div>
        </div>

        {/* Right side: Accordion of FAQ items */}
        <div className="w-full lg:w-1/2 rounded space-y-4 overflow-hidden shadow-2xl">
          {faqData.map((item) => (
            <FaqItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
