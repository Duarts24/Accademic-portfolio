import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ExternalLink,
  Bot,
  BookOpenText,
  BadgeCheck,
  Code2,
  Cpu,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Newspaper,
  Plane,
  Phone,
  Sun,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import {
  ABOUT_GALLERY,
  CONTENT,
  LANG_ORDER,
  type Lang,
} from "@/lib/portfolio-content";

import { ImageCarousel } from "@/components/ImageCarousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CARD_YEARS: Record<string, string> = {
  embera: "2024",
  colegios: "2024",
  gimnasio: "Actual",
  monitora: "Jun 2026",
  macmotus: "Mar 2026",
  tesis: "Jun 2026",
  proyectos: "Mar 2026",
  rredsi: "2023",
  vacaciones: "Jul 2026",
  arena: "2025",
  recreativo: "Sep 2026",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janny Duarte — Portafolio Académico" },
      {
        name: "description",
        content:
          "Portafolio académico de Janny Duarte, Ingeniera en Mecatrónica y Docente Extracurricular de Robótica: experiencia en laboratorio, tesis en mitigación de incendios con drones y competencia AERODESIGN MX.",
      },
      { property: "og:title", content: "Janny Duarte — Portafolio Académico" },
      {
        property: "og:description",
        content:
          "Ingeniera en Mecatrónica y docente de robótica. Biografía, formación, experiencia y certificaciones.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: portrait },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: portrait },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang");
    if (stored === "es" || stored === "en" || stored === "it") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const nextTheme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleLang = () => {
    const next =
      LANG_ORDER[(LANG_ORDER.indexOf(lang) + 1) % LANG_ORDER.length]!;
    setLang(next);
    window.localStorage.setItem("portfolio-lang", next);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-surface font-sans text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6">
          <span className="font-display font-semibold text-ocean-deep">
            {t.name}
          </span>
          <div className="flex items-center gap-8">
            <div className="hidden gap-8 sm:flex">
              {t.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-ocean-deep"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
              }
              title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
              className="rounded-full border border-ocean-deep/20 p-2 text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t.langAria}
              className="rounded-full border border-ocean-deep/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white"
            >
              {t.langLabel}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero — estilo CV */}
      <section className="bg-ocean-deep px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="size-[9.5rem] shrink-0 overflow-hidden rounded-md ring-2 ring-teal-light/60 sm:size-[11rem]">
              <img
                src={portrait}
                alt={t.portraitAlt}
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-widest text-teal-light">
                {t.heroKicker}
              </p>
              <h1 className="mt-2 font-display text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl lg:text-5xl">
                {t.name}
              </h1>
              <p className="mt-2 max-w-[46ch] text-pretty text-base font-medium text-zinc-300 sm:text-lg">
                {t.heroRole}
              </p>
              <div className="average-card mt-4 inline-flex items-center gap-3 rounded-md px-3 py-2">
                <GraduationCap className="size-5 shrink-0 text-teal-light" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-light">
                    {t.heroAverageLabel}
                  </p>
                  <p className="mt-0.5 text-lg font-semibold leading-none text-zinc-100">
                    4.1{" "}
                    <span className="text-xs font-normal text-zinc-400">
                      / 5.0
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-4 text-sm text-zinc-300 sm:grid-cols-2">
            <a
              href="tel:+57315652987"
              aria-label="Llamar al +57 315 652 0987"
              className="contact-info-item group flex min-w-0 items-center gap-3"
            >
              <Phone className="size-4 shrink-0 text-teal-light" />
              <span>+57 315 652 0987</span>
            </a>
            <a
              href="mailto:duartejanny24@gmail.com"
              aria-label="Enviar correo a duartejanny24@gmail.com"
              className="contact-info-item group flex min-w-0 items-center gap-3"
            >
              <Mail className="size-4 shrink-0 text-teal-light" />
              <span className="break-all">duartejanny24@gmail.com</span>
            </a>
            <div className="contact-info-item flex min-w-0 items-center gap-3">
              <MapPin className="size-4 shrink-0 text-teal-light" />
              <span>Dosquebradas, Risaralda</span>
            </div>
            <a
              href="https://www.linkedin.com/in/janny-duarte-4306a3391/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ver perfil de LinkedIn de Janny Duarte"
              className="contact-info-item group flex min-w-0 items-center gap-3"
            >
              <Linkedin className="size-4 shrink-0 text-teal-light" />
              <span>linkedin.com/in/janny-duarte</span>
            </a>
            <a
              href="https://scholar.google.com/citations?user=Ij47VD0AAAAJ&hl=es"
              target="_blank"
              rel="noreferrer"
              aria-label="Ver perfil de Google Scholar de Janny Duarte"
              className="contact-info-item group flex min-w-0 items-center gap-3"
            >
              <BookOpenText className="size-4 shrink-0 text-teal-light" />
              <span>Google Scholar</span>
            </a>
            <a
              href="https://orcid.org/my-orcid?orcid=0009-0001-2429-3448"
              target="_blank"
              rel="noreferrer"
              aria-label="Ver perfil ORCID de Janny Duarte"
              className="contact-info-item group flex min-w-0 items-center gap-3"
            >
              <BadgeCheck className="size-4 shrink-0 text-teal-light" />
              <span>ORCID: 0009-0001-2429-3448</span>
            </a>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section id="bio" className="bg-background px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="mb-4 font-display text-2xl font-medium text-ocean-deep">
                {t.bioTitle}
              </h2>
              <div className="h-1 w-12 bg-teal-light" />
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-[56ch] text-justify text-pretty text-lg leading-relaxed text-muted-foreground">
                {t.bioP1}
                <br />
                <br />
                {t.bioP2}
                <br />
                <br />
                {t.bioP3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studies / Formation */}
      <section id="formacion" className="bg-background px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="mb-2 font-display text-2xl font-medium text-ocean-deep">
                {t.studiesTitle}
              </h2>
              <div className="h-1 w-12 bg-teal-light" />
            </div>
            <div className="space-y-12 border-l border-border pl-8 lg:col-span-8">
              {t.studies.map((study) => (
                <div key={study.year} className="education-item relative">
                  <div
                    className={`absolute -left-[37px] top-1.5 size-4 rounded-full border-2 bg-background ${
                      study.accent === "teal"
                        ? "border-teal-light"
                        : "border-ocean-mid"
                    }`}
                  />
                  <h4 className="mb-1 text-sm font-semibold uppercase tracking-tight text-ocean-bright">
                    {study.year}
                  </h4>
                  <h3 className="text-xl font-medium text-ocean-deep">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{study.place}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="habilidades"
        className="border-y border-border/70 bg-surface px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-balance font-display text-3xl font-medium text-ocean-deep">
              {t.skillsTitle}
            </h2>
            <div className="mt-4 h-1 w-12 bg-teal-light" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.map((skill, index) => {
              const SkillIcon =
                [Cpu, Code2, Bot, Plane, GraduationCap, FileText][index] ?? Cpu;

              return (
                <article
                  key={skill.id}
                  className="portfolio-card group rounded-xl bg-card p-6 shadow-sm ring-1 ring-border/70"
                >
                  <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-ocean-deep/5 text-ocean-bright transition-colors group-hover:bg-teal-light/20">
                    <SkillIcon className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ocean-deep">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experiencia"
        className="border-y border-border/70 bg-surface px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-balance font-display text-3xl font-medium text-ocean-deep">
              {t.experienceTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.experiences.map((exp) => (
              <article
                key={exp.id}
                className="portfolio-card group overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/70"
              >
                <ImageCarousel
                  images={exp.images}
                  alt={exp.alt}
                  prevLabel={t.prevAria}
                  nextLabel={t.nextAria}
                />

                <div className="p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-ocean-bright">
                    {exp.period}
                  </span>
                  <h3 className="mb-3 mt-2 flex items-start justify-between gap-4 font-display text-lg font-medium text-ocean-deep">
                    {exp.title}
                    <span className="shrink-0 pt-1 font-sans text-xs font-semibold uppercase tracking-widest text-ocean-bright">
                      {CARD_YEARS[exp.id] ?? "Año"}
                    </span>
                  </h3>
                  <p className="line-clamp-3 text-pretty text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="details-button mt-4">
                        <span className="button-content">{t.detailsLabel}</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                      <DialogHeader>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-ocean-bright">
                          {exp.period}
                        </span>
                        <DialogTitle className="font-display text-xl font-medium text-ocean-deep">
                          {exp.title}
                        </DialogTitle>
                        <DialogDescription className="text-pretty text-left text-sm leading-relaxed text-muted-foreground">
                          {exp.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="overflow-hidden rounded-lg">
                        <ImageCarousel
                          images={exp.images}
                          alt={exp.alt}
                          prevLabel={t.prevAria}
                          nextLabel={t.nextAria}
                        />
                      </div>
                      {"modules" in exp && (
                        <div className="space-y-4 border-t border-border/70 pt-5">
                          {exp.modules.map((mod) => (
                            <div key={mod.name}>
                              <h4 className="text-xs font-semibold uppercase tracking-wide text-ocean-bright">
                                {mod.name}
                              </h4>
                              <ul className="mt-1.5 space-y-1">
                                {mod.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex gap-2 text-sm leading-snug text-muted-foreground"
                                  >
                                    <span className="mt-2 size-1 shrink-0 rounded-full bg-teal-light" />
                                    <span className="text-pretty">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section id="competencias" className="bg-background px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-balance font-display text-3xl font-medium text-ocean-deep">
              {t.competitionsTitle}
            </h2>
            <div className="mt-4 h-1 w-12 bg-teal-light" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.competitions.map((comp) => (
              <article
                key={comp.id}
                className="portfolio-card group overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/70"
              >
                <ImageCarousel
                  images={comp.images}
                  alt={comp.alt}
                  prevLabel={t.prevAria}
                  nextLabel={t.nextAria}
                />
                <div className="p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-ocean-bright">
                    {comp.period}
                  </span>
                  <h3 className="mb-3 mt-2 flex items-start justify-between gap-4 font-display text-lg font-medium text-ocean-deep">
                    {comp.title}
                    <span className="shrink-0 pt-1 font-sans text-xs font-semibold uppercase tracking-widest text-ocean-bright">
                      {CARD_YEARS[comp.id] ?? "Año"}
                    </span>
                  </h3>
                  <p className="text-pretty text-sm leading-normal text-muted-foreground">
                    {comp.intro}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="details-button mt-4">
                        <span className="button-content">{t.detailsLabel}</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                      <DialogHeader>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-ocean-bright">
                          {comp.period}
                        </span>
                        <DialogTitle className="font-display text-xl font-medium text-ocean-deep">
                          {comp.modalTitle}
                        </DialogTitle>
                        <DialogDescription className="text-pretty text-left text-sm leading-relaxed text-muted-foreground">
                          {comp.detail}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="overflow-hidden rounded-lg">
                        <ImageCarousel
                          images={comp.images}
                          alt={comp.alt}
                          prevLabel={t.prevAria}
                          nextLabel={t.nextAria}
                        />
                      </div>
                      <div className="space-y-4 border-t border-border/70 pt-5">
                        {comp.modules.map((mod) => (
                          <div key={mod.name}>
                            <h4 className="text-xs font-semibold uppercase tracking-wide text-ocean-bright">
                              {mod.name}
                            </h4>
                            <ul className="mt-1.5 space-y-1">
                              {mod.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-2 text-sm leading-snug text-muted-foreground"
                                >
                                  <span className="mt-2 size-1 shrink-0 rounded-full bg-teal-light" />
                                  <span className="text-pretty">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About me — carrusel horizontal a todo lo ancho */}
      <section
        id="sobre-mi"
        className="border-y border-border/70 overflow-hidden bg-surface py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="mb-4 font-display text-2xl font-medium text-ocean-deep">
                {t.aboutTitle}
              </h2>
              <div className="h-1 w-12 bg-teal-light" />
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-[56ch] text-justify text-pretty text-lg leading-relaxed text-muted-foreground">
                {t.aboutP1}
                <br />
                <br />
                {t.aboutP2}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 w-full">
          <div className="flex w-max animate-[marquee-x_40s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
            {[...ABOUT_GALLERY, ...ABOUT_GALLERY].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={t.aboutAlt}
                width={800}
                height={600}
                loading="lazy"
                className="h-44 w-auto shrink-0 rounded-xl object-cover shadow-sm ring-1 ring-border/70 sm:h-56"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Media / Press */}
      <section id="medios" className="bg-background px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-balance font-display text-3xl font-medium text-ocean-deep">
              {t.mediaTitle}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-ocean-bright">
              {t.mediaSubtitle}
            </p>
            <div className="mt-4 h-1 w-12 bg-teal-light" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.mediaItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="portfolio-card group flex flex-col items-start overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/70"
              >
                <div className="w-full overflow-hidden border-b border-border/70 bg-muted/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex w-full flex-col p-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-ocean-deep/5">
                    <Newspaper className="size-5 text-ocean-bright" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-ocean-bright">
                    {item.source}
                  </span>
                  <h3 className="mt-2 text-pretty font-display text-lg font-medium text-ocean-deep">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep underline underline-offset-4">
                    {t.mediaLinkLabel}
                    <ExternalLink className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section
        id="certificados"
        className="border-t border-border/70 bg-surface px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 font-display text-2xl font-medium text-ocean-deep">
            {t.certificatesTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.certificates.map((cert) => (
              <Dialog key={cert.name}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="portfolio-card flex flex-col items-start rounded-xl bg-card p-5 text-left shadow-sm ring-1 ring-border/70"
                  >
                    <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-ocean-deep/5">
                      <FileText
                        className={`size-5 ${
                          cert.dot === "bright"
                            ? "text-ocean-bright"
                            : "text-teal-light"
                        }`}
                      />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-ocean-bright">
                      {cert.year}
                    </span>
                    <h4 className="mt-1 text-pretty text-sm font-semibold text-ocean-deep">
                      {cert.name}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-ocean-deep underline underline-offset-4">
                      {t.certificateViewLabel}
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] sm:max-w-3xl">
                  <DialogHeader>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-ocean-bright">
                      {cert.year}
                    </span>
                    <DialogTitle className="text-pretty font-display text-lg font-medium text-ocean-deep">
                      {cert.name}
                    </DialogTitle>
                    <DialogDescription className="text-left text-sm text-muted-foreground">
                      {cert.issuer}
                    </DialogDescription>
                  </DialogHeader>
                  <iframe
                    src={cert.file}
                    title={cert.name}
                    className="h-[65vh] w-full rounded-lg border border-border bg-muted"
                  />
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start rounded-full border border-ocean-deep/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep transition-colors hover:bg-ocean-deep hover:text-white"
                  >
                    {t.certificateViewLabel}
                  </a>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-ocean-deep px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-zinc-100">{t.name}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
              {t.footerTagline}
            </p>
          </div>
          <div className="flex gap-6">
            {t.footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest text-teal-light transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
