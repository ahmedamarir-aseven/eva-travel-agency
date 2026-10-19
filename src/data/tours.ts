// Auto-generated tours database compiled from Enjoy Marrakech Tours
import chefchaouen from "@/assets/tour-chefchaouen.jpg";
import marrakech from "@/assets/tour-marrakech.jpg";
import atlas from "@/assets/tour-atlas.jpg";
import essaouira from "@/assets/tour-essaouira.jpg";
import fes from "@/assets/tour-fes.jpg";
import sahara from "@/assets/hero-sahara.jpg";

// Copy-imported local assets
import aitbenhaddou from "@/assets/aitbenhaddou.jpg";
import atlasImage from "@/assets/atlas.jpg";
import balloon from "@/assets/balloon.jpg";
import camel from "@/assets/camel.jpg";
import desertImage from "@/assets/desert.jpg";
import essaouiraImage from "@/assets/essaouira.jpg";
import experience from "@/assets/experience.jpg";
import transfer from "@/assets/transfer.jpg";
import heroImage from "@/assets/hero.jpg";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Tour = {
  slug: string;
  title: string;
  region: string;
  days: string;
  price: string;
  image: string;
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  accommodation: string;
  transport: string;
};

export const tours: Tour[] = [
  {
    slug: "sahara-merzouga",
    title: "Sahara Nights in Merzouga",
    region: "Desert",
    days: "3 days",
    price: "Price on Request",
    image: sahara,
    summary: "Cross the Draa valley to the Erg Chebbi dunes, ride camels at sunset and sleep in a private luxury camp under the stars.",
    highlights: ["Camel trek at golden hour","Luxury desert camp","Berber music around the fire"],
    itinerary: [
      {
            "day": 1,
            "title": "Marrakech to Dades Valley via Ait Benhaddou",
            "description": "Depart from Marrakech, crossing the spectacular High Atlas Mountains via the Tizi n'Tichka pass (2,260m). Stop at the UNESCO World Heritage site of Ait Benhaddou, a fortified clay city that served as the backdrop for films like Gladiator and Lawrence of Arabia. Continue through the rose valleys of Kelaat M'gouna, arriving in the dramatic Dades Gorges for a sunset over the canyon and dinner at a boutique hotel."
      },
      {
            "day": 2,
            "title": "Dades Gorges to Erg Chebbi Luxury Desert Camp",
            "description": "Walk through the massive rock walls of the Todra Gorges before driving deeper into the pre-Saharan plains. Stop at Erfoud to learn about ancient fossil excavations. Arrive at the golden dunes of Merzouga where you will board camels for a trek into the dunes at sunset. Spend the night at a private luxury desert camp, complete with private tiled bathrooms, thick carpets, and a traditional Berber feast around the campfire under a dome of stars."
      },
      {
            "day": 3,
            "title": "Sunrise in the Dunes & Return to Marrakech",
            "description": "Wake up early to witness a breathtaking desert sunrise over the Erg Chebbi dunes. After a traditional Moroccan breakfast, travel back to Marrakech via Rissani, the Draa Valley, and Ouarzazate. Stop along the palm-lined oases for photos and arrive back in Marrakech in the late evening."
      }
],
    included: ["Private 4x4 Prado or Mercedes Vito with A/C","Licensed English/French speaking driver-guide","1 night in Dades Valley hotel (dinner & breakfast included)","1 night in Luxury Desert Camp (ensuite bathroom, dinner & breakfast)","Sunset and sunrise camel trek","Sandboarding in the dunes","All fuel, road tolls, and parking fees"],
    excluded: ["Midday lunches and drinks","Entrance fees to monuments (Ait Benhaddou / Cinema Studios)","Tips for driver, camel guides, and local helpers","Personal travel insurance"],
    accommodation: "1 night in a premium Dades valley hotel, 1 night in a luxury ensuite desert tent.",
    transport: "Private 4x4 Toyota Prado or Mercedes Vito passenger van with local driver-guide."
  },
  {
    slug: "marrakech-medina",
    title: "Marrakech Medina & Souks",
    region: "Imperial city",
    days: "2 days",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/April2020/gS0bDYupI3f1woLQw8vD_480_322.jpg",
    summary: "Jemaa el-Fnaa at dusk, hidden riads, the Bahia Palace and a guided walk through the spice and leather souks.",
    highlights: ["Local food tour","Bahia Palace & Majorelle","Rooftop dinner"],
    itinerary: [
      {
            "day": 1,
            "title": "Medina History, Palaces & Jemaa el-Fnaa",
            "description": "Meet your local historian guide for a deep-dive walk through the historic Medina. Visit the Bahia Palace, a masterpiece of Moroccan-Andalusian architecture, and the Saadian Tombs. Wander through the ancient Mellah (Jewish Quarter) before settling on a rooftop terrace overlooking Jemaa el-Fnaa square just as the street food stalls open and musicians begin their nightly performances. Enjoy an authentic tagine dinner."
      },
      {
            "day": 2,
            "title": "Majorelle Gardens & Secret Souks Tour",
            "description": "Morning visit to the tranquil Majorelle Gardens and the YSL Museum to appreciate the vibrant cobalt blue design of Jacques Majorelle. In the afternoon, explore the hidden workshops of the Medina's souks, meeting spice merchants, leather craftsmen, and weavers. Learn the art of tea brewing and carpet haggling from a local shop owner before ending your tour with a relaxing traditional Hammam spa session."
      }
],
    included: ["Full-day private guided medina walking tour with licensed historian","Skip-the-line entrance tickets to Bahia Palace and Majorelle Gardens","1 traditional Hammam & massage spa session (1.5 hours)","Rooftop dinner overlooking Jemaa el-Fnaa","Fresh mint tea and pastry tastings"],
    excluded: ["Accommodations (can be arranged upon request)","Daily lunches and personal purchases","Tips for local guide and spa staff"],
    accommodation: "Riad stays can be added (we partner with luxury properties in the medina).",
    transport: "Walking tour (walking distance within the medina is flat but active). Private taxi transfer to Majorelle."
  },
  {
    slug: "atlas-valleys",
    title: "High Atlas & Berber Villages",
    region: "Mountains",
    days: "2 days",
    price: "Price on Request",
    image: atlas,
    summary: "Hike terraced valleys around Imlil and Ourika, share mint tea with host families and stay in a mountain guesthouse.",
    highlights: ["Guided valley hike","Berber home lunch","Waterfalls of Setti Fatma"],
    itinerary: [
      {
            "day": 1,
            "title": "Imlil Valley Trekking & Village Homestay",
            "description": "Depart Marrakech for the foothills of the High Atlas. Arrive in the alpine village of Imlil (1,740m), the gateway to Mount Toubkal. Set off on a scenic 3-hour hike through terraced walnut groves, stone villages. Share a homemade couscous lunch in a traditional clay house with a local family. In the evening, check into an authentic mountain lodge overlooking the snow-capped peaks and relax with mint tea on the panoramic terrace."
      },
      {
            "day": 2,
            "title": "Ourika Valley Exploration & Waterfalls",
            "description": "Drive to the lush Ourika Valley, famous for its red-clay mountains and running rivers. Hike to the famous seven waterfalls of Setti Fatma with a local mountain guide. Visit a women's argan oil cooperative to see how argan nuts are hand-pressed. Return to Marrakech in the late afternoon, passing through the beautiful Agafay Desert stone plains."
      }
],
    included: ["Private transport from/to Marrakech in a modern A/C van","Licensed Atlas mountain trekking guide","1 night in a panoramic Berber guesthouse (dinner & breakfast included)","Traditional home-cooked lunch with a local family on Day 1","Mules for carrying gear/luggage if needed during the walk"],
    excluded: ["Beverages and bottled water","Tips for mountain guide and guesthouse staff","Personal hiking gear (sturdy shoes recommended)"],
    accommodation: "1 night in an authentic Berber Kasbah/guesthouse with mountain views.",
    transport: "Private modern passenger van with driver. Active walking/hiking on paths."
  },
  {
    slug: "chefchaouen-blue",
    title: "Chefchaouen, the Blue Pearl",
    region: "North",
    days: "2 days",
    price: "Price on Request",
    image: chefchaouen,
    summary: "Wander cobalt alleys in the Rif Mountains, photograph the medina at first light and hike to the Spanish Mosque.",
    highlights: ["Sunrise photo walk","Rif mountain viewpoint","Artisan workshops"],
    itinerary: [
      {
            "day": 1,
            "title": "Blue Medina Explorer & Spanish Mosque Sunset",
            "description": "Arrive in Chefchaouen, tucked between two peaks of the Rif Mountains. Begin exploring the medina's famous blue-washed streets, learning why the houses were painted blue. Visit the Kasbah fortress in Outa el-Hammam square. In the late afternoon, take a gentle 30-minute hike up to the Spanish Mosque on the opposite hill to watch the sun sink behind the blue valley, painting the mountains in orange and purple tones."
      },
      {
            "day": 2,
            "title": "Sunrise Photo Walk & Ras El Maa Spring",
            "description": "Rise early for a quiet photo walk before the souks open and day-trippers arrive. Capture the famous blue steps and doors in the soft morning light. Walk up to the mountain spring of Ras El Maa to see locals washing carpets and drinking fresh water. Visit local weaving workshops to see traditional striped blankets being made before your afternoon return transfer."
      }
],
    included: ["Private transport from Fes, Tangier, or Marrakech","Licensed local guide for Medina tour (3 hours)","1 night in a charming blue Riad (breakfast included)","Entrance tickets to the Kasbah Museum"],
    excluded: ["Lunches, dinners, and drinks","Tips for guides and drivers","Local personal guide for Spanish Mosque hike (easy trail, self-guided)"],
    accommodation: "1 night in a boutique, blue-decorated traditional Riad in the medina.",
    transport: "Private passenger van with A/C and private driver."
  },
  {
    slug: "fes-heritage",
    title: "Fes: Craft & Heritage",
    region: "Imperial city",
    days: "2 days",
    price: "Price on Request",
    image: fes,
    summary: "The world's oldest medina, the Chouara tanneries, Al-Qarawiyyin and a hands-on session with master artisans.",
    highlights: ["Tannery terraces","Pottery workshop","Andalusian dinner"],
    itinerary: [
      {
            "day": 1,
            "title": "Fes el-Bali Historic Walking Tour",
            "description": "Step back in time to the 9th century in Fes el-Bali, the largest car-free urban area in the world. Visit the magnificent Al-Qarawiyyin University (oldest in the world) and the ornate Bou Inania Madrasa. Stand on a terrace overlooking the Chouara Tanneries to watch workers dye leather in giant stone vats using century-old methods. Enjoy a traditional Fassi dinner inside a restored palace with Andalusian live lute music."
      },
      {
            "day": 2,
            "title": "Pottery Workshops & Golden Royal Gates",
            "description": "Visit the golden gates of the Royal Palace (Dar al-Makhzen) and the Mellah. Head to the pottery and mosaic cooperative in the outskirts to see master artisans shape clay on wheels and hand-cut zellige tiles. Learn the secret geometry of tile making in a hands-on session. Conclude your trip with a panoramic sunset view of the entire city from the Marinid Tombs."
      }
],
    included: ["Private licensed local guide for a full-day historical Medina tour","Entrance tickets to Bou Inania Madrasa and tanneries terrace","Interactive pottery and zellige making class","Traditional 3-course dinner in a historic Riad palace","Private hotel pickup and drop-off in Fes"],
    excluded: ["Accommodations (can be booked extra)","Daily lunches, personal shopping, and gratuities"],
    accommodation: "Riad partners available (historical riads with beautiful inner courtyards).",
    transport: "Medina walking tour (active walking in tight alleys). Air-conditioned vehicle for outer workshop visits."
  },
  {
    slug: "essaouira-coast",
    title: "Essaouira & Atlantic Coast",
    region: "Coast",
    days: "1 day",
    price: "Price on Request",
    image: essaouira,
    summary: "Sea breeze, ramparts, blue fishing boats and grilled sardines — with an argan cooperative stop on the way.",
    highlights: ["Medina ramparts","Fresh seafood lunch","Argan cooperative visit"],
    itinerary: [
      {
            "day": 1,
            "title": "Marrakech to Essaouira: Argan & Atlantic Breezes",
            "description": "Depart Marrakech at 8:00 AM heading west. Cross flat plains dotted with argan trees, stopping to spot the famous tree-climbing goats. Visit a local women's cooperative producing pure cosmetic argan oil. Arrive in Essaouira (formerly Mogador), a relaxed blue-and-white seaside town. Explore the stone ramparts, watch fishermen load blue wooden boats in the port, and enjoy a lunch of fresh grilled sardines and calamari directly on the harbor. Wander the laid-back medina before returning to Marrakech in the evening."
      }
],
    included: ["Private transport from Marrakech in a comfortable A/C vehicle","English/French speaking driver-guide","Argan oil cooperative tour and tasting","Guided orientation walk of the ramparts and medina (2 hours)","Fresh seafood lunch at the port harbor stalls"],
    excluded: ["Personal purchases (wood crafts, spices, silver jewelry)","Tips for driver and local helpers","Drinks and beverages"],
    accommodation: "Day trip (no overnight stay included. Riad stays in Essaouira can be added).",
    transport: "Private air-conditioned Toyota Prado or luxury van. Medina walking is flat and easy."
  },
  {
    slug: "from-marrakech-relaxing-villa-pool-day-pass-with-moroccan-lunch",
    title: "From Marrakech: Relaxing Villa Pool Day Pass with Moroccan Lunch",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/March2026/Vkbflyi9JjvwOY7LFhOB_480_322.png",
    summary: "Escape the hustle and bustle of Marrakech with a relaxing day pass at a peaceful villa located just 20 kilometers from the city. Nestled in a serene natural setting with beautiful views of the",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Escape the hustle and bustle of Marrakech with a relaxing day pass at a peaceful villa located just 20 kilometers from the city. Nestled in a serene natural setting with beautiful views of the Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "ait-ben-haddou-ouarzazate-day-trip-from-marrakech-unesco-kasbah",
    title: "Ait Ben Haddou & Ouarzazate Day Trip from Marrakech — UNESCO Kasbah",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: aitbenhaddou,
    summary: "The road south of Marrakech is one of the great drives in Africa. Within an hour of leaving your hotel, the red city gives way to the rising ridges of the High Atlas — and from that moment, the",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "The road south of Marrakech is one of the great drives in Africa. Within an hour of leaving your hotel, the red city gives way to the rising ridges of the High Atlas — and from that moment, the Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "casablanca-day-trip-from-marrakech-hassan-ii-mosque-city-tour",
    title: "Casablanca Day Trip from Marrakech — Hassan II Mosque & City Tour",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/January2023/jkYI1CmJAmdabhf0faWU_480_322.jpg",
    summary: "Casablanca is not what most people expect. There is no Rick's Café from the film (or rather, there is now — reconstructed for tourists), but there is something more interesting: the most",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Casablanca is not what most people expect. There is no Rick's Café from the film (or rather, there is now — reconstructed for tourists), but there is something more interesting: the most Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "day-trip-to-agadir-from-marrakech",
    title: "Day trip to Agadir from Marrakech",
    region: "Coast",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/September2024/pRG3rYjnZoQaUWXNqrdg_480_322.png",
    summary: "The trip starts at 7:30 am, to take the road to the city of Agadir and enjoy the scenery along the way. After about an hour and a half, we will make the first stop to have a break and have breakfast t",
    highlights: ["Historic coastal ports","Seaside ramparts walk","Fresh seafood lunch"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "The trip starts at 7:30 am, to take the road to the city of Agadir and enjoy the scenery along the way. After about an hour and a half, we will make the first stop to have a break and have breakfast t Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "ouzoud-waterfalls-day-trip-from-marrakech-boat-ride-barbary-monkeys",
    title: "Ouzoud Waterfalls Day Trip from Marrakech — Boat Ride & Barbary Monkeys",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/June2023/w2wvSOf4nrJX3BYRT9eB_480_322.png",
    summary: "Two and a half hours north-east of Marrakech, the Ouzoud Waterfalls drop 110 metres through three tiers of red ochre rock into a turquoise basin surrounded by ancient olive groves. They are the highes",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Two and a half hours north-east of Marrakech, the Ouzoud Waterfalls drop 110 metres through three tiers of red ochre rock into a turquoise basin surrounded by ancient olive groves. They are the highes Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "excursion-to-asni-imlil-with-a-delicious-lunch-at-kasbah-toubkal",
    title: "Excursion to Asni & Imlil With a Delicious Lunch at Kasbah Toubkal",
    region: "Mountains",
    days: "1 day",
    price: "Price on Request",
    image: atlasImage,
    summary: "A full enjoying private five stars day trip to the Imlil valley mountain region. Depart from Marrakech in the morning and head to the Atlas Mountains. Our driver will take you to see the most impressi",
    highlights: ["Scenic Atlas valleys","Berber village visit","Traditional home lunch"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "A full enjoying private five stars day trip to the Imlil valley mountain region. Depart from Marrakech in the morning and head to the Atlas Mountains. Our driver will take you to see the most impressi Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "day-excursion-to-kasbah-telouat-kasbah-ait-ben-haddou",
    title: "Day Excursion to Kasbah Telouat & Kasbah Ait Ben Haddou",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: aitbenhaddou,
    summary: "Departure from Marrakech through the High Atlas to the Kasbah of Telouet, which is now paved for better accessibility. This Kasbah is distant, far from the main road of Marrakech, and served as a pala",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Departure from Marrakech through the High Atlas to the Kasbah of Telouet, which is now paved for better accessibility. This Kasbah is distant, far from the main road of Marrakech, and served as a pala Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "grand-tour-to-morocco-from-marrakech-to-tangier-for-7-days",
    title: "Grand Tour To Morocco From Marrakech To Tangier for 7 days",
    region: "Imperial city",
    days: "7 days",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/May2023/MMBnaewNyDuW08q2hvt5_480_322.png",
    summary: "Day 1: Arrival in Marrakech: Arrival in Marrakech and meeting with the driver and transport to the hotel. Installation at the hotel. Dinner at the hotel, If the arrival is very late (after 22:00) a co",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Exploration Day 4",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 5,
            "title": "Exploration Day 5",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 6,
            "title": "Exploration Day 6",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 7,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "3-days-desert-merzouga-days-trip-from-marrakech",
    title: "3 days Desert Merzouga days Trip from Marrakech",
    region: "Desert",
    days: "3 days",
    price: "Price on Request",
    image: desertImage,
    summary: "Escape the busy streets of Marrakech’s Medina for the stark beauty of the desert during this 3-day excursion to Merzouga and Erg Chebbi. Cross through the Atlas Mountains via the stunning Tizi-n",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "private-merzouga-desert-tour-3-days",
    title: "Private Merzouga desert tour 3 days",
    region: "Desert",
    days: "3 days",
    price: "Price on Request",
    image: desertImage,
    summary: "During these 3-days Merzouga desert excursion, our driver will pick you up from your hotel in Marrakech. for an adventure through the magnificent Atlas Mountains and the Tichka Pass (2260 m), offering",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "private-2-days-desert-trip-to-zagora",
    title: "Private 2 Days Desert Trip to Zagora",
    region: "Desert",
    days: "2 days",
    price: "Price on Request",
    image: desertImage,
    summary: "Live the life of a Berber for one night on a 2 days desert safari in Zagora and the Draa Valley of Marrakech. Explore the shifting sand dunes on the back of a camel, sleep under a starry sky, and foll",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "4-days-desert-tour-in-morocco",
    title: "4 Days Desert Tour in Morocco",
    region: "Desert",
    days: "4 days",
    price: "Price on Request",
    image: desertImage,
    summary: "Let's go to the discovery of the region of the blue men of the desert. Morocco reveals its wild nature to us through the lunar landscapes and the pre-Saharan routes, let us dive into its atmospheres i",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "trip-2-days-to-the-gorgeous-city-essaouira-mogador",
    title: "Trip 2 Days to The Gorgeous City Essaouira (Mogador)",
    region: "Coast",
    days: "2 days",
    price: "Price on Request",
    image: essaouiraImage,
    summary: "Change the mood with a two days tour from Marrakech to the blue, musical, and calm city of Essaouira. Looking for a moment with your family or friends and head it to an amazing calm and enjoyable 2 da",
    highlights: ["Historic coastal ports","Seaside ramparts walk","Fresh seafood lunch"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "ouarzazate-kasbah-ait-ben-haddou-oasis-fint-2-days-tour",
    title: "Ouarzazate, Kasbah Ait ben haddou & Oasis Fint 2 days Tour",
    region: "Imperial city",
    days: "2 days",
    price: "Price on Request",
    image: aitbenhaddou,
    summary: "Ouarzazate is a city out of the bowels of the earth, in the middle of the desert in the south of the Kingdom, with a variety of decorations as elusive as breathtaking, burning sand, snow-capped peaks,",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "ouzoud-waterfalls-and-iminifri-2-days-excursion",
    title: "Ouzoud Waterfalls and Iminifri 2 Days Excursion",
    region: "Imperial city",
    days: "2 days",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/June2020/piAdMPs5oXMZ3DU9G1fX_480_322.jpg",
    summary: "Go to adventure travel to the Atlas mountains with a comfortable stay at a natural area, enjoy the moment for the seekers of discovering and also create some fascinating moments with our driver during",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "5-days-moroccan-desert-trip-experience",
    title: "5 days Moroccan Desert Trip Experience",
    region: "Desert",
    days: "5 days",
    price: "Price on Request",
    image: desertImage,
    summary: "The five days tour in Morocco will pick you up from your accommodation to live one of the moments that you will never forget, packed and organized in this tour with a professional driver and passing t",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Exploration Day 4",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 5,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "2-days-toubkal-mountain-climb",
    title: "2 Days Toubkal Mountain Climb",
    region: "Mountains",
    days: "2 days",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/June2020/5OcIGZ3KFGlJczWga1G0_480_322.jpg",
    summary: "Embark on an invigorating journey to Toubkal National Park. This enriching experience involves trekking through picturesque valleys, climbing to the summit of Toubkal, and absorbing the unique culture",
    highlights: ["Scenic Atlas valleys","Berber village visit","Traditional home lunch"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "walking-on-the-atlas-asni-imlil-2-days",
    title: "Walking on the Atlas Asni & Imlil 2 days",
    region: "Mountains",
    days: "2 days",
    price: "Price on Request",
    image: atlasImage,
    summary: "Live an adventurous moment from Marrakech to the Atlas Mountains, walking and discovering the hidden beauty of Imlil with a professional and local guide. Take the road passing from the wild nature of&",
    highlights: ["Scenic Atlas valleys","Berber village visit","Traditional home lunch"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "imperial-cities-3-days-trip-to-chefchaouen",
    title: "Imperial Cities 3 Days Trip to Chefchaouen",
    region: "North",
    days: "3 days",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/June2020/x5HJlq45ZOWQg1oZzCf3_480_322.jpg",
    summary: "Day 1: Marrakech, Casablanca, Rabat, Fes: Travel through the Atlas Mountains Depart from Marrakech and embark on a scenic journey through the Atlas Mountains. Along the way, keep an eye out for the pl",
    highlights: ["Blue-washed medina lanes","Panoramic Spanish mosque","Local mountain air"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the North region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "marrakech-one-day-excursion-from-agadir",
    title: "Marrakech One Day Excursion from Agadir",
    region: "Coast",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/April2020/gS0bDYupI3f1woLQw8vD_480_322.jpg",
    summary: "Go deep into the culture from sea to traditional and fascinating architecture, this tour will offer you the opportunity to see different spots and cultures in one day trip. Departure from Agadir the A",
    highlights: ["Historic coastal ports","Seaside ramparts walk","Fresh seafood lunch"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Go deep into the culture from sea to traditional and fascinating architecture, this tour will offer you the opportunity to see different spots and cultures in one day trip. Departure from Agadir the A Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "merzouga-desert-trip-4-days-from-agadir",
    title: "Merzouga Desert Trip 4 Days From Agadir",
    region: "Desert",
    days: "4 days",
    price: "Price on Request",
    image: desertImage,
    summary: "Day 1: Agadir – Taroudant – Taliouine – Tazenakht – Zagora Embark on an exceptional road trip from the Atlantic Ocean towards the gateway to the Moroccan desert, culmina",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "casablanca-private-city-tour",
    title: "Casablanca Private City Tour",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/May2020/zd0J1PfCM1DzqdCQGVFi_480_322.jpg",
    summary: "Casablanca is the largest city in the Maghreb region and the eighth-largest in the Arab world. Casablanca is Morocco's chief port and one of the largest financial centers in Africa. Located on Morocc",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Casablanca is the largest city in the Maghreb region and the eighth-largest in the Arab world. Casablanca is Morocco's chief port and one of the largest financial centers in Africa. Located on Morocc Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "private-day-trip-to-marrakech-from-casablanca-with-lunch",
    title: "Private Day Trip to Marrakech from Casablanca with lunch",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/June2020/hu1SAJFuuVwTB1m6m60O_480_322.jpg",
    summary: "Marrakech, the former imperial city of western Morocco, and a major economic center housing mosques, palaces and gardens. The medina is a fortified and densely populated medieval city dating from the",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Marrakech, the former imperial city of western Morocco, and a major economic center housing mosques, palaces and gardens. The medina is a fortified and densely populated medieval city dating from the Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "private-day-trip-to-fez-from-casablanca",
    title: "Private Day Trip to Fez from Casablanca",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/May2020/TFcFfjcY09OYP1xwE182_480_322.jpg",
    summary: "Visit the famous historical city of Fez with a professional guide, the visit will include the major and famous places like Bab Boujloud, Al Karaouine University, and other sites. Enjoy the amazing arc",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Visit the famous historical city of Fez with a professional guide, the visit will include the major and famous places like Bab Boujloud, Al Karaouine University, and other sites. Enjoy the amazing arc Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "private-day-trip-to-rabat-from-casablanca",
    title: "Private Day Trip to Rabat from Casablanca",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/May2020/7bkRDKBA8P9iR7EFevoG_480_322.jpg",
    summary: "Rabat, the capital of Morocco, is built on the banks of the Bouregreg River and the Atlantic Ocean. It is known for its sites of interest, which illustrate both Islamic and French colonial heritage, n",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Rabat, the capital of Morocco, is built on the banks of the Bouregreg River and the Atlantic Ocean. It is known for its sites of interest, which illustrate both Islamic and French colonial heritage, n Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "private-desert-trip-merzouga-4-days-from-casablanca-in-half-board",
    title: "Private Desert Trip Merzouga 4 days from Casablanca in Half Board",
    region: "Desert",
    days: "4 days",
    price: "Price on Request",
    image: desertImage,
    summary: "Merzouga is a small Moroccan town in the Sahara Desert, near the Algerian border. It’s known as a gateway to Erg Chebbi, a huge expanse of sand dunes north of town. West of Merzouga, Dayet Srji",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "7-days-trip-to-the-imperial-cities-from-casablanca",
    title: "7 days trip to the imperial cities from Casablanca",
    region: "Imperial city",
    days: "7 days",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/May2020/ylAyA9cIATpeg5bp1TP6_480_322.jpg",
    summary: "Morocco in North Africa is a mystical land of extreme beauty. In this fascinating country, you will find endless beaches, lush, green agricultural plains, and majestic snow-capped mountains. In Moroc",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Exploration Day 4",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 5,
            "title": "Exploration Day 5",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 6,
            "title": "Exploration Day 6",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 7,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "fez-private-city-tour",
    title: "Fez Private City Tour",
    region: "Imperial city",
    days: "1 day",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/June2020/taqKnngw2OZI8Q2Pn9UA_480_322.jpg",
    summary: "Fez is a city in northeastern Morocco often considered the cultural capital of the country. It is mainly famous for the walled medina of Fez El Bali, with medieval Marinid architecture, bustling souks",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "Fez is a city in northeastern Morocco often considered the cultural capital of the country. It is mainly famous for the walled medina of Fez El Bali, with medieval Marinid architecture, bustling souks Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "3-day-desert-experience-from-fes-to-marrakech",
    title: "3-Day Desert Experience from Fes to Marrakech",
    region: "Desert",
    days: "1 day",
    price: "Price on Request",
    image: desertImage,
    summary: "From Fez to Marrakech passing through one of the fascinating wide deserts in Morocco to have a wonderful stay and live one of the best moments that you will never forget. Live the traditions and meet",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Excursion Highlights",
            "description": "From Fez to Marrakech passing through one of the fascinating wide deserts in Morocco to have a wonderful stay and live one of the best moments that you will never forget. Live the traditions and meet Your private driver-guide will coordinate the itinerary pace and ensure comfortable photo stops."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Day trip (no overnight stays).",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "fez-4-days-desert-tour-to-marrakech",
    title: "Fez 4 Days Desert Tour to Marrakech",
    region: "Desert",
    days: "4 days",
    price: "Price on Request",
    image: desertImage,
    summary: "1 Day: Fez – Azrou – Errachidia – Merzouga (Erg Chebbi ): The first stop will be at Azrou, where we will enjoy a discovering walk to enjoy the forest and the barbary monkeys. We will reach Midelt whic",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "fez-desert-tour-5-days-to-marrakech",
    title: "Fez Desert Tour 5 Days to Marrakech",
    region: "Desert",
    days: "5 days",
    price: "Price on Request",
    image: desertImage,
    summary: "1 Day: Fez – Azrou – Errachidia: The first stop will be at Azrou, where we will enjoy a discovering walk to enjoy the forest and the barbary monkeys. We will reach Midelt which is a small",
    highlights: ["Desert dunes trek","Camel caravan ride","Starlit camp campfire"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Exploration Day 4",
            "description": "Dive deeper into the Desert region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 5,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
  {
    slug: "trip-7-days-from-tanger-and-imperial-cities-to-marrakech",
    title: "Trip 7 DAYS from Tanger and Imperial cities to Marrakech",
    region: "Imperial city",
    days: "7 days",
    price: "Price on Request",
    image: "https://www.clickexcursions.co.uk/storage/excursions/May2023/G1hsC9ys3RDpV1QeVk80_480_322.png",
    summary: "Start your tour from your hotel/Riad and be ready to have an amazing 7 days. Day 1: Tangier - Chefchaouen: Today, we start our private Morocco tour and we depart for Chefchaouen, the blue city",
    highlights: ["Guided medina walking","Historic palace entries","Souks spice market"],
    itinerary: [
      {
            "day": 1,
            "title": "Departure & Scenic Drive",
            "description": "Depart from your hotel in Marrakech. Enjoy air-conditioned comfort as we cross beautiful valley vistas and historical stopovers."
      },
      {
            "day": 2,
            "title": "Exploration Day 2",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 3,
            "title": "Exploration Day 3",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 4,
            "title": "Exploration Day 4",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 5,
            "title": "Exploration Day 5",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 6,
            "title": "Exploration Day 6",
            "description": "Dive deeper into the Imperial city region. Custom activities, local walks, and vetted overnight boutique stays."
      },
      {
            "day": 7,
            "title": "Return Journey to Marrakech",
            "description": "Wake up to a scenic local morning. Capture final landscape photos before boarding our private transport back to your accommodation."
      }
],
    included: ["Private A/C Toyota Prado or Mercedes van","Dedicated local driver-guide","Hotel pickup and drop-off"],
    excluded: ["Midday lunch meals & drinks","Local monuments entry tickets","Tips for guides & driver"],
    accommodation: "Vetted boutique riad / desert camp stays.",
    transport: "Private air-conditioned fleet standard."
  },
];
