import { Users, Briefcase, Wind, Wifi, ShieldCheck, Fuel } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { ScrollReveal } from "@/components/scroll-reveal";
import transfer from "@/assets/transfer.jpg";

export function FleetShowcase() {
  const { t, language } = useLanguage();

  const vehicles = [
    {
      title: t("fleetPradoTitle"),
      tag: "1–4 Guests · 4x4 All-Terrain",
      image: transfer,
      specs: [
        { icon: Users, label: "Up to 4 Passengers" },
        { icon: Briefcase, label: "4 Large Suitcases + Carry-ons" },
        { icon: Wind, label: "Dual-Zone Heavy-Duty A/C" },
        { icon: ShieldCheck, label: "Full 4WD Desert & Mountain Lock" },
      ],
      features: [
        language === "fr" ? "Idéal pour les couples et petites familles" : language === "es" ? "Ideal para parejas y familias pequeñas" : "Ideal for couples & small families",
        language === "fr" ? "Glacière électrique avec bouteilles d'eau fraîches" : language === "es" ? "Nevera eléctrica con botellas de agua fresca" : "Onboard cool box with unlimited chilled bottled water",
        language === "fr" ? "Prises USB et chargeurs pour vos appareils" : language === "es" ? "Puertos USB y cargadores para dispositivos" : "High-speed USB charging points for smartphones & cameras",
        language === "fr" ? "Intérieur cuir soigné et suspension tout-terrain douce" : language === "es" ? "Interior en cuero cuidado y suspensión suave" : "Supple leather seating & smooth off-road suspension",
      ],
      description: t("fleetPradoDesc"),
    },
    {
      title: t("fleetVitoTitle"),
      tag: "4–7 Guests · Executive Passenger Van",
      image: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg",
      specs: [
        { icon: Users, label: "Up to 7 Passengers" },
        { icon: Briefcase, label: "7–8 Large Luggage Pieces" },
        { icon: Wind, label: "Rear Passenger Climate Control" },
        { icon: Wifi, label: "Complimentary Mobile Wi-Fi" },
      ],
      features: [
        language === "fr" ? "Parfait pour les familles avec enfants ou amis" : language === "es" ? "Perfecto para familias con niños o grupos de amigos" : "Spacious layout for families with children or friends",
        language === "fr" ? "Sièges ergonomiques grand confort inclinables" : language === "es" ? "Asientos ergonómicos reclinables de gran confort" : "Individual reclining executive seats with armrests",
        language === "fr" ? "Grandes baies vitrées panoramiques pour admirer les paysages" : language === "es" ? "Grandes ventanas panorámicas para admirar paisajes" : "Expansive tinted panoramic windows for scenic route viewing",
        language === "fr" ? "Chauffeur privé expérimenté bilingue dédié" : language === "es" ? "Chófer privado experimentado y bilingüe" : "Dedicated bilingual driver-guide for your private party",
      ],
      description: t("fleetVitoDesc"),
    },
    {
      title: t("fleetSprinterTitle"),
      tag: "8–14 Guests · Luxury Minicoach",
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg",
      specs: [
        { icon: Users, label: "Up to 14 Passengers" },
        { icon: Briefcase, label: "Dedicated Rear Cargo Bay" },
        { icon: Wind, label: "Multi-Zone High-Capacity Climate" },
        { icon: ShieldCheck, label: "Full Commercial Transport Insurance" },
      ],
      features: [
        language === "fr" ? "Conçu pour les groupes privés, réunions de famille & retraites" : language === "es" ? "Diseñado para grupos privados, reuniones familiares y retiros" : "Bespoke small-group touring, family reunions & retreats",
        language === "fr" ? "Hauteur sous plafond complète pour se tenir debout" : language === "es" ? "Altura interior completa para estar de pie con comodidad" : "Stand-up cabin height with easy walkthrough central aisle",
        language === "fr" ? "Système audio avec microphone pour les commentaires du guide" : language === "es" ? "Sistema de audio con micrófono para comentarios del guía" : "Integrated PA microphone system for guided commentary",
        language === "fr" ? "Suspension pneumatique de grand confort sur les longs trajets" : language === "es" ? "Suspensión neumática de alto confort en viajes largos" : "Pneumatic comfort suspension for peaceful mountain transit",
      ],
      description: t("fleetSprinterDesc"),
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 border-b border-border/70">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <ScrollReveal animation="fade-in">
          <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
            {t("fleetSubtitle")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {t("fleetTitle")}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
            {t("fleetDesc")}
          </p>
        </ScrollReveal>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {vehicles.map((v, idx) => (
          <ScrollReveal key={v.title} animation="slide-up" delay={idx * 150} className="h-full">
            <div className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:border-saffron hover:shadow-[var(--shadow-warm)] hover:-translate-y-1">
              <div>
                {/* Vehicle Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-secondary/30">
                  <img
                    src={v.image}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm">
                    {v.tag}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground/90 leading-relaxed">
                    {v.description}
                  </p>

                  {/* Specs Pill Grid */}
                  <div className="mt-5 grid grid-cols-2 gap-2.5 pb-5 border-b border-border/60">
                    {v.specs.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-xl bg-secondary/40 p-2 text-[10px] font-semibold text-foreground/90"
                        >
                          <Icon className="size-3.5 text-saffron shrink-0" />
                          <span className="truncate">{s.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Features List */}
                  <div className="mt-5 space-y-2">
                    {v.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground/90">
                        <span className="text-saffron font-bold text-xs mt-0.5">•</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <div className="border-t border-border/50 pt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {language === "fr" ? "Carburant & Chauffeur inclus" : language === "es" ? "Combustible y chófer incluidos" : "Fuel, Tolls & Chauffeur Included"}
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">100% Insured</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
