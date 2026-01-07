import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import {
  MdOutlineDesignServices,
  MdOutlineEventNote,
  MdOutlineKitchen,
} from "react-icons/md";

const Work = () => {
  return (
    <section className="pt-16 px-4">
      <h3 className="font-[600] text-[18px] text-center text-[#333333]">
        Unser Prozess
      </h3>
      <h2 className="font-semibold text-black/80 text-3xl sm:text-4xl lg:text-5xl text-center">
        Ihr Weg zur Traumküche – in 3 klaren Schritten.
      </h2>

      <div className="grid md:grid-cols-3 gap-8 container mx-auto py-20">
  {/* Step 01 */}
  <ScrollAnimation
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
  >
    <div className="relative text-center shadow-lg bg-white rounded-lg overflow-hidden h-full group">
      {/* Hover Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: "url('/images/B6.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        <div>
          <div className="text-8xl font-bold text-gray-100 mb-4">01</div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
            Schritt 1: Vor-Ort-Beratung & Individuelle Planung
          </h3>
          <p className="text-[#54595F] group-hover:text-white mb-6 text-left transition-colors">
            Wir starten mit Ihrer kostenlosen Erstberatung in unserem Studio in Töging. Hier lernen wir uns kennen und besprechen Ihre Wünsche und Ideen für Ihre neue NOLTE Küche oder Ihr Bad. Bei konkretem Interesse und zur detaillierten Planung vereinbaren wir einen Vor-Ort-Termin bei Ihnen zuhause in Töging, Altötting oder Mühldorf (gegen eine Planungspauschale). Dort nehmen wir alle Maße auf und entwickeln exklusiv mit der NOLTE Neo Kollektion den ersten Entwurf für Ihre individuelle Lösung – passend zu Ihrem Budget.
          </p>
        </div>

        {/* Icon at bottom */}
        <div className="w-12 h-12 mx-auto border-2 border-primary group-hover:border-white rounded-lg flex items-center justify-center transition-colors">
          <MdOutlineEventNote className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </ScrollAnimation>

  {/* Step 02 - Always visible background */}
  <div className="relative text-center shadow-lg bg-white rounded-lg overflow-hidden h-full">
    {/* Background + Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/B6.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </div>

    {/* Content */}
    <div className="relative z-10 p-8 text-white flex flex-col justify-between h-full">
      <div>
        <div className="text-8xl font-bold mb-4">02</div>
        <h3 className="text-2xl font-bold mb-4">
          Schritt 2: Transparentes Festpreis-Angebot & Detail-Abstimmung
        </h3>
        <p className="text-white/90 mb-6 text-left">
          Auf Basis der Vor-Ort-Planung erhalten Sie von uns ein kostenloses mündliches Preisangebot. Für die endgültige Entscheidungssicherheit erstellen wir auf Wunsch ein detailliertes, schriftliches Festpreisangebot inklusive aller Pläne und der 3D-Visualisierung (gegen eine Planungspauschale von 595€, die bei Kaufvertrag angerechnet wird). Auf dieser verbindlichen Grundlage stimmen wir gemeinsam die Feinheiten ab: Materialien, Farben, Griffe und die perfekte Integration Ihrer Elektrogeräte für eine Küche, die bis ins Detail zu Ihnen passt.
        </p>
      </div>

      {/* Icon at bottom */}
      <div className="w-12 h-12 mx-auto border-2 border-white rounded-lg flex items-center justify-center">
        <MdOutlineDesignServices className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>

  {/* Step 03 */}
  <ScrollAnimation
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
  >
    <div className="relative text-center shadow-lg bg-white rounded-lg overflow-hidden h-full group">
      {/* Hover Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: "url('/images/B6.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        <div>
          <div className="text-8xl font-bold text-gray-100 mb-4">03</div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
            Schritt 3: Koordinierte Montage & schlüsselfertige Übergabe
          </h3>
          <p className="text-[#54595F] group-hover:text-white mb-6 text-left transition-colors">
            Wir kümmern uns um alles. Nach der Fertigung bei NOLTE koordinieren wir Lieferung und termingerechte, saubere Montage durch unsere zuverlässigen Partner – inklusive aller Anschlüsse. Zum Abschluss übergeben wir Ihnen Ihre neue NOLTE Küche schlüsselfertig und Sie können sofort einziehen.
          </p>
        </div>

        {/* Icon at bottom */}
        <div className="w-12 h-12 mx-auto border-2 border-primary group-hover:border-white rounded-lg flex items-center justify-center transition-colors">
          <MdOutlineKitchen className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </ScrollAnimation>
</div>
    </section>
  );
};

export default Work;
