import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ShieldCheck, Heart, Users, Award, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import atlas from "@/assets/tour-atlas.jpg";
import experience from "@/assets/experience.jpg";
import aitbenhaddou from "@/assets/aitbenhaddou.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Eva Travel — Local Morocco Travel Designers Since 2014" },
      {
        name: "description",
        content:
          "Eva Travel is a Marrakech-based boutique agency organizing 100% private tours across Morocco with licensed local drivers, native guides and hand-picked riads.",
      },
      { property: "og:title", content: "About Eva Travel — Local Morocco Travel Designers Since 2014" },
      {
        property: "og:description",
        content: "Marrakech-based travel designers with native guides, late-model private fleet, and hand-picked stays.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = {
  en: [
    {
      title: "Local guides only",
      body: "Every guide is licensed, born in the region they show you, and paid fairly.",
    },
    {
      title: "Small footprints",
      body: "We cap group sizes, favor family-run riads and support village cooperatives.",
    },
    {
      title: "No fixed scripts",
      body: "Itineraries flex around your energy — slow mornings and late souk nights included.",
    },
  ],
  fr: [
    {
      title: "Guides locaux uniquement",
      body: "Tous nos guides sont certifiés, natifs de la région visitée et rémunérés équitablement.",
    },
    {
      title: "Écotourisme & Impact local",
      body: "Nous limitons la taille des groupes, favorisons les riads familiaux et soutenons les coopératives.",
    },
    {
      title: "Pas de scripts figés",
      body: "Les journées s'adaptent à votre rythme — grasses matinées ou balades tardives au souk possibles.",
    },
  ],
  es: [
    {
      title: "Solo guías locales",
      body: "Todos los guías son oficiales, nacidos en la región que te muestran y con salario justo.",
    },
    {
      title: "Impacto responsable",
      body: "Limitamos el tamaño de los grupos, apoyamos a riads familiares y cooperativas locales.",
    },
    {
      title: "Sin guiones fijos",
      body: "Los itinerarios se adaptan a tu energía: mañanas relajadas o noches en el zoco.",
    },
  ],
};

const guarantees = {
  en: [
    {
      title: "100% Private Departures",
      desc: "You will never share a vehicle with strangers. Your driver, route, and schedule belong solely to your party.",
    },
    {
      title: "Transparent Fixed Pricing",
      desc: "All fuel, road tolls, accommodations, and driver expenses are included upfront. Absolutely zero surprise hidden fees.",
    },
    {
      title: "Safety-Inspected Late-Model Fleet",
      desc: "Toyota Prado 4x4s and Mercedes-Benz Vito vans inspected before every departure, equipped with cold A/C and fresh bottled water.",
    },
    {
      title: "Vetted Independent Stays",
      desc: "We personally sleep in and verify every riad courtyard and luxury desert tent to ensure hot water, cleanliness, and authentic charm.",
    },
    {
      title: "Zero Forced Tourist Traps",
      desc: "We will never rush you into high-pressure commission souvenir shops. You shop where and when you choose.",
    },
  ],
  fr: [
    {
      title: "Départs 100% Privés",
      desc: "Vous ne partagerez jamais votre véhicule avec des inconnus. Votre chauffeur, votre rythme et votre itinéraire vous sont exclusivement dédiés.",
    },
    {
      title: "Tarifs Clairs & Transparents",
      desc: "Tous les péages, carburant, hébergements et frais de chauffeur sont compris. Aucun frais caché ni mauvaise surprise.",
    },
    {
      title: "Flotte Récente Contrôlée",
      desc: "Toyota Prado 4x4 et vans Mercedes-Benz Vito révisés avant chaque départ, climatisés et dotés d'eau minérale fraîche.",
    },
    {
      title: "Hébergements Validés en Personne",
      desc: "Nous testons et validons chaque riad et chaque tente de désert pour garantir confort, propreté et douches chaudes.",
    },
    {
      title: "Zéro Arrêt Boutique Forcé",
      desc: "Aucune pression pour visiter des boutiques à commission. Vous êtes libre de vos arrêts et de vos emplettes.",
    },
  ],
  es: [
    {
      title: "Salidas 100% Privadas",
      desc: "Nunca compartirás el vehículo con desconocidos. Tu chófer, tu ritmo y tu ruta son exclusivamente para tu grupo.",
    },
    {
      title: "Precios Claros y Transparentes",
      desc: "Peajes, combustible, alojamientos y gastos del chófer incluidos de antemano. Cero suplementos sorpresa.",
    },
    {
      title: "Flota Moderna y Revisada",
      desc: "Toyota Prado 4x4 y furgonetas Mercedes-Benz Vito revisadas antes de cada salida, con aire acondicionado y agua fresca.",
    },
    {
      title: "Alojamientos Verificados",
      desc: "Dormimos y evaluamos personalmente cada riad y jaima de lujo para asegurar agua caliente, limpieza y encanto.",
    },
    {
      title: "Sin Paradas de Tiendas Forzadas",
      desc: "Jamás te llevaremos a tiendas de souvenirs con comisión agresiva. Tú decides dónde y cuándo parar.",
    },
  ],
};

const teamMembers = [
  {
    name: "Brahim Ait Taleb",
    role: "Lead Sahara Expedition Chauffeur",
    bio: "Born at the edge of the Erg Chebbi dunes in Merzouga. Over 14 years guiding travelers through sand passes and canyon tracks. Speaks Berber, Arabic, French, and English.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Youssef Id Mansour",
    role: "High Atlas Mountain Trekking Specialist",
    bio: "A native of Imlil village at the foot of Mount Toubkal. State-certified trekking guide with extensive knowledge of Berber flora, terraced trails, and High Atlas geology.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    name: "Amina El Fassi",
    role: "Imperial Medina Historian & Cultural Guide",
    bio: "Raised in the heart of Fes el-Bali. Holds a master's degree in medieval Islamic architecture, bringing century-old madrasas and zellige tiles to life for our guests.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    name: "Karim Benkirane",
    role: "Senior Travel Designer & Chauffeur",
    bio: "Over 450,000 km navigated across Morocco with a perfect safety record. Specialized in family journeys and photography route planning.",
    image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg",
  },
];

const faqs = {
  en: [
    {
      q: "Is Morocco safe for private travelers?",
      a: "Absolutely. Morocco is one of the most stable and safe travel destinations in Africa. Our private tours include a professional local driver-guide and dedicated transport, ensuring you are supported and well-guided throughout your entire trip.",
    },
    {
      q: "How do custom itineraries work?",
      a: "Every tour listed on our website is a starting point. We customize everything: the dates, pace, type of accommodations (standard vs luxury), and stops. Just share your ideas via our contact page and we will build the route together.",
    },
    {
      q: "What should I pack for the Sahara Desert camp?",
      a: "Days in the desert are warm, but nights can get cool (especially in autumn/winter). We recommend packing comfortable, breathable layers for the day, sunglasses, sunscreen, and a warm jacket for the night around the campfire. Sandals are great for dunes, but closed shoes are recommended for walking.",
    },
    {
      q: "Are lunches and drinks included in the pricing?",
      a: "Our tour pricing covers all breakfasts, dinners (in Dades Valley and the Desert Camp), private A/C transport, driver, local guides, and stays. Lunches, mid-day drinks, and tips are excluded, allowing you the flexibility to choose local cafes and eat at your own pace.",
    },
    {
      q: "What is the booking process and deposit policy?",
      a: "Once you approve the itinerary and pricing, we ask for a small deposit (typically 20-30%) to secure your luxury desert camp and riad stays. The remaining balance is payable upon arrival in Marrakech or Fes.",
    },
  ],
  fr: [
    {
      q: "Le Maroc est-il sûr pour les voyageurs ?",
      a: "Absolument. Le Maroc est l'une des destinations les plus stables et les plus sûres d'Afrique. Nos circuits privés comprennent un chauffeur-guide local et un transport dédié, garantissant votre sécurité et votre confort tout au long du séjour.",
    },
    {
      q: "Comment fonctionne la création d'itinéraires sur mesure ?",
      a: "Tous les circuits sur notre site sont modifiables. Nous personnalisons les dates, le rythme, la catégorie d'hébergements et les étapes. Écrivez-nous via notre page Contact et nous créerons ensemble votre programme idéal.",
    },
    {
      q: "Que faut-il emporter pour la nuit au désert ?",
      a: "Les journées dans le désert sont chaudes mais les nuits fraîches (surtout d'octobre à mars). Prévoyez des vêtements légers et de la crème solaire pour le jour, et un pull chaud pour le feu de camp. Les sandales conviennent aux dunes, mais des chaussures fermées sont indispensables pour marcher.",
    },
    {
      q: "Les repas de midi et boissons sont-ils inclus ?",
      a: "Nos tarifs couvrent tous les petits-déjeuners, les dîners (dans la vallée du Dadès et au campement), les hébergements et le transport avec chauffeur. Les déjeuners, boissons et pourboires restent à votre charge pour vous laisser le choix des adresses.",
    },
    {
      q: "Comment se déroule la réservation et le paiement ?",
      a: "Une fois l'itinéraire validé, nous demandons un acompte (généralement 20 à 30 %) pour garantir les riads et le campement de luxe. Le solde est payable à votre arrivée au Maroc en espèces ou par carte.",
    },
  ],
  es: [
    {
      q: "¿Es Marruecos un destino seguro para viajar?",
      a: "Totalmente. Marruecos es uno de los destinos más estables y seguros de África. Nuestros tours privados incluyen un chófer-guía oficial y transporte dedicado, garantizando que estés acompañado y seguro durante todo el recorrido.",
    },
    {
      q: "¿Cómo funcionan los itinerarios personalizados?",
      a: "Cada tour en nuestra web es una referencia. Modificamos fechas, ritmo, categoría de hotel y paradas. Solo comparte tus ideas con nosotros y diseñaremos la ruta ideal a tu medida.",
    },
    {
      q: "¿Qué debo llevar para la noche en el desierto?",
      a: "Los días en el desierto son cálidos pero las noches frescas (sobre todo en otoño/invierno). Recomendamos ropa cómoda y ligera de día, gafas de sol y abrigo para la noche. Las sandalias son cómodas para la arena, pero calzado cerrado para caminar.",
    },
    {
      q: "¿Están incluidos los almuerzos y las bebidas?",
      a: "Nuestros precios incluyen desayunos, cenas (en Gargantas del Dades y Desierto), estancias y transporte privado con conductor. Los almuerzos, bebidas y propinas son libres para que elijas dónde comer a tu ritmo.",
    },
    {
      q: "¿Cómo es el proceso de reserva y pago?",
      a: "Tras aceptar el itinerario, solicitamos un depósito (20-30%) para reservar los riads y el campamento de dunas. El importe restante se abona a la llegada en Marrakech o Fez.",
    },
  ],
};

function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const valuesList = values[language] || values.en;
  const guaranteesList = guarantees[language] || guarantees.en;
  const faqsList = faqs[language] || faqs.en;

  const whoWeAre = language === "fr" ? "Qui sommes-nous" : language === "es" ? "Quiénes somos" : "Who we are";
  const titleText = {
    en: "Morocco, told by the people who live it",
    fr: "Le Maroc raconté par ceux qui le vivent",
    es: "Marruecos contado por quienes lo viven"
  }[language] || "Morocco, told by the people who live it";

  const p1 = {
    en: "Eva Travel started in 2014 with one Toyota 4x4 and a stubborn idea: travelers deserve more than a bus window. Today our Marrakech team of native chauffeur-guides and camp hosts welcomes over 2,000 travelers a year across the kingdom.",
    fr: "Eva Travel a débuté en 2014 avec un seul 4x4 et une idée fixe : les voyageurs méritent mieux que la vitre d'un bus. Aujourd'hui, notre équipe de Marrakech accueille plus de 2 000 voyageurs par an à travers tout le royaume.",
    es: "Eva Travel comenzó en 2014 con un solo 4x4 y una idea clara: los viajeros merecen ver más que una ventana de autobús. Hoy, nuestro equipo de Marrakech atiende a más de 2.000 viajeros al año en todo el país."
  }[language];

  const p2 = {
    en: "We plan every trip ourselves — no call centers, no resold packages. You talk to the same person before, during, and after your journey.",
    fr: "Nous créons chaque voyage nous-mêmes — pas de plateformes impersonnelles, pas de forfaits revendus. Vous échangez avec le même conseiller avant, pendant et après votre séjour.",
    es: "Planificamos cada viaje nosotros mismos, sin intermediarios. Hablarás con la misma persona antes, durante y después de tu experiencia."
  }[language];

  const stats = [
    ["12+", language === "fr" ? "Ans d'expertise" : "Years guiding"],
    ["2,000+", language === "fr" ? "Voyageurs par an" : "Travelers a year"],
    ["4.9/5", language === "fr" ? "Note moyenne" : "Average rating"],
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="animate-fade-in">
        {/* Hero About Section */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <ScrollReveal animation="slide-up">
              <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                {whoWeAre}
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight font-extrabold sm:text-5xl tracking-tight text-foreground">
                {titleText}
              </h1>
              <p className="mt-5 leading-relaxed text-muted-foreground/95 text-sm sm:text-base">
                {p1}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground/95 text-sm sm:text-base">
                {p2}
              </p>
            </ScrollReveal>

            <dl className="mt-9 grid grid-cols-3 gap-4">
              {stats.map(([n, label], idx) => (
                <ScrollReveal key={label} animation="slide-up" delay={idx * 100}>
                  <div className="rounded-2xl border border-border/70 bg-card p-4 shadow-sm text-center h-full">
                    <dt className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                      {n}
                    </dt>
                    <dd className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80 leading-tight">
                      {label}
                    </dd>
                  </div>
                </ScrollReveal>
              ))}
            </dl>
          </div>

          <ScrollReveal animation="zoom-in" delay={150}>
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-warm)]">
              <img
                src={atlas}
                alt="Berber village in the High Atlas mountains of Morocco"
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-saffron">High Atlas Mountains</p>
                <h4 className="font-display text-lg font-bold">Imlil Valley & Toubkal Foothills</h4>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 5 Golden Guarantees */}
        <section className="border-t border-border bg-secondary/20 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <ScrollReveal animation="fade-in">
                <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                  {t("guaranteesTitle")}
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {language === "fr" ? "Ce que nous vous promettons" : language === "es" ? "Nuestro compromiso contigo" : "Our Ironclad Travel Guarantees"}
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
                  {language === "fr"
                    ? "Chaque voyage est encadré par des principes stricts d'éthique, de confort et de transparence."
                    : "Strict standards of ethics, comfort, and transparency that govern every private departure."}
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guaranteesList.map((g, idx) => (
                <ScrollReveal key={g.title} animation="slide-up" delay={idx * 80} className="h-full">
                  <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between h-full hover:border-saffron transition-all">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron/15 text-saffron mb-4">
                        <CheckCircle2 className="size-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {g.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground/90 leading-relaxed">
                        {g.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Lead Team & Chauffeurs */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 border-b border-border/70">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal animation="fade-in">
              <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                {t("meetTeamTitle")}
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                {language === "fr" ? "Des professionnels passionnés à vos côtés" : "The Faces Behind Your Moroccan Journey"}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
                {language === "fr"
                  ? "Chauffeurs certifiés, guides de montagne et historiens natifs qui partagent leur pays avec fierté."
                  : "Certified chauffeurs, trekking experts, and historians born and raised in the regions they reveal to you."}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <ScrollReveal key={member.name} animation="slide-up" delay={idx * 100} className="h-full">
                <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm h-full flex flex-col justify-between hover:border-saffron/60 transition-all hover:-translate-y-1">
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-secondary/30">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-base font-bold text-foreground">
                        {member.name}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-saffron block mt-0.5">
                        {member.role}
                      </span>
                      <p className="mt-3 text-xs text-muted-foreground/90 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Responsible Tourism Pledge */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 border-b border-border/70">
          <div className="rounded-3xl border border-border/80 bg-secondary/35 p-8 sm:p-14 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 text-saffron border border-saffron/30 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider mb-3">
                <Heart className="size-3" />
                {t("pledgeTitle")}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                {language === "fr" ? "Voyager en respectant les hommes et la terre" : "Preserving Moroccan Heritage & Supporting Communities"}
              </h3>
              <div className="mt-5 space-y-4 text-xs sm:text-sm text-muted-foreground/95 leading-relaxed">
                <p>
                  {language === "fr"
                    ? "Nous collaborons directement avec des coopératives féminines d'argan certifiées sans intermédiaires commerciaux, garantissant que 100% des retombées profitent aux femmes des villages."
                    : "We partner directly with certified women's argan oil cooperatives in the Souss and Essaouira regions without commercial middlemen, ensuring fair income directly benefits rural village women."}
                </p>
                <p>
                  {language === "fr"
                    ? "Nos campements du désert sont équipés de panneaux solaires et nous finançons des projets de scolarisation dans la vallée d'Imlil dans le Haut Atlas."
                    : "In our luxury Erg Chebbi desert camps, we utilize solar energy systems and actively contribute a percentage of every booking toward heating and school supply initiatives in High Atlas mountain schools."}
                </p>
              </div>

              <div className="mt-8">
                <Button asChild variant="hero" className="rounded-full">
                  <Link to="/contact">
                    <span>{language === "fr" ? "Planifier un voyage responsable" : "Plan a Responsible Trip"}</span>
                    <ArrowRight className="size-3.5 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md">
              <img
                src={experience}
                alt="Women argan oil cooperative in Morocco"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="mx-auto max-w-4xl px-5 py-28">
          <div className="text-center mb-16">
            <ScrollReveal animation="fade-in">
              <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase mb-2">
                FAQ
              </p>
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Morocco Travel Guide & FAQ
              </h2>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={idx} animation="slide-up" delay={idx * 50}>
                  <div className="rounded-2xl border border-border/80 bg-card shadow-sm overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-secondary/15 transition-colors focus:outline-none"
                    >
                      <span className="font-display text-lg font-bold text-foreground pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`size-5 text-muted-foreground shrink-0 transition-transform duration-350 ${
                          isOpen ? "transform rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-350 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[250px] border-t border-border/40" : "max-h-0"
                      }`}
                    >
                      <p className="p-6 text-sm leading-relaxed text-muted-foreground/95 bg-secondary/5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
