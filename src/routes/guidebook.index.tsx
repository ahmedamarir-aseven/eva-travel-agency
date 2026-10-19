import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, ArrowRight, Sparkles, Compass } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { guidebooks } from "@/data/guidebooks";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/guidebook/")({
  component: GuidebookIndexPage,
  head: () => ({
    meta: [
      { title: "Morocco Travel Guides & Local Insights | Eva Travel" },
      {
        name: "description",
        content:
          "Expert travel planning advice, Sahara packing lists, riad etiquette, and culinary tips from our Marrakech-based team.",
      },
    ],
  }),
});

function GuidebookIndexPage() {
  const { t, language } = useLanguage();

  const title = {
    en: "Morocco Travel Guides & Local Insights",
    fr: "Guides de Voyage & Conseils Locaux au Maroc",
    es: "Guías de Viaje y Consejos Locales de Marruecos",
  }[language] || "Morocco Travel Guides & Local Insights";

  const subtitle = {
    en: "Practical planning tips, cultural etiquette, packing lists, and culinary traditions written by our native guides.",
    fr: "Conseils pratiques de préparation, savoir-vivre en riad, listes de bagages et traditions culinaires rédigés par nos guides.",
    es: "Consejos prácticos de preparación, etiqueta en riads, equipaje y tradiciones gastronómicas por nuestros guías nativos.",
  }[language] || "Practical planning tips written by our native guides.";

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Banner */}
        <section className="zellige-grid border-b border-border bg-secondary/25 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
              {t("resources")}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-extrabold sm:text-5xl tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-medium">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {guidebooks.map((g, idx) => {
              const content = g[language] || g.en;
              return (
                <ScrollReveal key={g.slug} animation="slide-up" delay={idx * 120} className="h-full">
                  <Link
                    to="/guidebook/$slug"
                    params={{ slug: g.slug }}
                    className="group overflow-hidden rounded-3xl border border-border/80 bg-card transition-all duration-300 hover:border-saffron hover:shadow-[var(--shadow-warm)] hover:-translate-y-1 flex flex-col h-full text-foreground hover:no-underline"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-secondary/35">
                      <img
                        src={g.image}
                        alt={content.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-saffron shadow-sm backdrop-blur-sm">
                        {content.tag}
                      </span>
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-2 text-[10px] font-semibold text-muted-foreground mb-2">
                          <Clock className="size-3.5 text-saffron" />
                          <span>{content.readTime}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                          {content.title}
                        </h3>
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90 line-clamp-3">
                          {content.summary}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-border/50 pt-4 flex items-center justify-between text-primary text-[11px] font-bold uppercase tracking-wider group-hover:text-saffron transition-colors">
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="size-3.5" />
                          {t("readGuidebook")}
                        </span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Need advice CTA */}
          <div className="mt-20 rounded-3xl border border-border/80 bg-secondary/30 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
            <Compass className="size-10 text-saffron mx-auto mb-3 stroke-1" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              {language === "fr" ? "Une question précise sur votre futur voyage ?" : "Have a specific question about traveling in Morocco?"}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              {language === "fr"
                ? "Nos conseillers locaux sont à votre disposition pour vous répondre en toute transparence."
                : "Our local travel designers in Marrakech are ready to answer any questions about routes, weather, stays, and packing."}
            </p>
            <div className="mt-6">
              <Button asChild variant="hero" className="rounded-full">
                <Link to="/contact">
                  <span>{t("contact")}</span>
                  <ArrowRight className="size-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
