import hero from "@/assets/hero.jpg";
import desert from "@/assets/desert.jpg";
import experience from "@/assets/experience.jpg";

export type GuidebookSection = {
  heading: string;
  body: string;
};

export type GuidebookContent = {
  title: string;
  tag: string;
  readTime: string;
  summary: string;
  introduction: string;
  sections: GuidebookSection[];
  conclusion: string;
  tipsTitle: string;
  tips: string[];
};

export type Guidebook = {
  slug: string;
  image: string;
  en: GuidebookContent;
  fr: GuidebookContent;
  es: GuidebookContent;
};

export const guidebooks: Guidebook[] = [
  {
    slug: "sahara-packing",
    image: desert,
    en: {
      title: "Packing for the Sahara Desert",
      tag: "Sahara Prep",
      readTime: "4 min read",
      summary: "From sun layers to warm campfire knitwear, here is what you actually need to pack for comfort in the Erg Chebbi dunes.",
      introduction: "Preparing for a journey into the Erg Chebbi dunes is a balancing act. The desert is a place of extremes—blazing sun by day and a sudden, quiet chill by night. To travel comfortably, you need to think about sun protection, temperature shifts, and fine-grained sand.",
      sections: [
        {
          heading: "1. The Daytime Dress Code: Light & Loose",
          body: "Moroccan sun is intense, especially on the dunes. Instead of shorts and tank tops, which expose your skin to direct radiation and dry winds, opt for loose-fitting, breathable fabrics like linen or lightweight cotton. Long-sleeved shirts and loose trousers keep you cool by creating a circulating layer of air, while protecting you from sunburn."
        },
        {
          heading: "2. Campfire Nights: The Sudden Temperature Drop",
          body: "As soon as the sun dips below the horizon, the sand loses heat rapidly. Winter desert nights (November to February) can drop close to freezing. Bring a warm fleece, a windbreaker, or a cozy knit sweater to wear around the campfire. Thermal undergarments are highly recommended if you are sleeping in a traditional nomad tent."
        },
        {
          heading: "3. Footwear: Sand vs. Stone Paths",
          body: "For walking around the dunes, open sports sandals or slip-ons are perfect, as sand inevitably gets inside every shoe. However, for camel riding and walking along rocky paths near the desert edges, closed-toe trail sneakers or light hiking shoes are essential to prevent stubbed toes and keep out sharp gravel."
        },
        {
          heading: "4. The Saharan Turban (Cheich)",
          body: "The traditional indigo blue turban, or 'cheich,' is more than a souvenir—it is highly functional. Wrapped around your head and face, it shields your eyes and nose from sudden gusts of windblown sand, keeps the sun off your neck, and cools your skin. Your driver-guide can show you the traditional way to wrap it before your camel trek."
        }
      ],
      conclusion: "Packing light but smart ensures you can focus on the silence of the Sahara and the beauty of the stars rather than struggling with cold layers or sandy pockets.",
      tipsTitle: "Sahara Essentials Checklist",
      tips: [
        "High-SPF sunscreen and moisturizing lip balm (the dry air cracks lips fast).",
        "A fully charged power bank (most luxury camps have outlets, but backups are safe).",
        "Wet wipes and eye drops (ideal for flushing out fine sand dust).",
        "A soft, zipped bag or dust cover for cameras and lenses."
      ]
    },
    fr: {
      title: "Que bagages emporter dans le Sahara",
      tag: "Préparation Sahara",
      readTime: "4 min de lecture",
      summary: "Des vêtements légers pour la journée aux pulls chauds pour la nuit près du feu, voici le guide de bagages pour l'Erg Chebbi.",
      introduction: "Se préparer pour un voyage dans les dunes de l'Erg Chebbi demande de la réflexion. Le désert est un lieu d'extrêmes — soleil intense le jour et fraîcheur soudaine la nuit. Pour voyager confortablement, pensez à vous protéger du soleil, du sable fin et des chutes de température.",
      sections: [
        {
          heading: "1. Tenue de journée : ample et légère",
          body: "Le soleil marocain est fort, surtout dans les dunes. Au lieu de shorts ou débardeurs qui exposent la peau aux brûlures et à l'air sec, privilégiez des matières amples et respirantes comme le lin ou le coton. Des manches longues et des pantalons larges créent une couche d'air frais naturelle tout en protégeant de l'insolation."
        },
        {
          heading: "2. Les soirées au feu de camp : chutes de température",
          body: "Dès que le soleil se couche, le sable perd sa chaleur très vite. Les nuits d'hiver (de novembre à février) peuvent être glaciales. Prévoyez une veste chaude, un coupe-vent ou un pull confortable pour les soirées. Un sous-vêtement thermique est recommandé pour dormir sous la tente nomade traditionnelle."
        },
        {
          heading: "3. Chaussures : sable et sentiers de pierre",
          body: "Pour marcher dans les dunes de sable fin, des sandales ouvertes sont agréables, car le sable s'infiltre partout. En revanche, pour monter à dromadaire ou marcher sur les sentiers rocailleux à la lisière du désert, prévoyez des baskets fermées pour protéger vos pieds des graviers et cailloux."
        },
        {
          heading: "4. Le chèche saharien",
          body: "Le turban traditionnel bleu indigo, ou 'chèche', est bien plus qu'un simple souvenir : il est très fonctionnel. Enroulé autour du visage et de la tête, il fait écran au sable lors des rafales de vent, protège le cou du soleil et garde la tête au frais. Votre chauffeur se fera un plaisir de vous montrer comment le nouer."
        }
      ],
      conclusion: "Voyager léger mais avec des vêtements adaptés vous permettra d'apprécier pleinement le silence du désert et la voûte céleste sans souffrir du vent ou du froid.",
      tipsTitle: "Checklist Essentielle Sahara",
      tips: [
        "Écran solaire haute protection et baume à lèvres hydratant.",
        "Une batterie externe (power bank) chargée pour vos appareils photos.",
        "Lingettes humides et gouttes ophtalmiques (pour nettoyer le sable fin).",
        "Un sac étanche ou une housse pour protéger vos appareils du sable."
      ]
    },
    es: {
      title: "Equipaje para el desierto del Sahara",
      tag: "Preparación Sahara",
      readTime: "4 min de lectura",
      summary: "Desde ropa ligera para el día hasta abrigos para la noche en el campamento, esta es la guía esencial para Erg Chebbi.",
      introduction: "Prepararse para un viaje a las dunas de Erg Chebbi es un equilibrio. El desierto es un lugar de extremos: sol abrasador de día y un frío repentino al anochecer. Para viajar con comodidad, piensa en protegerte del sol, del viento y del polvo de arena fina.",
      sections: [
        {
          heading: "1. Vestimenta diurna: ropa ligera y holgada",
          body: "El sol de Marruecos es muy intenso en el desierto. Evita los shorts y camisetas de tirantes directos al sol; opta por telas frescas de lino o algodón holgadas. Las camisas de manga larga y pantalones anchos protegen tu piel y crean una capa de aire que te mantiene fresco."
        },
        {
          heading: "2. Noches de fogata: el frío repentino",
          body: "En cuanto el sol cae, la arena se enfría rápidamente. Las noches de invierno (de noviembre a febrero) pueden rozar los cero grados. Lleva un forro polar, un cortavientos o un suéter cálido para cenar junto al fuego. La ropa térmica interior es muy recomendable para dormir en las tiendas nómadas."
        },
        {
          heading: "3. Calzado: arena y senderos rocosos",
          body: "Para caminar en la arena limpia de las dunas, las sandalias deportivas o chanclas son ideales, ya que la arena entra siempre. Sin embargo, para los paseos en dromedario y caminar por terrenos rocosos, son esenciales zapatillas cerradas para evitar piedras afiladas."
        },
        {
          heading: "4. El turbante sahariano (Chèche)",
          body: "El turbante azul tradicional, o 'chèche', es un elemento de gran utilidad. Envolviendo tu cabeza y cara, te protege del viento con arena, evita quemaduras en el cuello y mantiene tu piel fresca. Tu guía te enseñará a envolverlo de la forma tradicional."
        }
      ],
      conclusion: "Llevar el equipaje justo y adecuado te permitirá disfrutar del silencio y del cielo estrellado del Sahara sin preocuparte por el frío o la arena.",
      tipsTitle: "Lista de Esenciales para el Sahara",
      tips: [
        "Protector solar de alto factor y bálsamo labial hidratante.",
        "Una batería externa para tus dispositivos y cámaras.",
        "Toallitas húmedas y gotas para los ojos (útiles contra el polvo de arena).",
        "Fundas protectoras herméticas para teléfonos y cámaras de fotos."
      ]
    }
  },
  {
    slug: "riad-etiquette",
    image: "https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg",
    en: {
      title: "Moroccan Riad Etiquette Guide",
      tag: "Morocco Stays",
      readTime: "5 min read",
      summary: "What is a riad? Learn what to expect regarding courtyard noise, breakfast style, and checking in to historic boutique rooms.",
      introduction: "A riad is a traditional Moroccan house built around an indoor garden or courtyard. Originally designed to keep families private and cool, staying in a riad is one of Morocco's most intimate experiences. However, their historic architecture comes with unique guidelines for travelers.",
      sections: [
        {
          heading: "1. The Inward Architecture: Acoustics and Privacy",
          body: "Riads are designed to face inward, with rooms opening directly onto a central courtyard and no windows facing the outer streets. While this creates a peaceful oasis, it also means the acoustics are highly amplified. Sound travels easily through open archways. Guests are encouraged to speak softly in the courtyard, especially during early mornings and late evenings."
        },
        {
          heading: "2. The Mint Tea Welcoming Ritual",
          body: "Checking in to a riad is not a transaction; it is an act of hospitality. You will be invited to sit in the courtyard and served hot mint tea with local cookies. It is considered polite to sit down, enjoy the tea, and chat with the host rather than rushing straight to your room. Relax—this is where your vacation pace begins."
        },
        {
          heading: "3. Rooftop Terraces and Medina Views",
          body: "Most riads feature beautiful flat rooftops where breakfast is served. These terraces also overlook the surrounding medina rooftops and neighbors' homes. To respect the privacy of local families, avoid taking photos directly into neighboring windows or private washing lines."
        },
        {
          heading: "4. Tipping Riad Staff",
          body: "Riad hosts, housekeepers, and luggage handlers work hard to maintain these historic properties. While tipping is voluntary, it is highly appreciated. Leaving 20 to 50 DH per day for housekeepers, or tipping portage staff 10-20 DH for carrying heavy bags through medina alleys, is a standard gesture."
        }
      ],
      conclusion: "By understanding the quiet rhythm of these historic homes, you can enjoy a peaceful stay that feels like stepping back into Moroccan history.",
      tipsTitle: "Riad Safety & Comfort Tips",
      tips: [
        "Medina alleys can be dark; take the riad's business card with the phone number and map.",
        "Bring earplugs if you are a light sleeper (morning prayer calls can sound close).",
        "Historic plumbing is fragile; do not flush paper down the toilets if bins are provided.",
        "Close your room door tightly to keep out courtyard songbirds."
      ]
    },
    fr: {
      title: "Guide de savoir-vivre en Riad",
      tag: "Hébergements",
      readTime: "5 min de lecture",
      summary: "Qu'est-ce qu'un riad ? Apprenez les coutumes de calme dans les cours, les petits déjeuners et l'accueil dans les chambres historiques.",
      introduction: "Un riad est une maison marocaine traditionnelle articulée autour d'un jardin intérieur ou d'un patio. Conçus pour préserver la fraîcheur et l'intimité familiale, les riads offrent un séjour authentique. Cependant, leur architecture historique implique quelques règles de bon sens.",
      sections: [
        {
          heading: "1. L'architecture tournée vers l'intérieur : acoustique et calme",
          body: "Les fenêtres des riads s'ouvrent vers le patio central intérieur plutôt que vers les ruelles. Cela crée un calme agréable, mais cela amplifie aussi les sons. Les bruits de voix montent facilement le long des murs. Les hôtes sont invités à parler doucement dans le patio, en particulier le matin et en fin de soirée."
        },
        {
          heading: "2. Le rituel d'accueil au thé à la menthe",
          body: "L'enregistrement dans un riad n'est pas une simple formalité, c'est un moment d'hospitalité. On vous invitera à vous asseoir dans le patio pour partager un thé à la menthe chaud accompagné de pâtisseries. Prendre le temps d'échanger avec votre hôte est de rigueur et marque le début de votre rythme de vacances."
        },
        {
          heading: "3. Terrasses sur les toits et voisinage",
          body: "La plupart des riads possèdent une terrasse plate où le petit-déjeuner est servi. Ces espaces offrent une vue sur le quotidien des habitants de la médina. Afin de respecter la vie privée des familles locales, évitez de prendre des photos ciblant directement les fenêtres ou les terrasses des voisins."
        },
        {
          heading: "4. Gratifier le personnel du riad",
          body: "Les hôtes, femmes de chambre et bagagistes travaillent dur pour entretenir ces bâtiments anciens. Bien que le pourboire soit facultatif, il est d'usage et apprécié. Laisser 20 à 50 DH par jour pour le ménage, ou gratifier de 10 à 20 DH les porteurs de bagages dans les ruelles, est un geste de remerciement habituel."
        }
      ],
      conclusion: "En adoptant le rythme discret et paisible de ces demeures historiques, vous profiterez d'un séjour empreint de charme et de sérénité.",
      tipsTitle: "Conseils Utiles en Riad",
      tips: [
        "Les ruelles peuvent être sinueuses ; gardez toujours la carte du riad avec ses coordonnées sur vous.",
        "Prévoyez des bouchons d'oreille si vous avez le sommeil léger (le premier appel à la prière retentit à l'aube).",
        "Les canalisations anciennes sont fragiles ; utilisez les poubelles prévues pour le papier.",
        "Veillez à fermer votre porte de chambre pour éviter l'entrée des oiseaux du patio."
      ]
    },
    es: {
      title: "Guía de etiqueta en los Riads",
      tag: "Alojamientos",
      readTime: "5 min de lectura",
      summary: "¿Qué es un riad? Descubre qué esperar sobre el nivel de ruido en patios, desayunos y registro en habitaciones históricas.",
      introduction: "Un riad es una casa tradicional marroquí construida en torno a un patio interior. Originalmente pensados para dar frescor e intimidad familiar, alojarse en ellos es una experiencia única. Sin embargo, su estructura histórica requiere seguir algunas normas de etiqueta.",
      sections: [
        {
          heading: "1. La acústica interior y el descanso",
          body: "Las habitaciones dan al patio central y no tienen ventanas a la calle exterior. Esto crea un oasis de paz, pero la acústica interior es muy alta y la voz reverbera con facilidad. Se aconseja hablar en un tono suave en el patio, sobre todo por las mañanas temprano y por las noches."
        },
        {
          heading: "2. El ritual de bienvenida con té de menta",
          body: "Llegar a un riad no es una mera transacción, sino un acto de hospitalidad. Te invitarán a sentarte en el patio y te servirán té de menta caliente con galletas locales. Lo correcto es sentarse, disfrutar de la bebida y conversar unos minutos con tu anfitrión antes de subir las maletas."
        },
        {
          heading: "3. Terrazas y respeto al vecindario",
          body: "Casi todos los riads tienen terrazas planas donde se sirve el desayuno. Desde ellas se ven las casas vecinas y el día a día de las familias locales. Para respetar su privacidad, evita hacer fotos directas hacia el interior de las viviendas colindantes o sus tendederos."
        },
        {
          heading: "4. Propinas al personal del riad",
          body: "El personal de limpieza, maleteros y recepción se esfuerza para mantener en perfecto estado estas joyas históricas. Aunque es voluntario, dejar de 20 a 50 DH al día para el servicio de limpieza, o dar de 10 a 20 DH a los maleteros de la medina, es un gesto de agradecimiento común."
        }
      ],
      conclusion: "Comprender el ritmo tranquilo de estas antiguas casas señoriales te garantizará una estancia inolvidable llena de hospitalidad marroquí.",
      tipsTitle: "Consejos de Confort en Riads",
      tips: [
        "Los callejones pueden ser confusos; guarda la tarjeta física del riad con el teléfono de asistencia.",
        "Lleva tapones de oídos si tienes el sueño muy ligero (el canto del muecín matutino se escucha cerca).",
        "Las tuberías antiguas son delicadas; no tires papel al inodoro si hay una papelera instalada.",
        "Cierra bien la puerta de tu cuarto para evitar que entren los pájaros que habitan el patio central."
      ]
    }
  },
  {
    slug: "moroccan-cuisine",
    image: experience,
    en: {
      title: "Cuisine Beyond the Tagine pot",
      tag: "Local Kitchen",
      readTime: "6 min read",
      summary: "Explore authentic Moroccan flavors: pastilla, local herbs, street-grilled sardines, and the art of pouring fresh mint tea.",
      introduction: "Moroccan food is famous for its tagines, but the country's culinary heritage is far richer. Influenced by Berber, Andalusian, Mediterranean, and Saharan cultures, the traditional kitchen uses subtle spice blending, slow roasting, and sweet-and-savory combinations.",
      sections: [
        {
          heading: "1. Pastilla: The Sweet-and-Savory Masterpiece",
          body: "Perhaps the peak of Moroccan festive cuisine, Pastilla is a delicate pie made of paper-thin layers of warka pastry. Traditionally stuffed with shredded pigeon (or more commonly chicken today) cooked in saffron, eggs, and coriander, it is layered with toasted crushed almonds, cinnamon, and sugar, and dusted with powdered sugar."
        },
        {
          heading: "2. Rfissa: Comfort Food for Celebrations",
          body: "A lesser-known dish among tourists but a local favorite, Rfissa consists of shredded cold pancakes (trid) served under chicken cooked with lentils, onions, and fenugreek seeds (halba). It is a warm, deeply spiced, and satisfying dish traditionally served to celebrate new births and family gatherings."
        },
        {
          heading: "3. Harira: The Heartbeat Soup",
          body: "Harira is the national soup of Morocco. Made with tomatoes, chickpeas, lentils, beef, cilantro, and vermicelli, it is seasoned with ginger and turmeric. While eaten year-round, it is the center of the table during Ramadan, broken with sweet dates and honeyed shebakia cookies."
        },
        {
          heading: "4. The Art of Mint Tea (Moroccan Whiskey)",
          body: "Mint tea is the national drink and is served throughout the day. It is brewed using green gunpowder tea leaves, fresh spearmint leaves, and sugar blocks. Pouring the tea from high above is not just a show—it cools the tea, oxygenates the brew, and creates a thick layer of foam at the top, indicating the tea is perfectly steeped."
        }
      ],
      conclusion: "Morocco's culinary landscape is best explored by asking locals what is in season, visiting neighborhood spice markets, and tasting street food specialties.",
      tipsTitle: "Dishes to Try Voted by Chauffeurs",
      tips: [
        "Tanjia Marrakchia (lamb slow-cooked inside a clay urn in wood ash furnaces).",
        "Grilled sardines with chermoula marinade (freshly caught along Essaouira harbor).",
        "Zaalouk (cooked eggplant and tomato dip seasoned with cumin and garlic).",
        "Date and almond milk shakes (refreshing on hot medina afternoons)."
      ]
    },
    fr: {
      title: "La Cuisine au-delà du Tajine",
      tag: "Cuisine Locale",
      readTime: "6 min de lecture",
      summary: "Découvrez les saveurs du Maroc : pastilla fine, herbes aromatiques, sardines grillées et l'art de verser le thé à la menthe.",
      introduction: "La cuisine marocaine est célèbre pour ses tajines, mais son patrimoine culinaire est bien plus vaste. Riche d'influences berbères, andalouses, méditerranéennes et sahariennes, elle associe épices subtiles, cuissons lentes et associations sucrées-salées.",
      sections: [
        {
          heading: "1. La Pastilla : le joyau sucré-salé",
          body: "Sommet de la cuisine de fête marocaine, la Pastilla est une tourte en fines feuilles de brick (ouarka). Traditionnellement garnie de poulet mijoté au safran, aux œufs et à la coriandre, elle contient aussi des amandes concassées et grillées, de la cannelle et du sucre glace en décoration."
        },
        {
          heading: "2. La Rfissa : le plat réconfortant",
          body: "Moins connue des voyageurs mais adorée des locaux, la Rfissa se compose de crêpes fines (msemmen/trid) découpées, servies sous un poulet mijoté aux lentilles, oignons et graines de fenugrec (halba). C'est un plat chaleureux souvent préparé lors des réunions de famille."
        },
        {
          heading: "3. La Harira : la soupe nationale",
          body: "La Harira est la soupe emblématique du Maroc. À base de tomates, pois chiches, lentilles, viande, coriandre et vermicelles, elle est relevée de gingembre et curcuma. Consommée toute l'année, elle est incontournable pour rompre le jeûne du Ramadan avec des dattes."
        },
        {
          heading: "4. L'art du thé à la menthe (Le whisky marocain)",
          body: "Le thé à la menthe est la boisson nationale. Préparé avec du thé vert de chine (gunpowder), des feuilles de menthe fraîche et du sucre. Le servir de haut permet d'oxygéner le thé, d'en libérer les arômes et de créer une mousse onctueuse en surface."
        }
      ],
      conclusion: "Pour découvrir la richesse culinaire du Maroc, n'hésitez pas à demander conseil aux locaux, à visiter les marchés d'épices et à goûter la cuisine de rue.",
      tipsTitle: "Plats à Goûter Recommandés",
      tips: [
        "Tanjia Marrakchia (viande d'agneau cuite lentement dans une jarre en terre dans les fours des hammams).",
        "Sardines grillées marinées à la chermoula (fraîchement pêchées sur le port d'Essaouira).",
        "Zaalouk (caviar d'aubergines aux tomates cuites, cumin et ail).",
        "Jus d'amandes aux dattes (une boisson très rafraîchissante l'après-midi)."
      ]
    },
    es: {
      title: "Cocina más allá del Tajín",
      tag: "Cocina Local",
      readTime: "6 min de lectura",
      summary: "Explora sabores marroquíes: pastela, hierbas finas, sardinas asadas y el ritual del té de menta servido desde lo alto.",
      introduction: "La gastronomía de Marruecos es conocida mundialmente por sus tajines, pero su recetario es mucho más diverso. Con aportes bereberes, andalusíes, mediterráneos y saharianos, destaca por su uso delicado de especias y contrastes dulce-salados.",
      sections: [
        {
          heading: "1. La Pastela (Pastilla): obra de arte dulce y salada",
          body: "El plato festivo por excelencia de Marruecos. Consiste en una masa de hojaldre finísima (warka) rellena de carne de pollo cocida con azafrán, cilantro y huevo, alternando con una capa crujiente de almendras tostadas machacadas, canela y azúcar glacé."
        },
        {
          heading: "2. Rfissa: plato reconfortante de fiesta",
          body: "Un guiso tradicional muy querido localmente. Se sirve sobre tiras de tortas finas (trid) cubiertas de pollo guisado con lentejas, cebolla y semillas de alholva (halba). Es una comida sustanciosa y especiada típica en reuniones familiares."
        },
        {
          heading: "3. Harira: la sopa nacional",
          body: "La Harira es la sopa más famosa del país. Lleva tomate, garbanzos, lentejas, carne, cilantro, apio y fideos, todo condimentado con jengibre y cúrcuma. Es el plato central para romper el ayuno diario en el mes de Ramadán, acompañada de dátiles."
        },
        {
          heading: "4. El té de menta (El whisky marroquí)",
          body: "El té verde con hojas de hierbabuena fresca y azúcar es la bebida de bienvenida nacional. Servirlo desde gran altura airea el té y genera una espuma superficial densa en el vaso que indica que el té está listo para tomar."
        }
      ],
      conclusion: "Explorar la cocina de Marruecos es descubrir una combinación inigualable de especias frescas, mercados aromáticos y recetas lentas y tradicionales.",
      tipsTitle: "Discos a Probar según los Chóferes",
      tips: [
        "Tanjia Marrakchia (cordero guisado lentamente dentro de una vasija de barro en los hornos tradicionales de Marrakech).",
        "Sardinas asadas con chermoula (frescas, tomadas en los puertos de Essaouira).",
        "Zaalouk (ensalada templada de berenjenas, tomates cocidos, ajo y comino).",
        "Batido de dátiles y leche de almendras (muy energético y refrescante en verano)."
      ]
    }
  }
];
