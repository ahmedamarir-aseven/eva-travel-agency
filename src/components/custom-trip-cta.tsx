import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

export function CustomTripCta() {
  const { t, language } = useLanguage();

  const title = {
    en: "Dreaming of a Morocco route tailored to your exact dates?",
    fr: "Vous rêvez d'un itinéraire au Maroc adapté à vos dates exactes ?",
    es: "¿Sueñas con una ruta por Marruecos adaptada a tus fechas exactas?",
  }[language] || "Dreaming of a Morocco route tailored to your exact dates?";

  const desc = {
    en: "Tell us your wish list, traveler count, and style preference. One of our Marrakech-based travel designers will curate a personalized day-by-day itinerary with transparent pricing within 24 hours.",
    fr: "Partagez vos envies, le nombre de voyageurs et votre style d'hébergement. L'un de nos créateurs de voyage basés à Marrakech concevra un itinéraire personnalisé jour par jour avec un tarif clair sous 24 heures.",
    es: "Comparte tus deseos, número de viajeros y estilo de alojamiento. Uno de nuestros diseñadores de viajes en Marrakech creará un itinerario diario personalizado con precio transparente en menos de 24 horas.",
  }[language] || "Tell us your wish list, traveler count, and style preference.";

  const bullets = [
    language === "fr" ? "Devis clair sans engagement" : language === "es" ? "Presupuesto sin compromiso" : "Zero-obligation customized quote",
    language === "fr" ? "Réponse garantie sous 24h" : language === "es" ? "Respuesta en menos de 24h" : "Guaranteed proposal in 24 hours",
    language === "fr" ? "Chauffeur privé & Riads vérifiés" : language === "es" ? "Chófer privado y riads verificados" : "Private chauffeur & hand-vetted stays",
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-secondary/20 to-secondary/40 p-8 sm:p-14 shadow-xl">
        <div className="absolute right-0 top-0 -mt-10 -mr-10 h-72 w-72 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 -mb-10 -ml-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 text-saffron border border-saffron/30 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="size-3" />
            {language === "fr" ? "Voyage 100% sur mesure" : language === "es" ? "Viajes 100% a medida" : "Bespoke Travel Design"}
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground/95 leading-relaxed max-w-2xl font-medium">
            {desc}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-foreground/90">
            {bullets.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-saffron" />
                {b}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="xl" className="rounded-full shadow-lg">
              <Link to="/contact">
                <span>{language === "fr" ? "Demander un itinéraire sur mesure" : language === "es" ? "Solicitar itinerario a medida" : "Design My Custom Journey"}</span>
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>

            <a
              href="https://wa.me/212524000000?text=Hello%20Eva%20Travel,%20I%20would%20like%20to%20inquire%20about%20a%20private%20Morocco%20tour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-800 dark:text-emerald-300 font-bold uppercase tracking-wider text-[11px] px-6 h-12 transition-all cursor-pointer"
            >
              <MessageCircle className="size-4 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp Marrakech Office</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
