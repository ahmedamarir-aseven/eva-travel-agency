import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, BookOpen, ChevronRight, Check, ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { guidebooks } from "@/data/guidebooks";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/guidebook/$slug")({
  loader: ({ params }) => {
    const guidebook = guidebooks.find((g) => g.slug === params.slug);
    if (!guidebook) {
      throw notFound();
    }
    return { guidebook };
  },
  component: GuidebookDetailsPage,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.guidebook.en.title} | Morocco Travel Guide — Eva Travel` },
      {
        name: "description",
        content: `${loaderData.guidebook.en.summary} Read expert planning advice from our local chauffeurs.`,
      },
    ],
  }),
});

function GuidebookDetailsPage() {
  const { guidebook } = Route.useLoaderData();
  const { t, language } = useLanguage();

  // Extract the translated content matching active language
  const content = guidebook[language] || guidebook.en;

  const guidebookLabel = language === "fr" ? "Guide de voyage" : language === "es" ? "Guía de viaje" : "Guidebook";
  const requestCustomLabel = language === "fr" ? "Demander du sur-mesure" : language === "es" ? "Solicitar viaje a medida" : "Request Custom Tailoring";

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="pb-28 animate-fade-in">
        {/* Visual Hero Header */}
        <section className="relative h-[440px] overflow-hidden">
          <img
            src={guidebook.image}
            alt={content.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-5 pb-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">
                {t("home")}
              </Link>
              <ChevronRight className="size-3 text-muted-foreground/60" />
              <span className="text-muted-foreground/80">{guidebookLabel}</span>
              <ChevronRight className="size-3 text-muted-foreground/60" />
              <span className="text-foreground/80 truncate max-w-[200px]">{content.title}</span>
            </nav>

            <span className="inline-block rounded-full bg-saffron/15 text-saffron border border-saffron/30 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider mb-3">
              {content.tag}
            </span>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl max-w-3xl leading-[1.1]">
              {content.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-semibold">
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {content.readTime}
              </span>
              <span className="h-3 w-px bg-border/60" />
              <span>{t("byLocalGuides")}</span>
            </div>
          </div>
        </section>

        {/* Core Layout Grid */}
        <section className="mx-auto max-w-6xl px-5 mt-12 grid gap-10 lg:grid-cols-[1.50fr_0.90fr]">
          {/* Article Column */}
          <article className="space-y-8">
            {/* Introduction paragraph with premium styling */}
            <p className="text-lg leading-relaxed text-foreground/90 font-medium italic border-l-2 border-saffron pl-5">
              {content.introduction}
            </p>

            {/* Render dynamically mapped paragraphs */}
            <div className="space-y-10 pt-4">
              {content.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground/95">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Conclusion summary */}
            <div className="border-t border-border/80 pt-8 mt-10">
              <p className="text-sm leading-relaxed text-muted-foreground/90 font-medium">
                {content.conclusion}
              </p>
            </div>

            {/* Back Button */}
            <div className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 hover:no-underline"
              >
                <ArrowLeft className="size-4" />
                {t("backToPlanning")}
              </Link>
            </div>
          </article>

          {/* Sticky Tips Checklist Sidebar */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border/80 bg-secondary/10 p-8 shadow-sm">
              <h3 className="font-display text-xl font-extrabold tracking-tight text-foreground mb-1">
                {content.tipsTitle}
              </h3>
              <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                {t("vettedTips")}
              </p>

              <ul className="space-y-4">
                {content.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-saffron/10 text-saffron mt-0.5 shrink-0">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground/90">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">
                  {t("customItin")}
                </p>
                <Button asChild variant="hero" className="w-full justify-center rounded-full font-semibold uppercase tracking-wider text-[10px] h-10 shadow-sm cursor-pointer">
                  <Link to="/contact">{requestCustomLabel}</Link>
                </Button>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
