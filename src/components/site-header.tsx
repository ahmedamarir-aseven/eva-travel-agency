import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/hooks/use-language";

const links = [
  { to: "/", key: "home" },
  { to: "/tours", key: "tours" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link text-sm font-semibold tracking-wide text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary [&.active]:nav-link-active"
              activeOptions={{ exact: l.to === "/" }}
            >
              {t(l.key)}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 border border-border/80 rounded-full p-0.5 bg-secondary/35 text-[9px] font-bold uppercase tracking-wider text-muted-foreground mr-1">
            {(["en", "fr", "es"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 rounded-full cursor-pointer transition-all duration-300 ${language === lang
                  ? "bg-primary text-primary-foreground font-extrabold shadow-sm"
                  : "hover:text-foreground"
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <Button
            asChild
            variant="hero"
            size="default"
            className="rounded-full font-semibold uppercase tracking-wider text-[11px] px-6 h-10 shadow-[var(--shadow-warm)]"
          >
            <Link to="/contact">{t("planTrip")}</Link>
          </Button>
        </nav>

        {/* Mobile Header Right */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Language Switcher for mobile */}
          <div className="flex items-center gap-1 border border-border/80 rounded-full p-0.5 bg-secondary/35 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
            {(["en", "fr", "es"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 rounded-full cursor-pointer transition-all duration-300 ${language === lang
                  ? "bg-primary text-primary-foreground font-extrabold shadow-sm"
                  : "hover:text-foreground"
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground [&.active]:text-primary"
                activeOptions={{ exact: l.to === "/" }}
              >
                {t(l.key)}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2 rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                {t("planTrip")}
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
