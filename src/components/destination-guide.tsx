import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { ScrollReveal } from "@/components/scroll-reveal";
import desert from "@/assets/desert.jpg";
import marrakech from "@/assets/tour-marrakech.jpg";
import fes from "@/assets/tour-fes.jpg";
import atlas from "@/assets/atlas.jpg";
import chefchaouen from "@/assets/tour-chefchaouen.jpg";
import essaouira from "@/assets/essaouira.jpg";

export function DestinationGuide() {
  const { t, language } = useLanguage();

  const destinations = [
    {
      id: "sahara",
      name: language === "fr" ? "Erg Chebbi & Merzouga" : language === "es" ? "Erg Chebbi y Merzouga" : "Erg Chebbi & Merzouga",
      tagline: language === "fr" ? "Dunes d'or et nuits étoilées" : language === "es" ? "Dunas doradas y noches estrelladas" : "Golden Dunes & Starlit Desert Glamping",
      image: desert,
      driveTime: language === "fr" ? "~8h depuis Marrakech (scénique via Dadès)" : language === "es" ? "~8h desde Marrakech (escénico por Dades)" : "~8 hrs from Marrakech (scenic via Dades)",
      bestSeason: language === "fr" ? "Octobre à Mai (Nuits fraîches & ciels purs)" : language === "es" ? "Octubre a Mayo (Noches frescas y cielos limpios)" : "October to May (Crisp nights & clear skies)",
      recommendedDays: "3–4 Days",
      highlights: [
        language === "fr" ? "Randonnée à dromadaire au coucher du soleil" : language === "es" ? "Paseo en dromedario al atardecer" : "Sunset camel caravan trek into the dunes",
        language === "fr" ? "Bivouac de luxe avec douche chaude et lit king" : language === "es" ? "Campamento de lujo con baño privado y cama king" : "Luxury desert camp with ensuite marble shower",
        language === "fr" ? "Musique Gnawa et contes berbères autour du feu" : language === "es" ? "Música Gnawa y relatos bereberes junto al fuego" : "Gnawa musicians and stargazing around the campfire",
      ],
      tourLink: "/tours/sahara-merzouga",
      tourName: "Sahara Nights in Merzouga",
    },
    {
      id: "marrakech",
      name: language === "fr" ? "Marrakech la Ville Rouge" : language === "es" ? "Marrakech la Ciudad Roja" : "Marrakech (The Red City)",
      tagline: language === "fr" ? "Palais impériaux, riads secrets et souks" : language === "es" ? "Palacios imperiales, riads secretos y zocos" : "Imperial Palaces, Secret Riads & Vibrant Souks",
      image: marrakech,
      driveTime: language === "fr" ? "Point central d'arrivée (Aéroport RAK)" : language === "es" ? "Punto central de llegada (Aeropuerto RAK)" : "Central arrival hub (RAK Airport)",
      bestSeason: language === "fr" ? "Toute l'année (Automne et Printemps idéaux)" : language === "es" ? "Todo el año (Otoño y Primavera ideales)" : "Year-Round (Autumn & Spring optimal)",
      recommendedDays: "2–3 Days",
      highlights: [
        language === "fr" ? "Place Jemaa el-Fnaa au crépuscule et conteurs" : language === "es" ? "Plaza Jemaa el-Fna al anochecer y narradores" : "Jemaa el-Fnaa square at dusk & street performers",
        language === "fr" ? "Palais de la Bahia & Jardins Majorelle bleus" : language === "es" ? "Palacio de la Bahía y Jardines Majorelle" : "Bahia Palace & vibrant blue Majorelle Gardens",
        language === "fr" ? "Dégustations gastronomiques guidées dans les ruelles" : language === "es" ? "Ruta gastronómica guiada por las callejuelas" : "Private food tasting walk through hidden alleys",
      ],
      tourLink: "/tours/marrakech-medina",
      tourName: "Marrakech Medina & Souks",
    },
    {
      id: "fes",
      name: language === "fr" ? "Fès el-Bali" : language === "es" ? "Fez el-Bali" : "Fes el-Bali (Cultural Capital)",
      tagline: language === "fr" ? "La plus ancienne médina piétonne du monde" : language === "es" ? "La medina peatonal más antigua del mundo" : "The World's Largest Preserved Medieval Medina",
      image: fes,
      driveTime: language === "fr" ? "~5h de Marrakech ou ~3h30 de Casablanca" : language === "es" ? "~5h de Marrakech o ~3h30 de Casablanca" : "~5 hrs drive from Marrakech / ~3.5 hrs high-speed train",
      bestSeason: language === "fr" ? "Toute l'année (Mars à Novembre parfait)" : language === "es" ? "Todo el año (Marzo a Noviembre perfecto)" : "Year-Round (March to November ideal)",
      recommendedDays: "2–3 Days",
      highlights: [
        language === "fr" ? "Terrasses panoramiques des tanneries Chouara" : language === "es" ? "Terrazas panorámicas de las curtidurías Chouara" : "Chouara Tanneries panoramic stone vat terraces",
        language === "fr" ? "Université Al-Qarawiyyin fondée au IXe siècle" : language === "es" ? "Universidad Al-Qarawiyyin del siglo IX" : "9th-century Al-Qarawiyyin University & Madrasas",
        language === "fr" ? "Atelier de poterie et taille du zellige avec maîtres" : language === "es" ? "Taller de alfarería y zellige con maestros" : "Hands-on master artisan zellige pottery workshop",
      ],
      tourLink: "/tours/fes-heritage",
      tourName: "Fes: Craft & Heritage",
    },
    {
      id: "atlas",
      name: language === "fr" ? "Haut Atlas & Vallée d'Imlil" : language === "es" ? "Alto Atlas y Valle de Imlil" : "High Atlas & Imlil Valleys",
      tagline: language === "fr" ? "Hospitalité berbère et crêtes du mont Toubkal" : language === "es" ? "Hospitalidad bereber y cumbres del Toubkal" : "Berber Village Hospitality & Alpine Peaks",
      image: atlas,
      driveTime: language === "fr" ? "~1h30 au sud de Marrakech" : language === "es" ? "~1h30 al sur de Marrakech" : "~1.5 hrs south of Marrakech",
      bestSeason: language === "fr" ? "Mars à Novembre (Climat frais en été)" : language === "es" ? "Marzo a Noviembre (Clima fresco en verano)" : "March to November (Pleasant summer escape)",
      recommendedDays: "1–2 Days",
      highlights: [
        language === "fr" ? "Randonnées douces entre terrasses de noyers" : language === "es" ? "Senderismo suave entre nogales en terrazas" : "Gentle terrace walks through walnut groves",
        language === "fr" ? "Déjeuner chez une famille berbère chaleureuse" : language === "es" ? "Almuerzo casero con una familia bereber" : "Home-cooked lunch with an authentic Berber family",
        language === "fr" ? "Vues spectaculaires sur le mont Toubkal (4 167 m)" : language === "es" ? "Vistas panorámicas del monte Toubkal (4.167 m)" : "Snow-capped views of Mount Toubkal (4,167m)",
      ],
      tourLink: "/tours/atlas-valleys",
      tourName: "High Atlas & Berber Villages",
    },
    {
      id: "chefchaouen",
      name: language === "fr" ? "Chefchaouen (La Perle Bleue)" : language === "es" ? "Chefchaouen (La Perla Azul)" : "Chefchaouen (The Blue Pearl)",
      tagline: language === "fr" ? "Ruelle cobalt et sérénité des montagnes du Rif" : language === "es" ? "Calles cobalto y tranquilidad en el Rif" : "Cobalt Alleys & Mountain Sanctuary",
      image: chefchaouen,
      driveTime: language === "fr" ? "~3h30 de Fès ou ~2h de Tanger" : language === "es" ? "~3h30 de Fez o ~2h de Tánger" : "~3.5 hrs drive from Fes / ~2 hrs from Tangier",
      bestSeason: language === "fr" ? "Printemps et Automne" : language === "es" ? "Primavera y Otoño" : "Spring & Autumn (Mild temperatures)",
      recommendedDays: "2 Days",
      highlights: [
        language === "fr" ? "Balade photo au lever du jour avant les foules" : language === "es" ? "Paseo fotográfico al amanecer sin aglomeraciones" : "Early morning quiet photography walk in the alleys",
        language === "fr" ? "Coucher de soleil depuis la Mosquée Espagnole" : language === "es" ? "Atardecer desde la Mezquita Española" : "Panoramic sunset hike to the Spanish Mosque",
        language === "fr" ? "Boutiques d'artisanat de laine et tapis tissés main" : language === "es" ? "Tiendas de artesanía de lana y alfombras hechas a mano" : "Traditional woven woolen blankets and leather goods",
      ],
      tourLink: "/tours/chefchaouen-blue",
      tourName: "Chefchaouen, the Blue Pearl",
    },
    {
      id: "essaouira",
      name: language === "fr" ? "Essaouira & Côte Atlantique" : language === "es" ? "Essaouira y Costa Atlántica" : "Essaouira & Atlantic Coast",
      tagline: language === "fr" ? "Remparts portugais, brise marine et sardines grillées" : language === "es" ? "Murallas portuguesas, brisa de mar y sardinas asadas" : "Historic Stone Ramparts & Coastal Sea Breezes",
      image: essaouira,
      driveTime: language === "fr" ? "~2h30 à l'ouest de Marrakech" : language === "es" ? "~2h30 al oeste de Marrakech" : "~2.5 hrs west of Marrakech",
      bestSeason: language === "fr" ? "Toute l'année (Brise rafraîchissante)" : language === "es" ? "Todo el año (Brisa agradable)" : "Year-Round (Breezy summer escape)",
      recommendedDays: "1–2 Days",
      highlights: [
        language === "fr" ? "Déjeuner de poissons frais au port de pêche" : language === "es" ? "Almuerzo de pescado fresco en el puerto" : "Freshly grilled sea bass & calamari at the harbor stalls",
        language === "fr" ? "Visite d'une coopérative féminine d'huile d'argan" : language === "es" ? "Visita a una cooperativa de aceite de argán" : "Authentic women's argan oil cooperative tour",
        language === "fr" ? "Promenade relaxante le long des remparts fortifiés" : language === "es" ? "Paseo relajante por las murallas fortificadas" : "Ocean walks along the historic stone sea bastion",
      ],
      tourLink: "/tours/essaouira-coast",
      tourName: "Essaouira & Atlantic Coast",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("sahara");
  const current = destinations.find((d) => d.id === activeTab) || destinations[0];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 border-b border-border/70">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <ScrollReveal animation="fade-in">
          <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
            {t("destGuideTitle")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {t("destGuideSubtitle")}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
            {t("destGuideDesc")}
          </p>
        </ScrollReveal>
      </div>

      {/* Destination Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {destinations.map((d) => (
          <button
            key={d.id}
            onClick={() => setActiveTab(d.id)}
            className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === d.id
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
          >
            {d.name.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Active Destination Card Details */}
      <ScrollReveal animation="slide-up">
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg grid lg:grid-cols-2">
          {/* Image side */}
          <div className="relative min-h-[340px] lg:min-h-[440px] overflow-hidden">
            <img
              src={current.image}
              alt={current.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block rounded-full bg-saffron/90 text-primary-foreground px-3 py-1 text-[9px] font-bold uppercase tracking-wider mb-2">
                {current.recommendedDays}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {current.name}
              </h3>
              <p className="text-xs text-white/90 mt-1 font-medium font-sans">
                {current.tagline}
              </p>
            </div>
          </div>

          {/* Details side */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Quick Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-border/60">
                <div className="flex items-start gap-3">
                  <Clock className="size-4.5 text-saffron mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {language === "fr" ? "Temps de route" : language === "es" ? "Tiempo de viaje" : "Travel Time"}
                    </span>
                    <p className="text-xs font-semibold text-foreground mt-0.5">
                      {current.driveTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="size-4.5 text-saffron mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {language === "fr" ? "Meilleure saison" : language === "es" ? "Mejor época" : "Best Season"}
                    </span>
                    <p className="text-xs font-semibold text-foreground mt-0.5">
                      {current.bestSeason}
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-saffron" />
                  {language === "fr" ? "Expériences incontournables" : language === "es" ? "Experiencias esenciales" : "Signature Highlights"}
                </h4>
                <ul className="space-y-2.5">
                  {current.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground/95">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron text-[10px] font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA to tour */}
            <div className="pt-6 border-t border-border/60 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                  {language === "fr" ? "Circuit recommandé" : language === "es" ? "Circuito recomendado" : "Featured Route"}
                </span>
                <p className="font-display text-sm font-bold text-foreground">
                  {current.tourName}
                </p>
              </div>

              <Link
                to={current.tourLink}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>{language === "fr" ? "Voir l'itinéraire" : language === "es" ? "Ver itinerario" : "View Itinerary"}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
