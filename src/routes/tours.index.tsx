import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, X, Compass, Calendar, Sparkles, ArrowRight, Filter } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TourCard } from "@/components/tour-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tours } from "@/data/tours";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/tours/")({
  component: ToursPage,
  head: () => ({
    meta: [
      { title: "Morocco Private Tours & Bespoke Itineraries | Eva Travel" },
      {
        name: "description",
        content:
          "Explore Eva Travel's full catalog of private Morocco tours: Sahara desert camps, Marrakech, Fes, Chefchaouen, the High Atlas and Essaouira. 100% private departures.",
      },
      { property: "og:title", content: "Morocco Private Tours & Bespoke Itineraries | Eva Travel" },
      {
        property: "og:description",
        content: "Private and small-group tours across Morocco, tailored to your dates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tours" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
});

function ToursPage() {
  const { t, language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const ourJourneys = {
    en: "Private journeys catalog",
    fr: "Catalogue des voyages privés",
    es: "Catálogo de viajes privados"
  }[language] || "Private journeys catalog";

  const regions = [
    { id: "all", label: t("allRegions") },
    { id: "desert", label: "Sahara Desert" },
    { id: "imperial", label: "Imperial Cities" },
    { id: "mountains", label: "High Atlas" },
    { id: "coast", label: "Atlantic Coast" },
  ];

  const durations = [
    { id: "all", label: t("allDurations") },
    { id: "1", label: t("dayTrips") },
    { id: "2-3", label: t("shortTrips") },
    { id: "4+", label: t("multiDayTrips") },
  ];

  // Filter logic
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      // Text Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(q);
        const matchesSummary = tour.summary.toLowerCase().includes(q);
        const matchesRegion = tour.region.toLowerCase().includes(q);
        const matchesHighlights = tour.highlights.some((h) => h.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSummary && !matchesRegion && !matchesHighlights) {
          return false;
        }
      }

      // Region Filter
      if (selectedRegion !== "all") {
        const reg = tour.region.toLowerCase();
        if (selectedRegion === "desert" && !reg.includes("desert")) return false;
        if (selectedRegion === "imperial" && !reg.includes("imperial")) return false;
        if (selectedRegion === "mountains" && !reg.includes("mountain") && !reg.includes("atlas")) return false;
        if (selectedRegion === "coast" && !reg.includes("coast")) return false;
      }

      // Duration Filter
      if (selectedDuration !== "all") {
        const daysNum = parseInt(tour.days.replace(/\D/g, ""), 10) || 1;
        if (selectedDuration === "1" && daysNum !== 1) return false;
        if (selectedDuration === "2-3" && (daysNum < 2 || daysNum > 3)) return false;
        if (selectedDuration === "4+" && daysNum < 4) return false;
      }

      return true;
    });
  }, [searchQuery, selectedRegion, selectedDuration]);

  const hasActiveFilters = searchQuery !== "" || selectedRegion !== "all" || selectedDuration !== "all";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedRegion("all");
    setSelectedDuration("all");
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Header Hero Banner */}
        <section className="zellige-grid border-b border-border bg-secondary/25 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
              {ourJourneys}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-extrabold sm:text-5xl tracking-tight text-foreground">
              {t("toursTitle")}
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-medium">
              {t("toursDesc")}
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="border-b border-border/70 bg-card/60 backdrop-blur-md sticky top-16 z-30 py-4 shadow-sm">
          <div className="mx-auto max-w-6xl px-5 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
              {/* Search Box */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("searchToursPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-9 h-10 rounded-full text-xs bg-background border-border/80 focus-visible:ring-primary/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    <X className="size-3.5" />
                  </button>
                )}
              </div>

              {/* Status and Reset */}
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="text-muted-foreground">
                  {t("showingTours")} <strong className="text-foreground">{filteredTours.length}</strong> {t("of")} {tours.length} {t("privateTours")}
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="text-primary hover:underline flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <X className="size-3" />
                    {t("resetFilters")}
                  </button>
                )}
              </div>
            </div>

            {/* Filter Chips Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mr-1">
                <Filter className="size-3 text-saffron" />
                <span>{t("filterRegion")}:</span>
              </div>
              {regions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    selectedRegion === r.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {r.label}
                </button>
              ))}

              <span className="text-border mx-1 hidden sm:inline">|</span>

              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mr-1">
                <Calendar className="size-3 text-saffron" />
                <span>{t("filterDuration")}:</span>
              </div>
              {durations.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDuration(d.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    selectedDuration === d.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Listing Grid */}
        <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          {filteredTours.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-border/80 rounded-3xl bg-secondary/15 p-10 max-w-xl mx-auto">
              <Compass className="size-12 text-saffron mx-auto mb-4 stroke-1" />
              <h3 className="font-display text-2xl font-bold text-foreground">
                {t("noToursFound")}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                {language === "fr"
                  ? "Essayez de modifier votre recherche ou réinitialisez les filtres pour découvrir toutes nos propositions."
                  : language === "es"
                  ? "Prueba a cambiar los términos de búsqueda o restablece los filtros para ver todos los viajes."
                  : "Try clearing keywords or adjusting the region and duration filters to see all private itineraries."}
              </p>
              <Button
                onClick={handleResetFilters}
                variant="sand"
                className="mt-6 rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                {t("resetFilters")}
              </Button>
            </div>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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
                  <ScrollReveal key={tour.slug} animation="slide-up" delay={(idx % 3) * 60}>
                    <TourCard tour={displayTour} />
                  </ScrollReveal>
                );
              })}
            </div>
          )}

          {/* Bespoke Route Planning CTA */}
          <div className="mt-20 rounded-3xl border border-border/80 bg-secondary/30 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 text-saffron border border-saffron/30 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider mb-3">
              <Sparkles className="size-3" />
              {language === "fr" ? "Itinéraire 100% Personnalisé" : language === "es" ? "Itinerario 100% a Medida" : "Completely Bespoke"}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {language === "fr"
                ? "Vous avez un itinéraire ou des dates spécifiques en tête ?"
                : language === "es"
                ? "¿Tienes en mente una ruta o fechas específicas?"
                : "Have specific dates, routes, or family requirements in mind?"}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground/90 max-w-xl mx-auto leading-relaxed">
              {language === "fr"
                ? "Tous nos circuits peuvent être combinés, allongés ou modifiés. Nous concevons votre voyage privé de A à Z avec devis transparent sous 24h."
                : language === "es"
                ? "Todos nuestros viajes se pueden combinar, alargar o modificar. Diseñamos tu viaje privado de la A a la Z con presupuesto claro en 24h."
                : "Every tour can be connected, extended, or built from scratch. We design your private journey with transparent pricing within 24 hours."}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="hero" size="default" className="rounded-full shadow-md">
                <Link to="/contact">
                  <span>{language === "fr" ? "Créer mon voyage sur mesure" : language === "es" ? "Crear viaje a medida" : "Build Custom Journey"}</span>
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
