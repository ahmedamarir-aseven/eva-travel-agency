import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, MessageCircle, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { tours } from "@/data/tours";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Design Your Custom Morocco Itinerary | Eva Travel" },
      {
        name: "description",
        content:
          "Tell Eva Travel your travel dates and interests. Receive a tailored private Morocco itinerary with transparent pricing within 24 hours.",
      },
      { property: "og:title", content: "Design Your Custom Morocco Itinerary | Eva Travel" },
      {
        property: "og:description",
        content: "Get a tailored Morocco itinerary and quote within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { t, language } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  // Localized string variables
  const titleText = {
    en: "Let's design your Morocco",
    fr: "Concevons votre Maroc sur mesure",
    es: "Diseñemos tu viaje soñado por Marruecos"
  }[language] || "Let's design your Morocco";

  const subtitleText = {
    en: "Share a few details and one of our travel designers replies within 24 hours with a day-by-day route, handpicked stays and transparent pricing.",
    fr: "Partagez vos envies et l'un de nos créateurs de voyages vous répondra sous 24h avec un itinéraire détaillé, des hébergements de charme et un tarif clair.",
    es: "Comparte algunos detalles y uno de nuestros diseñadores de viajes responderá en 24 horas con una ruta diaria, riads seleccionados y presupuesto claro."
  }[language] || "Share a few details and one of our travel designers replies within 24 hours with a route, stays and a clear price.";

  const thankYouText = language === "fr" ? "Demande bien reçue !" : language === "es" ? "¡Solicitud Recibida!" : "Inquiry Received!";
  const successDesc = language === "fr"
    ? "Votre demande a été transmise à notre équipe de Marrakech. L'un de nos conseillers vous contactera par email dans les 24 heures avec une proposition personnalisée."
    : language === "es"
    ? "Su solicitud ha sido enviada a nuestro equipo en Marrakech. Uno de nuestros diseñadores se pondrá en contacto por email en menos de 24 horas."
    : "Your request is in the hands of our Marrakech travel design team. We will review your parameters and email you a customized day-by-day route proposal within 24 hours.";

  const tripOfInterest = language === "fr" ? "Voyage de référence" : language === "es" ? "Viaje de referencia" : "Tour of interest";
  const customOption = language === "fr" ? "Création 100% sur mesure" : language === "es" ? "Viaje 100% a medida" : "100% Custom Bespoke Route";
  const travelDates = language === "fr" ? "Dates estimées" : language === "es" ? "Fechas estimadas" : "Travel dates / Season";

  const tellUsLabel = language === "fr" ? "Détails de votre projet & envies particulières" : language === "es" ? "Detalles del viaje y preferencias" : "Tell us about your trip & special requests";
  const tellUsPlaceholder = language === "fr"
    ? "Exemple : Voyage en famille avec 2 enfants, préférence pour les piscines l'après-midi, nuit dans les dunes de l'Erg Chebbi, cours de cuisine à Fès..."
    : language === "es"
    ? "Ejemplo: Viaje en pareja, aniversario, paseo en dromedario al atardecer, riads tranquilos con encanto..."
    : "E.g. Traveling with 2 teenagers, would love a pool in Dades, keen on photography and an authentic cooking workshop...";

  const sendRequestBtn = language === "fr" ? "Envoyer ma demande de devis" : language === "es" ? "Enviar solicitud de presupuesto" : "Send Custom Trip Request";

  const talkToHuman = language === "fr" ? "Nos bureaux à Marrakech" : language === "es" ? "Nuestra oficina en Marrakech" : "Marrakech Operations Office";
  const officeHours = language === "fr" ? "Horaires d'ouverture" : language === "es" ? "Horario de atención" : "Office Hours";
  const officeDays = language === "fr" ? "Lun–Sam, 9h00–19h00 (GMT+1)" : language === "es" ? "Lun–Sáb, 9:00–19:00 (GMT+1)" : "Mon–Sat, 9:00–19:00 (GMT+1)";
  const whatsappSupport = language === "fr"
    ? "Ligne d'urgence WhatsApp 24h/24 et 7j/7 disponible en continu pendant votre voyage."
    : language === "es"
    ? "Línea de emergencia WhatsApp 24/7 disponible durante todo tu viaje."
    : "Dedicated 24/7 emergency WhatsApp dispatch for active travelers on the road.";

  const whatsappDirect = "https://wa.me/212524000000?text=Hello%20Eva%20Travel,%20I%20am%20planning%20a%20private%20trip%20to%20Morocco.";

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] animate-fade-in">
        <div>
          <ScrollReveal animation="fade-in">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 text-saffron border border-saffron/30 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="size-3" />
              {language === "fr" ? "Planification Sur Mesure" : "Tailored Planning"}
            </span>
            <h1 className="mt-2 font-display text-4xl leading-tight font-extrabold sm:text-5xl tracking-tight text-foreground">
              {titleText}
            </h1>
            <p className="mt-4 max-w-lg text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-medium">
              {subtitleText}
            </p>
          </ScrollReveal>

          {sent ? (
            <ScrollReveal animation="slide-up" delay={150}>
              <div className="mt-10 rounded-3xl p-8 border border-border/80 bg-card shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 mb-4">
                  <ShieldCheck className="size-6" />
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">{thankYouText}</h2>
                <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed">
                  {successDesc}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    variant="sand"
                    className="rounded-full font-semibold text-xs tracking-wide uppercase px-6 cursor-pointer"
                    onClick={() => setSent(false)}
                  >
                    {t("sendAnother")}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal animation="slide-up" delay={150}>
              <form
                onSubmit={handleSubmit}
                className="mt-8 grid gap-6 rounded-3xl p-7 sm:p-9 border border-border/80 bg-card shadow-sm transition-all hover:shadow-[var(--shadow-warm)]"
              >
                {/* Name & Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="name"
                      className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 ml-0.5"
                    >
                      {t("fullName")} *
                    </Label>
                    <Input id="name" name="name" required placeholder="Sara Bennani" className="h-11 text-xs" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="email"
                      className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 ml-0.5"
                    >
                      {t("emailAddr")} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sara@example.com"
                      className="h-11 text-xs"
                    />
                  </div>
                </div>

                {/* Tour & Dates */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="tour"
                      className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 ml-0.5"
                    >
                      {tripOfInterest}
                    </Label>
                    <select
                      id="tour"
                      name="tour"
                      className="h-11 rounded-xl border border-border/80 bg-background px-4 text-xs font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                      defaultValue={tours[0]!.slug}
                    >
                      <option value="custom">{customOption}</option>
                      {tours.map((t) => (
                        <option key={t.slug} value={t.slug}>
                          {t.title} ({t.days})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="dates"
                      className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 ml-0.5"
                    >
                      {travelDates}
                    </Label>
                    <Input id="dates" name="dates" placeholder="e.g. 12–20 October 2026" className="h-11 text-xs" />
                  </div>
                </div>

                {/* Preferred Travel Vibe & Accommodation Tier */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="vibe"
                      className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 ml-0.5"
                    >
                      {t("tripStylePreference")}
                    </Label>
                    <select
                      id="vibe"
                      name="vibe"
                      className="h-11 rounded-xl border border-border/80 bg-background px-4 text-xs font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                      defaultValue="sahara"
                    >
                      <option value="sahara">{t("styleGlamping")}</option>
                      <option value="culture">{t("styleCulture")}</option>
                      <option value="trek">{t("styleTrek")}</option>
                      <option value="coast">{t("styleCoast")}</option>
                      <option value="balanced">A Balanced Mix of Everything</option>
                    </select>
                  </div>

                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="tier"
                      className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 ml-0.5"
                    >
                      {t("stayTierPreference")}
                    </Label>
                    <select
                      id="tier"
                      name="tier"
                      className="h-11 rounded-xl border border-border/80 bg-background px-4 text-xs font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                      defaultValue="boutique"
                    >
                      <option value="boutique">{t("tierBoutique")}</option>
                      <option value="luxury">{t("tierLuxury")}</option>
                      <option value="royal">{t("tierRoyal")}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="grid gap-1.5">
                  <Label
                    htmlFor="message"
                    className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 ml-0.5"
                  >
                    {tellUsLabel}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={tellUsPlaceholder}
                    className="text-xs"
                  />
                </div>

                {/* Submit & Guarantee */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full sm:w-auto rounded-full font-bold uppercase tracking-wider text-[11px] px-8 h-12 shadow-[var(--shadow-warm)] hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer"
                  >
                    {sendRequestBtn}
                  </Button>
                  <p className="mt-3 text-[11px] text-muted-foreground flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-emerald-600 shrink-0" />
                    <span>{t("responseGuarantee")}</span>
                  </p>
                </div>
              </form>
            </ScrollReveal>
          )}
        </div>

        {/* Sidebar Info & WhatsApp */}
        <ScrollReveal animation="slide-left" delay={250}>
          <aside className="space-y-6">
            {/* WhatsApp Card */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 p-8 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white mb-4">
                <MessageCircle className="size-5" />
              </span>
              <h3 className="font-display text-xl font-bold text-foreground">
                WhatsApp Direct Consultation
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {t("urgentWhatsApp")}
              </p>
              <div className="mt-5">
                <a
                  href={whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-[11px] px-6 py-3 transition-colors shadow-sm"
                >
                  <MessageCircle className="size-4" />
                  <span>+212 5 24 00 00 00</span>
                </a>
              </div>
            </div>

            {/* Office Details Card */}
            <div className="rounded-3xl border border-border/80 bg-secondary/35 p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">{talkToHuman}</h3>
              <ul className="mt-6 space-y-4 text-xs">
                <li className="flex items-start gap-3.5">
                  <MapPin className="mt-0.5 size-4 text-saffron shrink-0" />
                  <span className="leading-relaxed text-muted-foreground/95">
                    Rue Ibn Aicha, Gueliz
                    <br />
                    Marrakech 40000, Morocco
                  </span>
                </li>
                <li className="flex items-center gap-3.5">
                  <Phone className="size-4 text-saffron shrink-0" />{" "}
                  <span className="text-muted-foreground/95">+212 5 24 00 00 00</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <Mail className="size-4 text-saffron shrink-0" />{" "}
                  <span className="text-muted-foreground/95">hello@evatravel.ma</span>
                </li>
              </ul>

              <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">{officeHours}</p>
                <p>{officeDays}</p>
                <p className="pt-2 text-primary font-medium">{whatsappSupport}</p>
              </div>
            </div>
          </aside>
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  );
}
