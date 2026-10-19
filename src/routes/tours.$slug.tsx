import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Clock,
  MapPin,
  Check,
  X,
  ChevronRight,
  Car,
  Home as HomeIcon,
  Send,
  MessageCircle,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Compass,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/data/tours";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = tours.find((t) => t.slug === params.slug);
    if (!tour) {
      throw notFound();
    }
    return { tour };
  },
  component: TourDetailsPage,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.tour.title} — 100% Private Morocco Tour | Eva Travel` },
      {
        name: "description",
        content: `${loaderData.tour.summary} Find full day-by-day itineraries, vetted stays, and request bespoke pricing.`,
      },
    ],
  }),
});

function TourDetailsPage() {
  const { tour } = Route.useLoaderData();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"itinerary" | "included" | "stays" | "specs">("itinerary");
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true });
  const [sent, setSent] = useState(false);

  function handleInquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({ ...prev, [dayNum]: !prev[dayNum] }));
  };

  const expandAllDays = () => {
    const all: Record<number, boolean> = {};
    displayTour.itinerary.forEach((it) => {
      all[it.day] = true;
    });
    setExpandedDays(all);
  };

  const collapseAllDays = () => {
    setExpandedDays({});
  };

  // Localized overrides for the 3 homepage signature tours
  let displayTour = { ...tour };
  if (language === "fr") {
    if (tour.slug === "sahara-merzouga") {
      displayTour.title = "Nuits au Sahara à Merzouga";
      displayTour.summary = "Traversez la vallée du Draa jusqu'aux dunes de l'Erg Chebbi, montez à dromadaire au coucher du soleil et dormez dans un camp de luxe.";
      displayTour.itinerary = [
        { day: 1, title: "Marrakech à la Vallée du Dades via Aït Ben Haddou", description: "Traversez le col du Tizi n'Tichka (2 260 m) dans le Haut Atlas, visitez la Kasbah d'Aït Ben Haddou classée par l'UNESCO, puis continuez à travers la palmeraie de Skoura jusqu'aux falaises rouges des gorges du Dades pour la nuit." },
        { day: 2, title: "Gorges du Dades aux Dunes de Merzouga & Bivouac de Luxe", description: "Promenez-vous dans les spectaculaires gorges du Todra, puis dirigez-vous vers l'est en direction du désert. À Merzouga, retrouvez votre caravane de dromadaires pour une randonnée au coucher du soleil dans les dunes dorées de l'Erg Chebbi. Nuit sous tente berbère traditionnelle de luxe avec salle de bain privée." },
        { day: 3, title: "Lever de Soleil sur les Dunes & Retour à Marrakech", description: "Réveillez-vous tôt pour assister au lever du soleil sur les dunes du Sahara. Après le petit-déjeuner au camp, retournez à Marrakech en traversant la vallée du Draa et Ouarzazate, arrivant en fin de soirée." }
      ];
      displayTour.included = ["Véhicule 4x4 Toyota Prado ou Van Mercedes Vito privé climatisé", "Chauffeur-guide professionnel bilingue", "1 nuit en hôtel de charme dans les gorges du Dadès (dîner & petit-déjeuner)", "1 nuit en bivouac de luxe dans le désert (tente ensuite avec douche chaude & dîner)", "Randonnée à dromadaire au coucher et lever du soleil", "Sandboarding dans les dunes de l'Erg Chebbi", "Carburant, péages et frais de parking"];
      displayTour.excluded = ["Déjeuners de midi et boissons", "Billets d'entrée aux monuments (Aït Ben Haddou / Studios)", "Pourboires pour le chauffeur et les guides locaux"];
      displayTour.accommodation = "1 nuit en hôtel sélectionné dans la vallée du Dadès, 1 nuit en bivouac de luxe à Merzouga avec salle de bain privative.";
      displayTour.transport = "Toyota Prado 4x4 ou van Mercedes Vito VIP privé climatisé avec chauffeur local certifié.";
    } else if (tour.slug === "marrakech-medina") {
      displayTour.title = "Médina et Souks de Marrakech";
      displayTour.summary = "Découvrez Jemaa el-Fna au crépuscule, les riads cachés, le palais de la Bahia et une promenade guidée dans les souks aux épices.";
      displayTour.itinerary = [
        { day: 1, title: "Secrets de la Médina, Palais de la Bahia & Jemaa el-Fnaa", description: "Visite guidée à pied avec un historien officiel de la médina. Découvrez le chef-d'œuvre andalou du palais de la Bahia, les tombeaux Saadiens, et flânez dans le Mellah avant un dîner en terrasse au-dessus de la place Jemaa el-Fna." },
        { day: 2, title: "Jardins Majorelle, Ateliers d'Artisans & Hammam Spa", description: "Matinée au jardin Majorelle et au musée YSL. L'après-midi, découvrez les ateliers cachés des souks (cuir, cuivre, épices) avant de vous relaxer lors d'un rituel traditionnel de hammam au savon noir." }
      ];
      displayTour.included = ["Visite guidée privée de la médina avec historien agréé", "Billets coupe-file pour le palais de la Bahia et le jardin Majorelle", "Séance de hammam traditionnel et massage à l'huile d'argan", "Dîner gastronomique sur toit-terrasse avec vue sur la médina"];
      displayTour.excluded = ["Hébergement (peut être inclus sur demande)", "Déjeuners et dépenses personnelles", "Pourboires"];
      displayTour.accommodation = "Partenariats avec des riads de grand charme au cœur de la médina.";
      displayTour.transport = "Visites pédestres en médina et transferts privés climatisés pour Majorelle.";
    } else if (tour.slug === "atlas-valleys") {
      displayTour.title = "Haut Atlas et Villages Berbères";
      displayTour.summary = "Randonnez dans les vallées en terrasses d'Imlil et de l'Ourika, partagez le thé à la menthe chez l'habitant et logez dans une auberge de montagne.";
      displayTour.itinerary = [
        { day: 1, title: "Vallée d'Imlil, Marche dans les Noyers & Déjeuner chez l'Habitant", description: "Départ pour le village d'Imlil (1 740 m) au pied du mont Toubkal. Randonnée guidée à travers les villages en terrasses, déjeuner traditionnel préparé par une famille berbère, et nuit dans une auberge de montagne avec vue panoramique." },
        { day: 2, title: "Vallée de l'Ourika, Cascades de Setti Fatma & Retour", description: "Descente vers la verte vallée de l'Ourika, ascension guidée des cascades de Setti Fatma et visite d'une coopérative féminine d'argan avant le retour vers Marrakech." }
      ];
      displayTour.included = ["Transport privé en van Mercedes récent et climatisé", "Guide de montagne berbère diplômé d'État", "1 nuit en auberge de montagne de charme (demi-pension)", "Déjeuner traditionnel chez une famille berbère le premier jour", "Mules pour les bagages si nécessaire"];
      displayTour.excluded = ["Boissons et déjeuners libres", "Pourboires pour le guide de montagne", "Équipement de randonnée personnel"];
      displayTour.accommodation = "1 nuit en kasbah d'altitude avec vue dégagée sur les crêtes de l'Atlas.";
      displayTour.transport = "Véhicule privé tout confort avec chauffeur.";
    }
  } else if (language === "es") {
    if (tour.slug === "sahara-merzouga") {
      displayTour.title = "Noches del Sahara en Merzouga";
      displayTour.summary = "Cruza el valle del Draa hasta las dunas de Erg Chebbi, cabalga en dromedario al atardecer y duerme en un campamento de lujo.";
      displayTour.itinerary = [
        { day: 1, title: "Marrakech al Valle del Dades por Aït Ben Haddou", description: "Cruza el puerto de Tizi n'Tichka (2.260 m) en el Alto Atlas, visita la Kasbah de Ait Ben Haddou (Patrimonio de la UNESCO) y sigue por Skoura hasta las gargantas del Dades para cenar y pasar la noche." },
        { day: 2, title: "Gargantas del Todra a las Dunas de Merzouga y Jaimas de Lujo", description: "Pasea por los cañones del Todra y viaja hacia el desierto. En Merzouga, monta en dromedario al atardecer hacia tu campamento de lujo con baño privado en Erg Chebbi." },
        { day: 3, title: "Amanecer en las Dunas y Regreso a Marrakech", description: "Disfruta del amanecer sobre las arenas doradas. Tras un desayuno tradicional, regresa a Marrakech cruzando el valle del Draa y Ouarzazate." }
      ];
      displayTour.included = ["Vehículo Toyota Prado 4x4 o Van Mercedes Vito privado con A/C", "Chófer-guía oficial bilingüe", "1 noche en hotel del Valle del Dades (cena y desayuno)", "1 noche en campamento de lujo en Erg Chebbi (baño privado y cena)", "Paseo en dromedario al atardecer y amanecer", "Sandboarding en las dunas", "Combustible, peajes y aparcamientos"];
      displayTour.excluded = ["Almuerzos y bebidas", "Entradas a monumentos", "Propinas"];
      displayTour.accommodation = "1 noche en hotel con encanto en Dades, 1 noche en campamento de jaimas de lujo con baño privado.";
      displayTour.transport = "Vehículo 4x4 Toyota Prado o Mercedes Vito privado.";
    }
  }

  // Specifications
  const specs = [
    { label: t("tourType"), val: t("privateOnly"), icon: ShieldCheck },
    { label: t("startingPoint"), val: t("flexibleDoorToDoor"), icon: MapPin },
    { label: t("physicalRating"), val: t("easyModerate"), icon: Compass },
    { label: t("bestSeason"), val: t("yearRound"), icon: Calendar },
  ];

  const translateDays = (daysStr: string) => {
    return daysStr
      .replace("days", language === "fr" ? "jours" : language === "es" ? "días" : "days")
      .replace("day", language === "fr" ? "jour" : language === "es" ? "día" : "day");
  };

  const tabs = [
    { id: "itinerary", label: language === "fr" ? "Itinéraire détaillé" : language === "es" ? "Itinerario diario" : "Daily Itinerary" },
    { id: "included", label: language === "fr" ? "Ce qui est inclus" : language === "es" ? "¿Qué incluye?" : "What's Included" },
    { id: "stays", label: language === "fr" ? "Hébergements & Véhicule" : language === "es" ? "Alojamientos y Transporte" : "Stays & Transport" },
    { id: "specs", label: language === "fr" ? "Spécifications" : language === "es" ? "Especificaciones" : "Tour Specs" },
  ];

  const pricingLabel = {
    en: "Pricing estimate",
    fr: "Tarif indicatif",
    es: "Presupuesto",
  }[language] || "Pricing estimate";

  const similarTours = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  const whatsappUrl = `https://wa.me/212524000000?text=${encodeURIComponent(
    `Hello Eva Travel, I would like to ask about the "${displayTour.title}" tour.`
  )}`;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="pb-28 animate-fade-in">
        {/* Visual Hero Header */}
        <section className="relative h-[480px] overflow-hidden">
          <img
            src={displayTour.image}
            alt={displayTour.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-5 pb-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">
                {t("home")}
              </Link>
              <ChevronRight className="size-3 text-muted-foreground/60" />
              <Link to="/tours" className="hover:text-primary transition-colors">
                {t("tours")}
              </Link>
              <ChevronRight className="size-3 text-muted-foreground/60" />
              <span className="text-foreground/80 truncate max-w-[220px]">{displayTour.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded-full bg-saffron/20 text-saffron border border-saffron/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                {displayTour.region}
              </span>
              <span className="rounded-full bg-background/80 text-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-border/80">
                100% Private Tour
              </span>
            </div>

            <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl max-w-3xl leading-[1.1]">
              {displayTour.title}
            </h1>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm text-muted-foreground/95 leading-relaxed font-medium">
              {displayTour.summary}
            </p>
          </div>
        </section>

        {/* Core Layout Grid */}
        <section className="mx-auto max-w-6xl px-5 mt-10 grid gap-10 lg:grid-cols-[1.5fr_0.90fr]">
          {/* Main Info Blocks */}
          <div className="space-y-10">
            {/* Quick Metadata Info */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-border/80 bg-secondary/25 p-5 text-center shadow-sm">
              <div className="flex flex-col items-center p-3">
                <Clock className="size-5 text-saffron mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/85">
                  {t("duration")}
                </span>
                <span className="text-sm font-bold text-foreground mt-0.5">{translateDays(displayTour.days)}</span>
              </div>
              <div className="flex flex-col items-center p-3 border-l border-border/60">
                <MapPin className="size-5 text-saffron mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/85">
                  {t("location")}
                </span>
                <span className="text-sm font-bold text-foreground mt-0.5">Morocco</span>
              </div>
              <div className="flex flex-col items-center p-3 border-l border-border/60">
                <Car className="size-5 text-saffron mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/85">
                  {t("transport")}
                </span>
                <span className="text-sm font-bold text-foreground mt-0.5 truncate max-w-full px-1">
                  Private 4x4 / Van
                </span>
              </div>
              <div className="flex flex-col items-center p-3 border-l border-border/60">
                <HomeIcon className="size-5 text-saffron mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/85">
                  {t("stayStyle")}
                </span>
                <span className="text-sm font-bold text-foreground mt-0.5 truncate max-w-full px-1">
                  Boutique Stays
                </span>
              </div>
            </div>

            {/* Highlights Chips */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-3 block">
                {t("dayHighlights")}
              </span>
              <div className="flex flex-wrap gap-2">
                {displayTour.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 border border-border/70 px-3.5 py-1 text-xs font-semibold text-foreground/90"
                  >
                    <Sparkles className="size-3 text-saffron" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Section Tabs */}
            <div className="border-b border-border/80">
              <div className="flex flex-wrap gap-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-4 text-xs sm:text-sm font-bold tracking-wide uppercase relative cursor-pointer transition-colors ${
                      activeTab === tab.id
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Contents */}
            <div className="pt-2">
              {/* Tab 1: Day by Day Itinerary */}
              {activeTab === "itinerary" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {displayTour.itinerary.length} {language === "fr" ? "jours d'aventure" : language === "es" ? "días de viaje" : "days mapped out"}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                      <button
                        onClick={expandAllDays}
                        className="text-primary hover:underline cursor-pointer"
                      >
                        {t("expandAll")}
                      </button>
                      <span className="text-border">|</span>
                      <button
                        onClick={collapseAllDays}
                        className="text-muted-foreground hover:text-foreground cursor-pointer"
                      >
                        {t("collapseAll")}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {displayTour.itinerary.map((it) => {
                      const isExpanded = !!expandedDays[it.day];
                      return (
                        <div
                          key={it.day}
                          className="rounded-2xl border border-border/80 bg-card overflow-hidden transition-all shadow-sm"
                        >
                          <button
                            onClick={() => toggleDay(it.day)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/15 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-4">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm font-bold shadow-sm">
                                {it.day}
                              </span>
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-saffron block">
                                  {language === "fr" ? `Jour ${it.day}` : language === "es" ? `Día ${it.day}` : `Day ${it.day}`}
                                </span>
                                <h3 className="font-display text-lg font-bold text-foreground">
                                  {it.title}
                                </h3>
                              </div>
                            </div>
                            <ChevronDown
                              className={`size-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-primary" : ""
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-6 pb-6 pt-2 border-t border-border/40 animate-fade-in space-y-4">
                              <p className="text-sm leading-relaxed text-muted-foreground/95">
                                {it.description}
                              </p>
                              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground bg-secondary/30 p-3 rounded-xl">
                                <span className="flex items-center gap-1.5 text-primary">
                                  <Car className="size-3.5" /> Private Chauffeur On Call
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <Camera className="size-3.5 text-saffron" /> Scenic Stops Included
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 2: What's Included */}
              {activeTab === "included" && (
                <div className="grid gap-8 sm:grid-cols-2">
                  {/* Included list */}
                  <div className="rounded-2xl border border-border/80 bg-secondary/15 p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3.5" />
                      </span>
                      {t("included")}
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground/90">
                      {displayTour.included.map((inc) => (
                        <li key={inc} className="flex items-start gap-2.5">
                          <Check className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded list */}
                  <div className="rounded-2xl border border-border/80 bg-secondary/15 p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/10 text-muted-foreground">
                        <X className="size-3.5" />
                      </span>
                      {t("notIncluded")}
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground/90">
                      {displayTour.excluded.map((exc) => (
                        <li key={exc} className="flex items-start gap-2.5">
                          <X className="size-4 text-rose-500 mt-0.5 shrink-0" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 3: Stays & Transport */}
              {activeTab === "stays" && (
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                    <HomeIcon className="size-8 text-saffron mb-4" />
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                      {language === "fr" ? "Hébergements de Charme" : language === "es" ? "Alojamientos de Encanto" : "Boutique Accommodations"}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground/90">
                      {displayTour.accommodation}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground space-y-1.5">
                      <p>✓ Private ensuite tiled bathrooms with hot water</p>
                      <p>✓ Fresh Moroccan breakfast buffet included daily</p>
                      <p>✓ Historic medina courtyards & rooftop terrace views</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                    <Car className="size-8 text-saffron mb-4" />
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                      {language === "fr" ? "Transport Privé Dédié" : language === "es" ? "Transporte Privado Dedicado" : "Dedicated Private Transport"}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground/90">
                      {displayTour.transport}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground space-y-1.5">
                      <p>✓ High-output dual climate control A/C</p>
                      <p>✓ Unlimited cold bottled mineral water & Wi-Fi</p>
                      <p>✓ Licensed professional bilingual driver-guide</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Specifications */}
              {activeTab === "specs" && (
                <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    {t("quickFacts")}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {specs.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3 bg-secondary/30 p-4 rounded-xl">
                          <Icon className="size-5 text-saffron mt-0.5 shrink-0" />
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                              {s.label}
                            </span>
                            <span className="text-xs font-bold text-foreground mt-0.5 block">
                              {s.val}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking / Inquiry side-box */}
          <aside className="h-fit space-y-6">
            {sent ? (
              <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-md text-center animate-fade-in">
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {t("inquirySent")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed">
                  {t("inquiryThanks")}
                </p>
                <Button
                  onClick={() => setSent(false)}
                  variant="sand"
                  className="mt-6 rounded-full font-semibold text-xs uppercase tracking-wide px-6 cursor-pointer"
                >
                  {t("sendAnother")}
                </Button>
              </div>
            ) : (
              <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-md relative">
                <div className="flex justify-between items-baseline border-b border-border/50 pb-4 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                    {pricingLabel}
                  </span>
                  <span className="font-display text-2xl font-extrabold text-primary">
                    {t("priceOnRequest")}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">
                  {t("requestDates")}
                </h3>
                <p className="text-xs text-muted-foreground mb-6">
                  {language === "fr"
                    ? "Recevez une proposition détaillée et chiffrée sous 24h."
                    : language === "es"
                    ? "Recibe una propuesta detallada y presupuesto en 24h."
                    : "Receive a detailed route proposal and transparent quote within 24 hours."}
                </p>

                <form onSubmit={handleInquiry} className="space-y-4">
                  <div className="grid gap-1">
                    <Label
                      htmlFor="inquiry-name"
                      className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-0.5 ml-0.5"
                    >
                      {t("fullName")}
                    </Label>
                    <Input id="inquiry-name" required placeholder="Sara Bennani" />
                  </div>

                  <div className="grid gap-1">
                    <Label
                      htmlFor="inquiry-email"
                      className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-0.5 ml-0.5"
                    >
                      {t("emailAddr")}
                    </Label>
                    <Input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="sara@example.com"
                    />
                  </div>

                  <div className="grid gap-4 grid-cols-2">
                    <div className="grid gap-1">
                      <Label
                        htmlFor="inquiry-dates"
                        className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-0.5 ml-0.5"
                      >
                        {t("dates")}
                      </Label>
                      <Input id="inquiry-dates" placeholder="e.g. Oct 12–18" />
                    </div>
                    <div className="grid gap-1">
                      <Label
                        htmlFor="inquiry-travelers"
                        className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-0.5 ml-0.5"
                      >
                        {t("travelers")}
                      </Label>
                      <select
                        id="inquiry-travelers"
                        className="h-11 rounded-lg border border-border/80 bg-background px-3 text-xs shadow-sm transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                        defaultValue="2"
                      >
                        <option value="1">1 traveler</option>
                        <option value="2">2 travelers (Couple)</option>
                        <option value="3">3 travelers</option>
                        <option value="4">4 travelers (Family)</option>
                        <option value="5">5+ travelers</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-1">
                    <Label
                      htmlFor="inquiry-message"
                      className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-0.5 ml-0.5"
                    >
                      {t("specialReq")}
                    </Label>
                    <Textarea
                      id="inquiry-message"
                      rows={3}
                      placeholder={language === "fr" ? "Budget, arrêts sur mesure, régime alimentaire..." : "Budget preference, custom stops, dietary needs..."}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full justify-center rounded-full font-semibold uppercase tracking-wider text-[11px] h-12 shadow-[var(--shadow-warm)] hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    {t("submitRequest")}
                  </Button>
                </form>

                {/* Direct WhatsApp Action */}
                <div className="mt-4 pt-4 border-t border-border/50 text-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline w-full"
                  >
                    <MessageCircle className="size-4" />
                    <span>{t("whatsAppInquiry")}</span>
                  </a>
                </div>
              </div>
            )}
          </aside>
        </section>

        {/* Similar / Recommended Tours */}
        <section className="mx-auto max-w-6xl px-5 mt-24 pt-16 border-t border-border/70">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                Morocco Collection
              </span>
              <h3 className="font-display text-3xl font-extrabold tracking-tight text-foreground mt-1">
                {t("similarTours")}
              </h3>
            </div>
            <Button asChild variant="sand" className="rounded-full text-xs uppercase font-bold">
              <Link to="/tours">
                <span>{language === "fr" ? "Voir tous les circuits" : "View All"}</span>
                <ArrowRight className="size-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {similarTours.map((simTour) => (
              <TourCard key={simTour.slug} tour={simTour} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

// Icon helper for camera
function Camera(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  );
}
