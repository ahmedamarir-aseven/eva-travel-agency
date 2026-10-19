import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/hooks/use-language";

export function SiteFooter() {
  const { t, language } = useLanguage();

  const desc = {
    en: "A Morocco-based agency crafting private tours, desert camps and cultural journeys since 2014.",
    fr: "Une agence basée au Maroc qui crée des circuits privés, des camps dans le désert et des voyages culturels depuis 2014.",
    es: "Una agencia con sede en Marruecos que crea circuitos privados, campamentos en el desierto y viajes culturales desde 2014."
  }[language] || "A Morocco-based agency crafting private tours, desert camps and cultural journeys since 2014.";

  const explore = {
    en: "Explore",
    fr: "Explorer",
    es: "Explorar"
  }[language] || "Explore";

  const allTours = {
    en: "All tours",
    fr: "Tous les circuits",
    es: "Todos los circuitos"
  }[language] || "All tours";

  const popular = {
    en: "Popular",
    fr: "Populaire",
    es: "Popular"
  }[language] || "Popular";

  const popular1 = {
    en: "Sahara desert camps",
    fr: "Camps de désert du Sahara",
    es: "Campamentos del desierto del Sahara"
  }[language] || "Sahara desert camps";

  const popular2 = {
    en: "Marrakech city breaks",
    fr: "Séjours urbains à Marrakech",
    es: "Escapadas urbanas en Marrakech"
  }[language] || "Marrakech city breaks";

  const popular3 = {
    en: "Atlas Mountains treks",
    fr: "Randonnées dans l'Atlas",
    es: "Caminatas en las montañas del Atlas"
  }[language] || "Atlas Mountains treks";

  const popular4 = {
    en: "Atlantic coast escapes",
    fr: "Escapades sur la côte atlantique",
    es: "Escapadas a la costa atlántica"
  }[language] || "Atlantic coast escapes";

  const getInTouch = {
    en: "Get in touch",
    fr: "Contactez-nous",
    es: "Contacto"
  }[language] || "Get in touch";

  const rights = {
    en: "All rights reserved.",
    fr: "Tous droits réservés.",
    es: "Todos los derechos reservados."
  }[language] || "All rights reserved.";

  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {desc}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">{explore}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/tours" className="hover:text-primary">
                {allTours}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">{popular}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{popular1}</li>
            <li>{popular2}</li>
            <li>{popular3}</li>
            <li>{popular4}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">{getInTouch}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> Gueliz, Marrakech
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" /> +212 5 24 00 00 00
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" /> hello@evatravel.ma
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Eva Travel. {rights}
      </div>
    </footer>
  );
}
