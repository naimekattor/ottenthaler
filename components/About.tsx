"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const root = document.getElementById("__next") ?? document.body;
    setRootElement(root);
  }, []);
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Top Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Experience Box */}
            <ScrollAnimation>
              <div className="bg-primary text-white rounded shadow-lg flex flex-col items-center justify-center text-center p-8">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <CountUp
                    end={3}
                    enableScrollSpy
                    scrollSpyDelay={1000}
                    suffix="+"
                  />
                </h2>
                <p className="mt-2 text-lg">jahre Erfahrung</p>
              </div>
            </ScrollAnimation>

            {/* Main Image */}
            <div className="rounded overflow-hidden shadow-lg">
              <Image
                src="/images/B3.jpg"
                alt="About main"
                width={600}
                height={400}
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <ScrollAnimation>
            <div className="relative grid grid-cols-4 gap-6 items-center">
              {/* Image taking 3/4 */}
              <div className="col-span-3">
                <Image
                  src="/images/B4.jpg"
                  alt="About extra"
                  width={900}
                  height={500}
                  className="w-full h-[350px] rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* Wrapper for SVG + Testimonial */}
              <div className="col-span-1 relative flex items-center justify-center overflow-visible ">
                <div className="relative">
                  {/* SVG Background */}
                  <div className="absolute right-0 bottom-[70px] -z-10">
                    <svg
                      className="w-[350px] h-[400px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 600 600"
                    >
                      <defs>
                        <pattern
                          id="dotPattern"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="2" cy="2" r="2" fill="#e6e6e6" />
                        </pattern>
                      </defs>
                      <rect width="600" height="600" fill="url(#dotPattern)" />
                    </svg>
                  </div>

                  {/* Floating Testimonial */}
                  {/* <div className="relative z-10 bg-white rounded-xl shadow-lg flex items-center gap-4 px-5 py-4 -ml-[100px] animate-bounce">
                    <Image
                      src="/images/about_person.png"
                      alt="Alex Jones"
                      width={55}
                      height={55}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">Alex Jones</h4>
                      <p className="text-xs text-gray-500">Security Boy</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Right Side (Text) */}
        <div>
          <span className="text-gray-500 font-medium uppercase tracking-wide">
            Über uns
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black/80 mt-2 leading-tight">
            Unsere Geschichte: 28 Jahre Vertrauen. Neu gedacht.
          </h2>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Ein neues Kapitel mit bewährter Tradition: Ottenthalers Küchen wird nun als inhabergeführtes Familienunternehmen von der VADA Conte GmbH geführt. In direkter partnerschaftlicher Zusammenarbeit mit der CONTE Küche & Raum GmbH aus Haag in Oberbayern führen wir das Erbe von Christine und Erwin Ottenthaler fort – den Ruf als vertrauensvoller Ansprechpartner für die gutbürgerliche Einbauküche für jedes Budget in der Region.
          </p>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Als autorisierter NOLTE Küchen-Partner verbinden wir diesen traditionsreichen Ansatz mit der modernen Designvielfalt der NOLTE NEO Serie. So entstehen Küchen, die dauerhaften Wert besitzen, perfekt funktionieren und für Haushalte in Töging am Inn, Altötting, Mühldorf und Rosenheim erschwinglich bleiben.

          </p>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Diese einzigartige Kombination aus handwerklicher Präzision unseres erfahrenen Teams, der exklusiven Markenpartnerschaft mit NOLTE und der starken Netzwerk-Rückendeckung durch CONTE bietet Ihnen Planungssicherheit und ein hervorragendes Preis-Leistungs-Verhältnis.
          </p>
          <p className="mt-2 text-gray-600 leading-relaxed">
            „Unser Ziel ist es, das Vertrauen in den Namen Ottenthaler mit neuem Schwung zu erfüllen: Kompromisslose Qualität und persönlicher Service für jeden Geldbeutel – realisiert durch unsere langjährigen, zuverlässigen Montagepartner.“
          </p>
          <p className="mt-2 text-gray-600 leading-relaxed">
            – Ihr Team der VADA Conte GmbH
          </p>

          <Button
            className="h-12 min-w-[150px]  mt-2"
            onClick={() => setShowModal(true)}
          >
            Termin buchen <ArrowRight />
          </Button>

          {showModal && rootElement && (
            <PopupModal
              url="https://calendly.com/contekuechen"
              onModalClose={() => setShowModal(false)}
              open={showModal}
              rootElement={rootElement}
            />
          )}
        </div>
      </div>
    </section>
  );
}
