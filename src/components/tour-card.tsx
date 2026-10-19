import { Clock, MapPin, ArrowRight } from "lucide-react";
import type { Tour } from "@/data/tours";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/use-language";

export function TourCard({ tour }: { tour: Tour }) {
  const { t, language } = useLanguage();

  // Dynamically translate day count text (e.g., "3 days" -> "3 jours" / "3 días")
  const translateDays = (daysStr: string) => {
    return daysStr
      .replace("days", language === "fr" ? "jours" : language === "es" ? "días" : "days")
      .replace("day", language === "fr" ? "jour" : language === "es" ? "día" : "day");
  };

  const locationLabel = language === "fr" ? "Maroc" : language === "es" ? "Marruecos" : "Morocco";

  return (
    <article className="group overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-warm)]">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={tour.image}
          alt={`${tour.title} — Morocco tour by Eva Travel`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm">
          {tour.region}
        </span>
      </div>

      <div className="p-6 flex flex-col justify-between h-[280px]">
        <div>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-saffron" /> {translateDays(tour.days)}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-saffron" /> {locationLabel}
            </span>
          </div>

          <Link to="/tours/$slug" params={{ slug: tour.slug }}>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary line-clamp-1">
              {tour.title}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">{tour.summary}</p>
        </div>

        {/* Footer Area */}
        <div className="border-t border-border/50 pt-5 flex items-center justify-between mt-auto">
          <div className="flex flex-col leading-none">
            <span className="text-[8.5px] font-bold uppercase tracking-widest text-muted-foreground/75 mb-1">
              {t("customTailoring")}
            </span>
            <span className="font-display text-[13px] font-extrabold text-primary">
              {t("priceOnRequest")}
            </span>
          </div>

          {/* Link button with arrow animation */}
          <Link
            to="/tours/$slug"
            params={{ slug: tour.slug }}
            className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 border border-border/80 hover:border-primary/50 hover:bg-primary/5 px-4.5 py-2 text-[10px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-300 cursor-pointer shadow-sm group-hover:shadow"
          >
            {t("explore")}
            <ArrowRight className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
