import { Star, ShieldCheck, Award, ThumbsUp, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TrustCredentials() {
  const { language } = useLanguage();

  const trustBadges = [
    {
      icon: Star,
      title: "4.9 / 5.0 Rating",
      sub: "480+ Verified Traveler Reviews",
      detail: "Google & TripAdvisor",
    },
    {
      icon: ShieldCheck,
      title: "Licensed Agency",
      sub: "Reg. #44/2014 Marrakech",
      detail: "Ministry of Tourism Certified",
    },
    {
      icon: Award,
      title: "Certificate of Excellence",
      sub: "Top Rated Morocco Operator",
      detail: "Consecutive 2021–2025",
    },
    {
      icon: Heart,
      title: "100% Carbon Offset",
      sub: "High Atlas Reforestation",
      detail: "Sustainable Travel Partner",
    },
  ];

  const travelerStories = [
    {
      quote:
        language === "fr"
          ? "Notre chauffeur Youssef était extraordinaire. Après 10 jours entre Marrakech, Dadès, Merzouga et Fès, nous avions l'impression de voyager en famille. Les bivouacs de luxe dans l'Erg Chebbi dépassaient toutes nos attentes."
          : language === "es"
          ? "Nuestro chófer Youssef fue extraordinario. Tras 10 días entre Marrakech, Dades, Merzouga y Fez, sentimos que viajábamos en familia. El campamento en Erg Chebbi superó cualquier expectativa."
          : "Our chauffeur Youssef was extraordinary. Traveling with our two teenage daughters through the High Atlas, Dades Valley and Erg Chebbi felt safe, relaxing, and unforgettable. The luxury desert tent had better water pressure than many European hotels!",
      name: "David & Sarah Kensington",
      location: "London, UK",
      route: "7-Day Sahara & Imperial Cities Crossing",
      date: "Travelled October 2025",
      rating: 5,
    },
    {
      quote:
        language === "fr"
          ? "La planification sur mesure a été un jeu d'enfant. L'équipe a réajusté les riads pour inclure des piscines pour nos enfants. Le véhicule Prado était impeccable et climatisé à la perfection."
          : language === "es"
          ? "Planificar a medida fue facilísimo. El equipo ajustó los riads para tener piscina para los niños. El vehículo Prado estaba impecable y con aire acondicionado perfecto."
          : "Planning custom dates was seamless. They redesigned our pace twice without complaint so our kids could swim each afternoon. The private Prado was spotless and our driver knew the best quiet viewpoints away from tour buses.",
      name: "Marc & Elena Valette",
      location: "Bordeaux, France",
      route: "5-Day High Atlas & Merzouga Dunes",
      date: "Travelled January 2026",
      rating: 5,
    },
    {
      quote:
        language === "fr"
          ? "Zéro mauvaise surprise. Les prix annoncés étaient clairs dès le départ, les riads historiques étaient magnifiques et le cours de cuisine à Fès restera notre meilleur souvenir du Maroc."
          : language === "es"
          ? "Cero sorpresas desagradables. El presupuesto fue transparente desde el inicio, los riads históricos una maravilla y la clase de cocina en Fez fue lo mejor del viaje."
          : "Transparent pricing with zero hidden surcharges or forced souvenir stops. The boutique riad courtyards were tranquil sanctuaries, and the private medina historian in Fes brought 1,000 years of history alive.",
      name: "Carmen & Rodrigo Morales",
      location: "Madrid, Spain",
      route: "8-Day Grand Imperial & Desert Tour",
      date: "Travelled November 2025",
      rating: 5,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 border-b border-border/70">
      {/* Badges Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
        {trustBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <ScrollReveal key={badge.title} animation="slide-up" delay={idx * 80}>
              <div className="rounded-2xl border border-border/80 bg-card p-5 text-center shadow-sm h-full flex flex-col items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron/10 text-saffron mb-3">
                  <Icon className="size-5" />
                </div>
                <h4 className="font-display text-base font-extrabold text-foreground">
                  {badge.title}
                </h4>
                <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">
                  {badge.sub}
                </p>
                <span className="text-[9px] font-bold uppercase tracking-wider text-saffron mt-1">
                  {badge.detail}
                </span>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Verified Reviews Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <ScrollReveal animation="fade-in">
          <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
            {language === "fr" ? "Témoignages vérifiés" : language === "es" ? "Testimonios verificados" : "Verified Traveler Stories"}
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {language === "fr"
              ? "Ce Que Nos Voyageurs Partagent"
              : language === "es"
              ? "Lo Que Dicen Quienes Viajaron Con Nosotros"
              : "Memories From the Open Road"}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed">
            {language === "fr"
              ? "Chaque avis provient de voyageurs réels ayant parcouru le Maroc avec nos chauffeurs et guides."
              : language === "es"
              ? "Cada reseña proviene de viajeros reales que recorrieron Marruecos con nuestros chóferes y guías."
              : "Unfiltered feedback from travelers who explored Morocco's medinas, canyons, and dunes with Eva Travel."}
          </p>
        </ScrollReveal>
      </div>

      {/* Stories Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {travelerStories.map((story, idx) => (
          <ScrollReveal key={story.name} animation="slide-up" delay={idx * 150} className="h-full">
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-8 shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:border-saffron hover:shadow-[var(--shadow-warm)] hover:-translate-y-1">
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-saffron mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-saffron text-saffron" />
                  ))}
                </div>

                <blockquote className="text-xs sm:text-sm italic leading-relaxed text-foreground/90 font-medium">
                  "{story.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-5 border-t border-border/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-display text-sm font-bold text-foreground">
                      {story.name}
                    </h5>
                    <p className="text-[10px] text-muted-foreground font-medium">
                      {story.location}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80 bg-secondary/40 px-3 py-1.5 rounded-xl border border-border/50">
                  <span className="truncate max-w-[170px] text-primary">{story.route}</span>
                  <span>{story.date.split(" ")[1]}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
