import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Compass,
  ShieldCheck,
  Star,
  Users,
  ArrowRight,
  Car,
  Home as HomeIcon,
  Sparkles,
  BookOpen,
  ChevronDown,
  Send,
  Map,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TourCard } from "@/components/tour-card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { tours } from "@/data/tours";
import { useLanguage } from "@/hooks/use-language";
import { TripFinder } from "@/components/trip-finder";
import { TheEvaStandard } from "@/components/the-eva-standard";
import { HomeToursShowcase } from "@/components/home-tours-showcase";
import { DestinationGuide } from "@/components/destination-guide";
import { SignatureExperiences } from "@/components/signature-experiences";
import { FleetShowcase } from "@/components/fleet-showcase";
import { TrustCredentials } from "@/components/trust-credentials";
import { CustomTripCta } from "@/components/custom-trip-cta";
import chefchaouen from "@/assets/tour-chefchaouen.jpg";
import marrakech from "@/assets/tour-marrakech.jpg";
import atlas from "@/assets/atlas.jpg";
import essaouira from "@/assets/essaouira.jpg";
import fes from "@/assets/tour-fes.jpg";
import desert from "@/assets/desert.jpg";
import aitbenhaddou from "@/assets/aitbenhaddou.jpg";
import experience from "@/assets/experience.jpg";

const hero = "https://images.pexels.com/photos/18840310/pexels-photo-18840310.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Eva Travel — Private Morocco Tours & Sahara Adventures" },
      {
        name: "description",
        content:
          "Eva Travel organizes private tours across Morocco: Sahara desert camps, Marrakech, Fes, Chefchaouen, the Atlas Mountains and the Atlantic coast.",
      },
      { property: "og:title", content: "Eva Travel — Private Morocco Tours & Sahara Adventures" },
      {
        property: "og:description",
        content:
          "Desert camps, imperial cities and mountain valleys — tailor-made journeys with local guides.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const perks = {
  en: [
    { icon: Compass, title: "Tailor-made routes", body: "Your dates, your pace, your interests." },
    { icon: Users, title: "Local guides", body: "Licensed, regional, and genuinely great company." },
    {
      icon: ShieldCheck,
      title: "Licensed agency",
      body: "Fully insured transport and vetted stays.",
    },
    { icon: Star, title: "4.9/5 rated", body: "Hundreds of travelers, year after year." },
  ],
  fr: [
    { icon: Compass, title: "Itinéraires sur mesure", body: "Vos dates, votre rythme, vos intérêts." },
    { icon: Users, title: "Guides locaux", body: "Agréés, régionaux et de confiance." },
    {
      icon: ShieldCheck,
      title: "Agence agréée",
      body: "Transport assuré et séjours validés.",
    },
    { icon: Star, title: "Note de 4.9/5", body: "Des centaines de voyageurs satisfaits." },
  ],
  es: [
    { icon: Compass, title: "Rutas a medida", body: "Tus fechas, tu ritmo, tus intereses." },
    { icon: Users, title: "Guías locales", body: "Licenciados, regionales y de confianza." },
    {
      icon: ShieldCheck,
      title: "Agencia oficial",
      body: "Transporte asegurado y estancias verificadas.",
    },
    { icon: Star, title: "Nota de 4.9/5", body: "Cientos de viajeros felices." },
  ],
};

const differenceItems = {
  en: [
    {
      icon: Sparkles,
      title: "Itineraries built for you",
      body: "We don't resell pre-packaged group tours. Every drive, every riad stay, and every guide booking is designed custom around your parameters, energy level, and dates.",
    },
    {
      icon: Car,
      title: "Private, late-model vehicles",
      body: "Cross Morocco in absolute comfort. Our fleet of Toyota Prado 4x4s and Mercedes Vito vans feature clean interiors, heavy-duty suspension for mountain passes, and cold A/C.",
    },
    {
      icon: HomeIcon,
      title: "Hand-picked riads & camps",
      body: "We personally sleep in and vet every riad and desert camp we book. We prioritize family-owned riads inside historic medinas and ensuite desert tents with hot showers.",
    },
  ],
  fr: [
    {
      icon: Sparkles,
      title: "Itinéraires conçus pour vous",
      body: "Nous ne revendons pas de circuits de groupe. Chaque trajet, séjour et guide est sélectionné sur mesure selon vos envies et vos dates.",
    },
    {
      icon: Car,
      title: "Véhicules privés récents",
      body: "Traversez le Maroc dans un confort absolu. Flotte moderne de Toyota Prado 4x4 et de Mercedes Vito avec climatisation efficace.",
    },
    {
      icon: HomeIcon,
      title: "Riads et camps sélectionnés",
      body: "Nous validons personnellement chaque hébergement. Nous privilégions les riads historiques familiaux et les bivouacs avec douches privatives.",
    },
  ],
  es: [
    {
      icon: Sparkles,
      title: "Itinerarios hechos para ti",
      body: "No revendemos circuitos grupales. Cada trayecto, riad y guía está diseñado a medida de tus parámetros y fechas.",
    },
    {
      icon: Car,
      title: "Vehículos privados nuevos",
      body: "Viaja por Marruecos con total comodidad. Flota moderna de Toyota Prado 4x4 y Mercedes Vito con aire acondicionado.",
    },
    {
      icon: HomeIcon,
      title: "Riads y campamentos selectos",
      body: "Verificamos personalmente cada alojamiento. Priorizamos riads históricos y tiendas con baño privado en el desierto.",
    },
  ],
};

const regions = {
  en: [
    {
      title: "The Sahara Desert",
      desc: "Erg Chebbi dunes & starlit nomad camps",
      image: desert,
      link: "/tours?region=desert",
      gridClasses: "lg:col-span-2 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "Imperial Medinas",
      desc: "Marrakech palaces & historic Fes alleys",
      image: aitbenhaddou,
      link: "/tours?region=imperial",
      gridClasses: "lg:col-span-1 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "The Atlas Mountains",
      desc: "Berber village hospitality & high peaks",
      image: atlas,
      link: "/tours?region=mountains",
      gridClasses: "lg:col-span-1 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "The Atlantic Coast",
      desc: "Essaouira stone ramparts & sea breeze",
      image: essaouira,
      link: "/tours?region=coast",
      gridClasses: "lg:col-span-4 w-full aspect-[16/9] lg:aspect-auto lg:h-[280px]",
    },
  ],
  fr: [
    {
      title: "Le Désert du Sahara",
      desc: "Dunes de l'Erg Chebbi & campements sous les étoiles",
      image: desert,
      link: "/tours?region=desert",
      gridClasses: "lg:col-span-2 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "Médinas Impériales",
      desc: "Palais de Marrakech & ruelles de Fès",
      image: aitbenhaddou,
      link: "/tours?region=imperial",
      gridClasses: "lg:col-span-1 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "Montagnes de l'Atlas",
      desc: "Hospitalité berbère & hauts sommets",
      image: atlas,
      link: "/tours?region=mountains",
      gridClasses: "lg:col-span-1 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "La Côte Atlantique",
      desc: "Essaouira remparts de pierre & brise de mer",
      image: essaouira,
      link: "/tours?region=coast",
      gridClasses: "lg:col-span-4 w-full aspect-[16/9] lg:aspect-auto lg:h-[280px]",
    },
  ],
  es: [
    {
      title: "El Desierto del Sahara",
      desc: "Dunas de Erg Chebbi y campamentos de nómadas",
      image: desert,
      link: "/tours?region=desert",
      gridClasses: "lg:col-span-2 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "Medinas Imperiales",
      desc: "Palacios de Marrakech y zocos de Fez",
      image: aitbenhaddou,
      link: "/tours?region=imperial",
      gridClasses: "lg:col-span-1 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "Montañas del Atlas",
      desc: "Pueblos bereberes y altas cumbres",
      image: atlas,
      link: "/tours?region=mountains",
      gridClasses: "lg:col-span-1 w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]",
    },
    {
      title: "La Costa Atlántica",
      desc: "Essaouira murallas y brisa de mar",
      image: essaouira,
      link: "/tours?region=coast",
      gridClasses: "lg:col-span-4 w-full aspect-[16/9] lg:aspect-auto lg:h-[280px]",
    },
  ],
};

const articles = {
  en: [
    {
      slug: "sahara-packing",
      tag: "Sahara Prep",
      title: "Packing for the Sahara Desert",
      desc: "From sun layers to warm campfire knitwear, here is what you actually need to pack for comfort in the Erg Chebbi dunes.",
      readTime: "4 min read",
      image: desert,
    },
    {
      slug: "riad-etiquette",
      tag: "Morocco Stays",
      title: "Moroccan Riad Etiquette Guide",
      desc: "What is a riad? Learn what to expect regarding courtyard noise, breakfast style, and checking in to historic boutique rooms.",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg",
    },
    {
      slug: "moroccan-cuisine",
      tag: "Local Kitchen",
      title: "Cuisine Beyond the Tagine pot",
      desc: "Explore authentic Moroccan flavors: pastilla, local herbs, street-grilled sardines, and the art of pouring fresh mint tea.",
      readTime: "6 min read",
      image: experience,
    },
  ],
  fr: [
    {
      slug: "sahara-packing",
      tag: "Préparation Sahara",
      title: "Que bagages emporter dans le Sahara",
      desc: "Des vêtements légers pour la journée aux pulls chauds pour la nuit près du feu, voici le guide de bagages pour l'Erg Chebbi.",
      readTime: "4 min de lecture",
      image: desert,
    },
    {
      slug: "riad-etiquette",
      tag: "Hébergements",
      title: "Guide de savoir-vivre en Riad",
      desc: "Qu'est-ce qu'un riad ? Apprenez les coutumes de calme dans les cours, les petits déjeuners et l'accueil dans les chambres historiques.",
      readTime: "5 min de lecture",
      image: "https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg",
    },
    {
      slug: "moroccan-cuisine",
      tag: "Cuisine Locale",
      title: "La Cuisine au-delà du Tajine",
      desc: "Découvrez les saveurs du Maroc : pastilla fine, herbes aromatiques, sardines grillées et l'art de verser le thé à la menthe.",
      readTime: "6 min de lecture",
      image: experience,
    },
  ],
  es: [
    {
      slug: "sahara-packing",
      tag: "Preparación Sahara",
      title: "Equipaje para el desierto del Sahara",
      desc: "Desde ropa ligera para el día hasta abrigos para la noche en el campamento, esta es la guía esencial para Erg Chebbi.",
      readTime: "4 min de lectura",
      image: desert,
    },
    {
      slug: "riad-etiquette",
      tag: "Alojamientos",
      title: "Guía de etiqueta en los Riads",
      desc: "¿Qué es un riad? Descubre qué esperar sobre el nivel de ruido en patios, desayunos y registro en habitaciones históricas.",
      readTime: "5 min de lectura",
      image: "https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg",
    },
    {
      slug: "moroccan-cuisine",
      tag: "Cocina Local",
      title: "Cocina más allá del Tajín",
      desc: "Explora sabores marroquíes: pastela, hierbas finas, sardinas asadas y el ritual del té de menta servido desde lo alto.",
      readTime: "6 min de lectura",
      image: experience,
    },
  ],
};

const homeFaqs = {
  en: [
    {
      q: "Can I customize a tour that is already listed?",
      a: "Yes, absolutely. Every tour card on our website is a reference starting point. We customize everything: the direction, the total number of days, the style of riads (standard luxury vs. royal palaces), and specific guided stops.",
    },
    {
      q: "What type of private transport vehicle is included?",
      a: "For couples and small groups of up to 4, we provide private Toyota Prado 4x4s. For larger families and groups (up to 8), we provide spacious, modern Mercedes Vito or Mercedes Sprinter passenger vans with dedicated A/C.",
    },
    {
      q: "Is tipping customary in Morocco?",
      a: "Yes, tipping is a standard practice and a warm gesture of appreciation for service in Morocco. For private drivers, guests typically budget 200–300 DH (€20–30) per day, for local city guides 150–200 DH per half-day tour, and 20–50 DH per day for riad staff.",
    },
    {
      q: "Do you cater to families traveling with children?",
      a: "Yes, we plan child-friendly routes with shorter drive segments, spacious private vans, and hotels featuring swimming pools. We also arrange gentle camel walks and sandboarding, which are popular with kids.",
    },
    {
      q: "What is the deposit and booking procedure?",
      a: "Once you approve your custom itinerary, we require a 25% deposit to secure your riads and luxury desert camp. The remaining 75% balance can be settled upon arrival in Morocco in cash (EUR, USD, MAD) or by credit card.",
    },
    {
      q: "Can you accommodate dietary preferences (vegetarian, vegan, gluten-free)?",
      a: "Yes, easily. Moroccan cuisine is naturally rich in fresh market vegetables, lentils, chickpeas, and olive oil. We advise our partner riad chefs and desert camp hosts in advance to prepare flavorful, safe vegetarian, vegan, celiac, or halal meals throughout your journey.",
    },
    {
      q: "When is the best season to visit the Sahara desert?",
      a: "The prime desert season runs from October through May, when daytime temperatures are pleasant (20–26°C) and the night skies are crystal clear. Summer months (July–August) are very hot in the dunes, during which we recommend mountain and Atlantic coastal routes.",
    },
    {
      q: "Will we have Wi-Fi and mobile connectivity on the road?",
      a: "Yes, all our private vehicles come equipped with high-speed mobile Wi-Fi, and 4G coverage across Morocco (even throughout the Atlas passes and along the desert highway) is remarkably stable. High-speed Wi-Fi is also provided in all our partner riads and luxury desert camps.",
    },
  ],
  fr: [
    {
      q: "Puis-je personnaliser un circuit proposé ?",
      a: "Oui, absolument. Tous nos circuits sont modifiables. Nous adaptons l'itinéraire, le nombre de jours, le standing des riads (charme ou grand luxe) et les visites guidées.",
    },
    {
      q: "Quel type de véhicule de transport privé est fourni ?",
      a: "Pour les couples et groupes de 2 à 4 personnes, nous utilisons des Toyota Prado 4x4 privés. Pour les familles et groupes (jusqu'à 8), nous fournissons des vans récents de type Mercedes Vito avec climatisation.",
    },
    {
      q: "Le pourboire est-il d'usage au Maroc ?",
      a: "Oui, le pourboire est une coutume courante d'appréciation du service au Maroc. Comptez généralement de 200 à 300 DH (20-30 €) par jour pour le chauffeur, 150 à 200 DH pour le guide local et 20 à 50 DH par jour pour le personnel.",
    },
    {
      q: "Proposez-vous des voyages adaptés aux enfants ?",
      a: "Oui, nous concevons des itinéraires avec des trajets plus courts, des véhicules confortables et des riads avec piscine. Des balades à dromadaire légères et du sandboarding sont idéales pour les enfants.",
    },
    {
      q: "Quelles sont les modalités d'acompte et de réservation ?",
      a: "Une fois votre itinéraire validé, un acompte de 25% est demandé pour bloquer les riads et le bivouac de luxe. Le solde de 75% est réglable à votre arrivée au Maroc en espèces (EUR, USD, MAD) ou par carte bancaire.",
    },
    {
      q: "Pouvez-vous adapter les repas aux régimes alimentaires (végétarien, sans gluten) ?",
      a: "Tout à fait. La cuisine marocaine regorge de légumes frais, légumineuses et huile d'olive. Nous informons nos riads et campements à l'avance pour vous garantir des repas savoureux et adaptés (végétarien, végan, sans gluten ou halal).",
    },
    {
      q: "Quelle est la meilleure période pour aller dans le désert ?",
      a: "La période idéale s'étend d'octobre à mai avec des températures très agréables en journée (20–26°C) et un ciel étoilé limpide. En plein été (juillet–août), la chaleur est forte dans les dunes ; nous privilégions alors les circuits côtiers et montagneux.",
    },
    {
      q: "Aurai-je accès au Wi-Fi et au réseau sur la route ?",
      a: "Oui, tous nos véhicules privés disposent du Wi-Fi mobile et le réseau 4G au Maroc est excellent, même le long des routes de l'Atlas. Les riads et les bivouacs de luxe offrent également une connexion Wi-Fi haut débit.",
    },
  ],
  es: [
    {
      q: "¿Puedo personalizar un viaje de la lista?",
      a: "Sí, totalmente. Cada itinerario es un punto de partida. Personalizamos el recorrido, número de días, el tipo de riads y las paradas guiadas según tus deseos.",
    },
    {
      q: "¿Qué tipo de transporte privado está incluido?",
      a: "Para parejas y grupos pequeños de hasta 4 personas, ofrecemos Toyota Prado 4x4. Para grupos de hasta 8, ofrecemos furgonetas Mercedes Vito de gama alta con aire acondicionado.",
    },
    {
      q: "¿Es habitual dejar propina en Marruecos?",
      a: "Sí, es una práctica estándar y una muestra de aprecio al servicio en Marruecos. Se suele calcular 200-300 DH (20-30 €) diarios para el conductor, 150-200 DH para el guía de ciudad y 20-50 DH al día para el personal.",
    },
    {
      q: "¿Es adecuado para familias con niños?",
      a: "Sí, planificamos rutas adaptadas con recorridos más cortos, furgonetas espaciosas y hoteles con piscina. También incluimos actividades divertidas como paseos en dromedario y sandboarding.",
    },
    {
      q: "¿Cómo es el procedimiento de reserva y depósito?",
      a: "Tras aprobar tu ruta personalizada, requerimos un 25% de depósito para confirmar riads y campamento de jaimas. El 75% restante se abona a la llegada en Marruecos en efectivo (EUR, USD, MAD) o tarjeta de crédito.",
    },
    {
      q: "¿Se adaptan a dietas especiales (vegetariano, sin gluten, halal)?",
      a: "Sí, con total facilidad. La gastronomía marroquí es rica en verduras frescas, legumbres y aceite de oliva. Avisamos con antelación a los riads y campamentos para garantizar platos deliciosos y adaptados a tus necesidades.",
    },
    {
      q: "¿Cuál es la mejor época para viajar al desierto?",
      a: "La mejor temporada es de octubre a mayo, con temperaturas diurnas muy suaves (20–26°C) y cielos despejados. En verano (julio–agosto) hace mucho calor en las dunas, por lo que recomendamos rutas de montaña y costa atlántica.",
    },
    {
      q: "¿Tendremos Wi-Fi y conexión móvil durante el viaje?",
      a: "Sí, todos nuestros vehículos privados incluyen Wi-Fi móvil a bordo y la cobertura 4G en Marruecos es excelente incluso cruzando el Atlas. Además, todos los riads y campamentos disponen de conexión Wi-Fi de alta velocidad.",
    },
  ],
};

const steps = {
  en: [
    {
      n: "01",
      icon: Send,
      title: "Tell us your dream",
      body: "Dates, travelers, and the Morocco you imagine. Share your ideas via our planner wizard.",
    },
    {
      n: "02",
      icon: Map,
      title: "We draft the route",
      body: "A customized day-by-day itinerary with boutique stays, private transport, and transparent specs.",
    },
    {
      n: "03",
      icon: ShieldCheck,
      title: "You travel, we handle it",
      body: "Sit back and enjoy. Your dedicated private driver, guides, and 24/7 travel support cover every turn.",
    },
  ],
  fr: [
    {
      n: "01",
      icon: Send,
      title: "Partagez votre rêve",
      body: "Dates, voyageurs et le Maroc que vous imaginez. Remplissez notre formulaire de planification.",
    },
    {
      n: "02",
      icon: Map,
      title: "Nous créons le parcours",
      body: "Un itinéraire quotidien sur mesure avec hôtels de charme, transport privé et devis transparent.",
    },
    {
      n: "03",
      icon: ShieldCheck,
      title: "Voyagez l'esprit tranquille",
      body: "Profitez simplement. Votre chauffeur dédié, vos guides et notre assistance 24/7 s'occupent de tout.",
    },
  ],
  es: [
    {
      n: "01",
      icon: Send,
      title: "Comparte tu sueño",
      body: "Fechas, viajeros y el Marruecos que imaginas. Rellena nuestro formulario de planificación.",
    },
    {
      n: "02",
      icon: Map,
      title: "Diseñamos la ruta",
      body: "Un itinerario diario personalizado con alojamientos de encanto, transporte privado y especificaciones claras.",
    },
    {
      n: "03",
      icon: ShieldCheck,
      title: "Viaja con tranquilidad",
      body: "Relájate y disfruta. Tu conductor privado, guías y soporte 24/7 cubren cada momento de tu viaje.",
    },
  ],
};

const testimonials = {
  en: [
    {
      quote:
        "The desert camp night was the highlight of our year. Everything ran perfectly and our guide Youssef felt like family by day three.",
      name: "Clara & Tom",
      from: "Berlin, Germany",
    },
    {
      quote:
        "Eva Travel rebuilt our itinerary twice without complaining. Marrakech, Fes and the Atlas in ten days — beautifully paced.",
      name: "Amelia R.",
      from: "London, UK",
    },
    {
      quote:
        "Honest pricing, gorgeous riads and drivers who actually know the mountain roads. We're already planning a return trip.",
      name: "Miguel S.",
      from: "Madrid, Spain",
    },
  ],
  fr: [
    {
      quote:
        "La nuit au camp dans le désert a été le clou de notre année. Tout s'est déroulé à la perfection et notre guide Youssef était adorable.",
      name: "Clara & Tom",
      from: "Berlin, Allemagne",
    },
    {
      quote:
        "L'équipe a adapté notre itinéraire deux fois avec le sourire. Marrakech, Fès et l'Atlas en dix jours — un rythme idéal.",
      name: "Amelia R.",
      from: "Londres, Royaume-Uni",
    },
    {
      quote:
        "Des tarifs honnêtes, de magnifiques riads et des chauffeurs qui maîtrisent parfaitement les routes. Nous reviendrons !",
      name: "Miguel S.",
      from: "Madrid, Espagne",
    },
  ],
  es: [
    {
      quote:
        "La noche en el campamento del desierto fue lo mejor de nuestro año. Todo salió perfecto y nuestro guía Youssef fue encantador.",
      name: "Clara & Tom",
      from: "Berlín, Alemania",
    },
    {
      quote:
        "Eva Travel modificó nuestro itinerario dos veces de forma muy amable. Marrakech, Fez y el Atlas en diez días, excelente ritmo.",
      name: "Amelia R.",
      from: "Londres, Reino Unido",
    },
    {
      quote:
        "Precios honestos, riads preciosos y conductores que conocen muy bien las carreteras de montaña. ¡Ya planeamos volver!",
      name: "Miguel S.",
      from: "Madrid, España",
    },
  ],
};

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const perksList = perks[language] || perks.en;
  const differenceList = differenceItems[language] || differenceItems.en;
  const regionsList = regions[language] || regions.en;
  const articlesList = articles[language] || articles.en;
  const faqsList = homeFaqs[language] || homeFaqs.en;
  const stepsList = steps[language] || steps.en;
  const testimonialsList = testimonials[language] || testimonials.en;

  const signatureTripsLabel = {
    en: "Signature trips",
    fr: "Voyages signature",
    es: "Viajes insignia"
  }[language] || "Signature trips";

  const whereWellTakeYou = {
    en: "Where we'll take you",
    fr: "Où nous vous emmènerons",
    es: "Dónde te llevaremos"
  }[language] || "Where we'll take you";

  const viewAllTours = {
    en: "View all tours",
    fr: "Voir tous les circuits",
    es: "Ver todos los circuitos"
  }[language] || "View all tours";

  const reviewsLabel = {
    en: "Reviews",
    fr: "Avis clients",
    es: "Reseñas"
  }[language] || "Reviews";

  const reviewsSubtitle = {
    en: "Travelers on Eva Travel",
    fr: "Ce que disent nos voyageurs",
    es: "Lo que dicen nuestros viajeros"
  }[language] || "Travelers on Eva Travel";

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={hero}
            alt="Camel caravan crossing Sahara dunes at sunset in Merzouga, Morocco"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-dusk)]" />

          <div className="mx-auto flex max-w-6xl flex-col justify-center px-5 py-24 sm:py-44">
            <p className="animate-float-up text-sm font-medium tracking-[0.25em] text-primary-foreground/80 uppercase">
              {t("heroSub")}
            </p>
            <h1 className="animate-float-up mt-4 max-w-3xl font-display text-5xl leading-[1.05] font-semibold text-primary-foreground sm:text-7xl">
              {t("heroTitle")}
            </h1>
            <p className="animate-float-up mt-6 max-w-xl text-lg text-primary-foreground/85">
              {t("heroDesc")}
            </p>
            <div className="animate-float-up mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/tours">{t("exploreTours")}</Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/contact">{t("customTrip")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Perks Bar */}
        <section className="border-b border-border/80 bg-secondary/35">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
            {perksList.map((p, idx) => (
              <ScrollReveal key={p.title} animation="slide-up" delay={idx * 100}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-primary border border-border/60 shadow-sm">
                    <p.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide uppercase text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground/90">
                      {p.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Interactive Trip Finder */}
        <TripFinder />

        {/* New Section 1: The Eva Difference (Values Grid) */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-28 border-b border-border/60">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal animation="fade-in">
              <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                {t("bespoke")}
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {t("differenceTitle")}
              </h2>
              <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
                {t("differenceDesc")}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {differenceList.map((item, idx) => (
              <ScrollReveal key={item.title} animation="slide-up" delay={idx * 150} className="h-full">
                <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition-all duration-300 hover:border-saffron hover:shadow-[var(--shadow-warm)] h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary border border-border/60 mb-6">
                    <item.icon className="size-5.5 text-saffron" />
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground/90">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* The Eva Standard: Comparison & Inclusions */}
        <TheEvaStandard />

        {/* Filterable Tours Showcase */}
        <HomeToursShowcase />

        {/* Interactive Destination & Travel Time Guide */}
        <DestinationGuide />

        {/* New Section 2: Explore Regions (Visual Grid) */}
        <section className="border-t border-border/60 bg-secondary/15 py-16 sm:py-28 overflow-hidden">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <ScrollReveal animation="fade-in">
                <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                  {t("landscapes")}
                </p>
                <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {t("exploreRegion")}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
                  {t("landscapesDesc")}
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch">
              {regionsList.map((reg, idx) => (
                <ScrollReveal
                  key={reg.title}
                  animation="slide-up"
                  delay={idx * 100}
                  className={`${reg.gridClasses}`}
                >
                  <Link
                    to={reg.link}
                    className="group relative block overflow-hidden rounded-3xl border border-border/80 shadow-sm hover:border-saffron/60 hover:shadow-[0_20px_40px_-25px_oklch(0.82_0.08_85_/_0.25)] transition-all duration-500 cursor-pointer h-full w-full"
                  >
                    <img
                      src={reg.image}
                      alt={reg.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-75" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end text-primary-foreground">
                      <span className="text-[9.5px] font-bold text-saffron uppercase tracking-widest mb-1.5 opacity-0 translate-y-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        Morocco Destination
                      </span>
                      <h3 className="font-display text-2xl font-extrabold tracking-tight">
                        {reg.title}
                      </h3>
                      <p className="mt-2 text-xs text-primary-foreground/80 leading-relaxed font-sans max-w-md font-medium">
                        {reg.desc}
                      </p>
                      <span className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-saffron opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        {t("viewRoutes")}
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Curated Signature Experiences */}
        <SignatureExperiences />

        {/* Luxury Private Fleet Showcase */}
        <FleetShowcase />

        {/* How it works */}
        <section className="zellige-grid border-y border-border bg-secondary/25 py-16 sm:py-28 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 relative">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <ScrollReveal animation="fade-in">
                <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                  {t("howItWorks")}
                </p>
                <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {t("howItWorks")}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
                  {t("processDesc")}
                </p>
              </ScrollReveal>
            </div>

            {/* Connective Line (horizontal on desktop) */}
            <div className="absolute top-[52%] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-border/80 -translate-y-1/2 hidden md:block pointer-events-none select-none" />

            <div className="mt-12 grid gap-8 md:grid-cols-3 relative">
              {stepsList.map((s, idx) => {
                const StepIcon = s.icon;
                return (
                  <ScrollReveal key={s.n} animation="slide-up" delay={idx * 150} className="h-full">
                    <div className="relative rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition-all duration-500 hover:border-saffron/60 hover:shadow-[0_20px_40px_-25px_oklch(0.82_0.08_85_/_0.25)] hover:-translate-y-1.5 h-full flex flex-col items-center text-center">

                      {/* Step Number Floating Badge */}
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-saffron text-primary-foreground text-[9px] font-bold px-3 py-0.5 border-2 border-background shadow-md uppercase tracking-wider font-sans">
                        Step {s.n}
                      </span>

                      {/* Icon Circle */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary border border-border/60 shadow-sm mt-2 mb-5 transition-transform duration-300 group-hover:scale-105">
                        <StepIcon className="size-6 text-saffron" />
                      </div>

                      <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground/95 font-medium">
                        {s.body}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* New Section 3: Travel Resources & Insights (Articles Grid) */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal animation="fade-in">
              <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                {t("resources")}
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {t("tipsTitle")}
              </h2>
              <p className="mt-4 text-sm text-muted-foreground/90 leading-relaxed">
                {t("resourcesDesc")}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {articlesList.map((art, idx) => (
              <ScrollReveal key={art.slug} animation="slide-up" delay={idx * 150} className="h-full">
                <Link
                  to="/guidebook/$slug"
                  params={{ slug: art.slug }}
                  className="group overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-500 hover:border-saffron/60 hover:shadow-[0_20px_40px_-25px_oklch(0.82_0.08_85_/_0.25)] hover:-translate-y-1.5 flex flex-col h-full text-foreground hover:no-underline"
                >
                  {/* Aspect ratio header image with hover zoom */}
                  <div className="relative aspect-video w-full overflow-hidden bg-secondary/35">
                    <img
                      src={art.image}
                      alt={art.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-saffron">
                        <span>{art.tag}</span>
                        <span className="text-muted-foreground/75 font-sans font-medium lowercase">
                          {art.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-foreground mt-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                        {art.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground/90 font-medium line-clamp-3">
                        {art.desc}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-border/50 pt-4 flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-wider group-hover:text-saffron transition-colors duration-350">
                      <BookOpen className="size-3.5" />
                      <span>{t("readGuidebook")}</span>
                      <ArrowRight className="size-3 transition-transform duration-350 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Verified Ratings, Trust Credentials & Traveler Stories */}
        <TrustCredentials />

        {/* FAQs Section */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:py-28 border-t border-border/60">
          <div className="text-center mb-16">
            <ScrollReveal animation="fade-in">
              <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                FAQ
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {t("faqsTitle")}
              </h2>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={idx} animation="slide-up" delay={idx * 100}>
                  <div className="rounded-2xl border border-border/80 bg-card transition-all duration-300">
                    <button
                      className="flex w-full items-center justify-between p-6 text-left font-display text-base font-bold text-foreground cursor-pointer focus:outline-none focus:text-primary"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`size-4 text-muted-foreground/75 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground/90 border-t border-border/40 pt-4 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Pre-Footer Bespoke Invitation */}
        <CustomTripCta />
      </main>

      <SiteFooter />
    </div>
  );
}
