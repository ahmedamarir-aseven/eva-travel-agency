import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { ScrollReveal } from "@/components/scroll-reveal";
import balloon from "@/assets/balloon.jpg";
import camel from "@/assets/camel.jpg";
import experience from "@/assets/experience.jpg";
import desert from "@/assets/desert.jpg";
import fes from "@/assets/tour-fes.jpg";

export function SignatureExperiences() {
  const { t, language } = useLanguage();

  const experiences = [
    {
      title: t("expBalloonTitle"),
      desc: t("expBalloonDesc"),
      tag: language === "fr" ? "Aventure & Panorama" : language === "es" ? "Aventura y Vistas" : "Bucket List Flight",
      location: "Marrakech / High Atlas Foothills",
      duration: "4–5 Hours (Morning)",
      image: balloon,
    },
    {
      title: t("expCamelTitle"),
      desc: t("expCamelDesc"),
      tag: language === "fr" ? "Incontournable Sahara" : language === "es" ? "Esencial del Sahara" : "Sahara Sunset Trek",
      location: "Erg Chebbi, Merzouga",
      duration: "1.5–2 Hours",
      image: camel,
    },
    {
      title: t("expCookingTitle"),
      desc: t("expCookingDesc"),
      tag: language === "fr" ? "Gastronomie & Terroir" : language === "es" ? "Gastronomía y Tradición" : "Culinary Masterclass",
      location: "Marrakech or Fes Medina",
      duration: "3.5 Hours",
      image: experience,
    },
    {
      title: t("expHammamTitle"),
      desc: t("expHammamDesc"),
      tag: language === "fr" ? "Bien-être & Spa" : language === "es" ? "Bienestar y Spa" : "Royal Wellness & Spa",
      location: "Historic Medina Hammam",
      duration: "2 Hours",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    },
    {
      title: t("expZelligeTitle"),
      desc: t("expZelligeDesc"),
      tag: language === "fr" ? "Artisanat d'Art" : language === "es" ? "Artesanía Tradicional" : "Artisan Masterclass",
      location: "Fes Craft Cooperative",
      duration: "2.5 Hours",
      image: fes,
    },
    {
      title: t("expAgafayTitle"),
      desc: t("expAgafayDesc"),
      tag: language === "fr" ? "Sensations & Coucher de Soleil" : language === "es" ? "Sensaciones y Atardecer" : "Desert Thrill & Dinner",
      location: "Agafay Stone Desert (45 min from Marrakech)",
      duration: "4 Hours (Late afternoon)",
      image: desert,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 border-b border-border/70">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <ScrollReveal animation="fade-in" className="max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
            {t("signatureExpSubtitle")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {t("signatureExpTitle")}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
            {t("signatureExpDesc")}
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={100}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card hover:border-primary/50 hover:bg-primary/5 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all shadow-sm"
          >
            <span>{language === "fr" ? "Ajouter à mon voyage" : language === "es" ? "Añadir a mi viaje" : "Add to custom trip"}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </ScrollReveal>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, idx) => (
          <ScrollReveal key={exp.title} animation="slide-up" delay={idx * 100} className="h-full">
            <div className="group overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:border-saffron hover:shadow-[var(--shadow-warm)] hover:-translate-y-1">
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-secondary/30">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-saffron shadow-sm backdrop-blur-sm">
                    {exp.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] font-semibold text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3 text-saffron" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="size-3 text-saffron" /> {exp.location.split("(")[0]}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="border-t border-border/50 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                    {language === "fr" ? "Disponible sur mesure" : language === "es" ? "Disponible a medida" : "Custom Add-On"}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary group-hover:text-saffron transition-colors"
                  >
                    <span>{language === "fr" ? "Réserver" : language === "es" ? "Reservar" : "Inquire"}</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
