import { Check, X, Shield, Sparkles, Car, Home, Users, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TheEvaStandard() {
  const { t, language } = useLanguage();

  const comparisonFeatures = [
    {
      feature: language === "fr" ? "Type de transport" : language === "es" ? "Tipo de transporte" : "Transport Type",
      eva: language === "fr" ? "100% Privé (Toyota Prado 4x4 ou Van VIP dédié)" : language === "es" ? "100% Privado (Toyota Prado 4x4 o Van VIP dedicado)" : "100% Private (Toyota Prado 4x4 or Mercedes VIP)",
      evaGood: true,
      standard: language === "fr" ? "Bus partagé de 30–50 personnes ou minibus plein" : language === "es" ? "Autobús compartido de 30-50 plazas o minibus lleno" : "30–50 person coach or crowded shared minibus",
      standardGood: false,
    },
    {
      feature: language === "fr" ? "Campement dans le désert" : language === "es" ? "Campamento en el desierto" : "Sahara Desert Stay",
      eva: language === "fr" ? "Tente de luxe privée avec salle de bain, douche chaude & lit king" : language === "es" ? "Jaima de lujo privada con baño, ducha caliente y cama king" : "Private luxury tent with ensuite hot shower & king bed",
      evaGood: true,
      standard: language === "fr" ? "Tentes basiques avec douches et toilettes communes" : language === "es" ? "Jaimas básicas con duchas y baños compartidos" : "Standard canvas tents with communal shared toilets",
      standardGood: false,
    },
    {
      feature: language === "fr" ? "Rythme de voyage" : language === "es" ? "Ritmo de viaje" : "Pacing & Freedom",
      eva: language === "fr" ? "Arrêts photos illimités, départ à votre convenance, aucun détour forcé" : language === "es" ? "Paradas ilimitadas, salidas a tu hora, cero desvíos forzados" : "Unlimited photo stops, sleep in when you want, zero forced detours",
      evaGood: true,
      standard: language === "fr" ? "Programme à la minute et arrêts boutiques obligatoires" : language === "es" ? "Horario estricto y paradas obligatorias en tiendas de comisión" : "Rigid 15-min whistle stops and forced tourist shopping traps",
      standardGood: false,
    },
    {
      feature: language === "fr" ? "Chauffeur & Guides" : language === "es" ? "Chófer y Guías" : "Chauffeur & Local Guides",
      eva: language === "fr" ? "Guides natifs certifiés, rémunérés équitablement, parlant votre langue" : language === "es" ? "Guías nativos certificados, salario digno y en tu idioma" : "Licensed native guides, fairly compensated, fluent in your language",
      evaGood: true,
      standard: language === "fr" ? "Intermédiaires souvent sous-payés dépendant des pourboires" : language === "es" ? "Intermediarios a menudo mal remunerados dependientes de propinas" : "Freelancers relying heavily on aggressive sales commissions",
      standardGood: false,
    },
    {
      feature: language === "fr" ? "Assistance voyage" : language === "es" ? "Asistencia en viaje" : "On-Trip Support",
      eva: language === "fr" ? "Assistance WhatsApp 24h/24 directe avec notre équipe à Marrakech" : language === "es" ? "Soporte directo 24/7 por WhatsApp con nuestro equipo en Marrakech" : "Direct 24/7 WhatsApp concierge with our founders in Marrakech",
      evaGood: true,
      standard: language === "fr" ? "Centre d'appels externe ou aucun point de contact direct" : language === "es" ? "Call center externo o sin contacto directo durante la ruta" : "Ticketing call center with slow email response",
      standardGood: false,
    },
  ];

  const pillarCards = [
    {
      icon: Car,
      title: t("standardFleetTitle"),
      desc: t("standardFleetDesc"),
      badge: language === "fr" ? "Confort Premium" : language === "es" ? "Confort Premium" : "Premium Fleet",
    },
    {
      icon: Home,
      title: t("standardRiadsTitle"),
      desc: t("standardRiadsDesc"),
      badge: language === "fr" ? "Sélection Vérifiée" : language === "es" ? "Selección Verificada" : "Vetted Stays",
    },
    {
      icon: Users,
      title: t("standardGuidesTitle"),
      desc: t("standardGuidesDesc"),
      badge: language === "fr" ? "Guides Locaux" : language === "es" ? "Guías Locales" : "Native Guides",
    },
    {
      icon: Sparkles,
      title: t("standardFlexTitle"),
      desc: t("standardFlexDesc"),
      badge: language === "fr" ? "100% Flexible" : language === "es" ? "100% Flexible" : "Your Pace",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 border-b border-border/70">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <ScrollReveal animation="fade-in">
          <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
            {t("evaStandard")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {language === "fr"
              ? "L'Expérience d'un Vrai Voyage Privé"
              : language === "es"
              ? "La Experiencia de un Auténtico Viaje Privado"
              : "Why Private Travel Changes Everything"}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
            {t("evaStandardSub")}
          </p>
        </ScrollReveal>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {pillarCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <ScrollReveal key={card.title} animation="slide-up" delay={idx * 100} className="h-full">
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm h-full flex flex-col justify-between transition-all duration-300 hover:border-saffron hover:shadow-[var(--shadow-warm)] hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary border border-border/60">
                      <Icon className="size-5 text-saffron" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-full border border-border/50">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Detailed Side-by-Side Comparison Table */}
      <ScrollReveal animation="fade-in" delay={200}>
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm">
          <div className="p-6 sm:p-8 bg-secondary/30 border-b border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                {language === "fr" ? "Tableau comparatif" : language === "es" ? "Tabla comparativa" : "Side-by-side comparison"}
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground mt-1">
                Eva Travel vs. Standard Group Tours
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-primary font-bold">
                <Check className="size-4 text-emerald-600" /> Eva Travel
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <X className="size-4 text-rose-500" /> Mass Bus Tours
              </span>
            </div>
          </div>

          <div className="divide-y divide-border/60 overflow-x-auto">
            {comparisonFeatures.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_1.4fr_1.4fr] gap-4 p-5 sm:p-6 items-center text-xs hover:bg-secondary/15 transition-colors"
              >
                <div className="font-display text-sm font-bold text-foreground">
                  {item.feature}
                </div>
                <div className="flex items-start gap-2.5 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/20 text-emerald-950 dark:text-emerald-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px] mt-0.5">
                    ✓
                  </span>
                  <span className="font-medium leading-relaxed">{item.eva}</span>
                </div>
                <div className="flex items-start gap-2.5 bg-secondary/40 p-3 rounded-xl border border-border/60 text-muted-foreground">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-bold text-[10px] mt-0.5">
                    ✕
                  </span>
                  <span className="leading-relaxed">{item.standard}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
