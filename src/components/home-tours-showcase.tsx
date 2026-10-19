import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TourCard } from "@/components/tour-card";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";

export function HomeToursShowcase() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: language === "fr" ? "Tous les circuits" : language === "es" ? "Todos los circuitos" : "All Journeys" },
    { id: "desert", label: language === "fr" ? "Sahara & Dunes" : language === "es" ? "Sahara y Dunas" : "Sahara & Desert" },
    { id: "imperial", label: language === "fr" ? "Médinas Impériales" : language === "es" ? "Medinas Imperiales" : "Imperial Cities" },
    { id: "mountains", label: language === "fr" ? "Haut Atlas" : language === "es" ? "Alto Atlas" : "Atlas Mountains" },
    { id: "day", label: language === "fr" ? "Excursions d'un jour" : language === "es" ? "Excursiones de 1 día" : "Day Trips" },
  ];

  const filteredTours = tours.filter((tour) => {
    if (activeCategory === "all") return true;
    const reg = tour.region.toLowerCase();
    const daysNum = parseInt(tour.days.replace(/\D/g, ""), 10) || 1;
    if (activeCategory === "desert") return reg.includes("desert");
    if (activeCategory === "imperial") return reg.includes("imperial");
    if (activeCategory === "mountains") return reg.includes("mountain") || reg.includes("atlas");
    if (activeCategory === "day") return daysNum === 1;
    return true;
  }).slice(0, 6);

  const signatureTripsLabel = {
    en: "Signature journeys",
    fr: "Voyages signature",
    es: "Viajes insignia"
  }[language] || "Signature journeys";

  const whereWellTakeYou = {
    en: "Where We'll Take You",
    fr: "Où nous vous emmènerons",
    es: "Dónde te llevaremos"
  }[language] || "Where We'll Take You";

  const viewAllTours = {
    en: "View full catalog",
    fr: "Voir tout le catalogue",
    es: "Ver todo el catálogo"
  }[language] || "View full catalog";

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 border-b border-border/70">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <ScrollReveal animation="fade-in" className="flex-1 min-w-[250px]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
              {signatureTripsLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              {whereWellTakeYou}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground/90 max-w-xl leading-relaxed">
              {language === "fr"
                ? "Chaque circuit est 100% privé et personnalisable selon vos envies, votre rythme et vos dates exactes."
                : language === "es"
                ? "Cada circuito es 100% privado y personalizable según tus deseos, tu ritmo y tus fechas exactas."
                : "Every tour is 100% private and customizable around your parameters, energy level, and exact dates."}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={150}>
          <Button
            asChild
            variant="sand"
            className="rounded-full px-6 font-semibold uppercase tracking-wider text-[11px] h-11 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer shadow-sm"
          >
            <Link to="/tours">
              <span>{viewAllTours}</span>
              <ArrowRight className="size-3.5 ml-1.5" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Tour Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredTours.map((tour, idx) => {
          let displayTour = { ...tour };
          if (language === "fr") {
            if (tour.slug === "sahara-merzouga") {
              displayTour.title = "Nuits au Sahara à Merzouga";
              displayTour.summary = "Traversez la vallée du Draa jusqu'aux dunes de l'Erg Chebbi, montez à dromadaire au coucher du soleil et dormez dans un camp de luxe.";
            } else if (tour.slug === "marrakech-medina") {
              displayTour.title = "Médina et Souks de Marrakech";
              displayTour.summary = "Découvrez Jemaa el-Fna au crépuscule, les riads cachés, le palais de la Bahia et une promenade guidée dans les souks aux épices.";
            } else if (tour.slug === "atlas-valleys") {
              displayTour.title = "Haut Atlas et Villages Berbères";
              displayTour.summary = "Randonnez dans les vallées en terrasses d'Imlil et de l'Ourika, partagez le thé à la menthe chez l'habitant et logez dans une auberge de montagne.";
            }
          } else if (language === "es") {
            if (tour.slug === "sahara-merzouga") {
              displayTour.title = "Noches del Sahara en Merzouga";
              displayTour.summary = "Cruza el valle del Draa hasta las dunas de Erg Chebbi, cabalga en dromedario al atardecer y duerme en un campamento de lujo.";
            } else if (tour.slug === "marrakech-medina") {
              displayTour.title = "Medina y Zocos de Marrakech";
              displayTour.summary = "Jemaa el-Fna al atardecer, riads ocultos, el Palacio de la Bahía y un paseo guiado por los zocos de las especias.";
            } else if (tour.slug === "atlas-valleys") {
              displayTour.title = "Alto Atlas y Pueblos Bereberes";
              displayTour.summary = "Camina por los valles de Imlil y Ourika, comparte un té de menta con familias locales y alójate en un albergue de montaña.";
            }
          }
          return (
            <ScrollReveal key={tour.slug} animation="slide-up" delay={(idx % 3) * 120}>
              <TourCard tour={displayTour} />
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
