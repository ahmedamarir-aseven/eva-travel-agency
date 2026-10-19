import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Compass, Calendar, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { tours } from "@/data/tours";
import { Button } from "@/components/ui/button";

export function TripFinder() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");

  // Calculate matching tours
  const matchingTours = tours.filter((tour) => {
    // Match region
    if (selectedRegion !== "all") {
      const regLower = tour.region.toLowerCase();
      if (selectedRegion === "desert" && !regLower.includes("desert")) return false;
      if (selectedRegion === "imperial" && !regLower.includes("imperial")) return false;
      if (selectedRegion === "mountains" && !regLower.includes("mountain") && !regLower.includes("atlas")) return false;
      if (selectedRegion === "coast" && !regLower.includes("coast")) return false;
    }

    // Match duration
    if (selectedDuration !== "all") {
      const daysNum = parseInt(tour.days.replace(/\D/g, ""), 10) || 1;
      if (selectedDuration === "1" && daysNum !== 1) return false;
      if (selectedDuration === "2-3" && (daysNum < 2 || daysNum > 3)) return false;
      if (selectedDuration === "4+" && daysNum < 4) return false;
    }

    // Match style
    if (selectedStyle !== "all") {
      const fullText = (tour.title + " " + tour.summary + " " + tour.highlights.join(" ")).toLowerCase();
      if (selectedStyle === "glamping" && !fullText.includes("desert") && !fullText.includes("camp") && !fullText.includes("merzouga")) return false;
      if (selectedStyle === "culture" && !fullText.includes("medina") && !fullText.includes("palace") && !fullText.includes("fes") && !fullText.includes("marrakech")) return false;
      if (selectedStyle === "trek" && !fullText.includes("atlas") && !fullText.includes("hike") && !fullText.includes("berber") && !fullText.includes("mountain")) return false;
      if (selectedStyle === "coast" && !fullText.includes("essaouira") && !fullText.includes("coast") && !fullText.includes("atlantic")) return false;
    }

    return true;
  });

  const count = matchingTours.length;

  const handleNavigate = () => {
    let url = "/tours";
    const params = new URLSearchParams();
    if (selectedRegion !== "all") params.set("region", selectedRegion);
    if (selectedDuration !== "all") params.set("duration", selectedDuration);
    const queryString = params.toString();
    if (queryString) url += `?${queryString}`;
    navigate({ to: url as any });
  };

  return (
    <section className="relative -mt-10 mx-auto max-w-5xl px-5 z-20">
      <div className="rounded-3xl border border-border/90 bg-card/95 p-6 sm:p-8 shadow-xl backdrop-blur-md transition-all hover:border-saffron/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/70">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
              {t("finderTitle")}
            </span>
            <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              {t("finderSubtitle")}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-saffron bg-saffron/10 border border-saffron/25 px-3 py-1.5 rounded-full self-start sm:self-auto">
            <CheckCircle2 className="size-4" />
            <span>
              {count} {t("matchingFound")}
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-4 items-end">
          {/* Region Filter */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <Compass className="size-3.5 text-saffron" />
              {t("selectRegion")}
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full h-11 rounded-xl border border-border/80 bg-background px-3.5 text-xs font-medium text-foreground shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="all">{t("allRegions")}</option>
              <option value="desert">Sahara Desert & Erg Chebbi</option>
              <option value="imperial">Imperial Medinas (Marrakech, Fes)</option>
              <option value="mountains">High Atlas Mountains & Valleys</option>
              <option value="coast">Atlantic Coast (Essaouira)</option>
            </select>
          </div>

          {/* Duration Filter */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <Calendar className="size-3.5 text-saffron" />
              {t("selectDuration")}
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full h-11 rounded-xl border border-border/80 bg-background px-3.5 text-xs font-medium text-foreground shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="all">{t("allDurations")}</option>
              <option value="1">{t("dayTrips")}</option>
              <option value="2-3">{t("shortTrips")}</option>
              <option value="4+">{t("multiDayTrips")}</option>
            </select>
          </div>

          {/* Trip Vibe Filter */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="size-3.5 text-saffron" />
              {t("selectStyle")}
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full h-11 rounded-xl border border-border/80 bg-background px-3.5 text-xs font-medium text-foreground shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="all">{t("allStyles")}</option>
              <option value="glamping">{t("styleGlamping")}</option>
              <option value="culture">{t("styleCulture")}</option>
              <option value="trek">{t("styleTrek")}</option>
              <option value="coast">{t("styleCoast")}</option>
            </select>
          </div>

          {/* Submit Action */}
          <div>
            <Button
              onClick={handleNavigate}
              variant="hero"
              className="w-full h-11 rounded-xl font-bold uppercase tracking-wider text-[11px] flex items-center justify-center gap-2 shadow-md cursor-pointer hover:shadow-lg transition-all"
            >
              <span>{t("viewMatching")}</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
