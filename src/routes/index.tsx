import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Brain,
  Building2,
  CalendarDays,
  Handshake,
  Heart,
  Home,
  KeyRound,
  MessageCircle,
  Maximize,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import heroImg from "@/assets/hero-apartment.jpg";
import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import investImg from "@/assets/invest.jpg";
import agentImg from "@/assets/agent.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nira Brokers — Marketplace inmobiliario con IA" },
      {
        name: "description",
        content:
          "Compra, alquila e invierte en propiedades con asesoramiento humano e inteligencia artificial. Departamentos, casas y oficinas verificadas.",
      },
      { property: "og:title", content: "Nira Brokers — Marketplace inmobiliario con IA" },
      {
        property: "og:description",
        content:
          "Propiedades verificadas, asesores expertos y un asistente inteligente que encuentra tu próximo hogar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Inicio", "Propiedades", "Nosotros", "Inversiones", "Servicios", "Blog", "Contacto"];

const pillars = [
  { icon: Users, title: "Atención personalizada", text: "Cada cliente recibe asesoramiento según sus necesidades reales." },
  { icon: Brain, title: "Tecnología inteligente", text: "Usamos IA para acelerar la búsqueda y mejorar cada recomendación." },
  { icon: ShieldCheck, title: "Propiedades verificadas", text: "Trabajamos con información actualizada y oportunidades reales." },
  { icon: Handshake, title: "Acompañamiento integral", text: "Desde la primera consulta hasta la firma de la escritura." },
];

const steps = [
  { icon: MessageCircle, text: "Contanos qué necesitás." },
  { icon: Search, text: "Analizamos todas las propiedades disponibles." },
  { icon: Home, text: "Recibí únicamente las mejores opciones." },
  { icon: CalendarDays, text: "Coordinamos la visita con un asesor." },
  { icon: KeyRound, text: "Te acompañamos hasta concretar la operación." },
];

const properties = [
  { img: prop1, tag: "Venta", title: "Departamento en Palermo Hollywood", beds: 2, baths: 2, m2: 85, price: "USD 245.000" },
  { img: prop2, tag: "Alquiler", title: "Departamento en Belgrano R", beds: 1, baths: 1, m2: 60, price: "USD 650 / mes" },
  { img: prop3, tag: "Venta", title: "Casa en Barrio Privado Nordelta", beds: 4, baths: 3, m2: 240, price: "USD 580.000" },
  { img: prop4, tag: "Venta", title: "Oficina en Puerto Madero", beds: 1, baths: 1, m2: 60, price: "USD 210.000" },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-center leading-none">
            <div className="font-display text-2xl tracking-[0.35em] text-foreground">NIRA</div>
            <div className="mt-1 text-[0.55rem] tracking-[0.4em] text-muted-foreground">BROKERS</div>
          </div>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n, i) => (
              <a
                key={n}
                href="#"
                className={`text-sm transition-colors hover:text-primary ${i === 0 ? "border-b border-primary pb-1 text-primary" : "text-foreground/80"}`}
              >
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#asesor"
            className="hidden items-center gap-2 rounded-full border border-primary/40 bg-card/70 px-5 py-2.5 text-sm text-primary backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            <MessageCircle className="size-4" /> Hablar con el asesor IA
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="font-display text-5xl leading-[1.05] md:text-6xl">
              Encontrar la <span className="text-primary">propiedad ideal</span> ya no depende de la
              suerte. Depende de la <span className="text-primary">inteligencia</span>.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              En Nira Brokers combinamos la experiencia de nuestros asesores con inteligencia
              artificial para ayudarte a encontrar la propiedad ideal de forma más rápida, precisa y
              segura.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#propiedades"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Comenzar ahora <ArrowRight className="size-4" />
              </a>
              <a
                href="#propiedades"
                className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3 text-sm transition-colors hover:bg-secondary"
              >
                Ver propiedades
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { icon: Users, big: "+1.250", small: "Clientes satisfechos" },
                { icon: Building2, big: "+8 años", small: "de experiencia" },
                { icon: Star, big: "4.9", small: "en valoraciones" },
              ].map((s) => (
                <div key={s.small} className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <s.icon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{s.big}</span>
                    <span className="block text-xs text-muted-foreground">{s.small}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Living de un departamento moderno con vista a la ciudad"
              width={1600}
              height={1200}
              className="h-[520px] w-full rounded-sm object-cover"
            />
            <div
              id="asesor"
              className="mx-auto -mt-24 w-[92%] rounded-xl border border-border bg-card p-5 shadow-xl lg:absolute lg:right-6 lg:top-1/2 lg:mt-0 lg:w-80 lg:-translate-y-1/2"
            >
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <img
                  src={agentImg}
                  alt="Asesora de Nira Brokers"
                  width={1000}
                  height={800}
                  loading="lazy"
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Asesor IA</p>
                  <p className="flex items-center gap-1 text-xs text-primary">
                    <span className="size-1.5 rounded-full bg-primary" /> Nira Brokers
                  </p>
                </div>
              </div>
              <p className="mt-4 rounded-lg bg-secondary p-3 text-xs leading-relaxed text-secondary-foreground">
                Hola, soy el asistente inteligente de Nira Brokers. Estoy para ayudarte a encontrar
                la propiedad ideal. ¿Por dónde querés empezar?
              </p>
              <div className="mt-3 space-y-2">
                {[
                  { icon: Home, t: "Quiero comprar" },
                  { icon: KeyRound, t: "Quiero alquilar" },
                  { icon: Building2, t: "Soy inversor" },
                  { icon: MessageCircle, t: "Solo quiero consultar" },
                ].map((o) => (
                  <button
                    key={o.t}
                    type="button"
                    className="flex w-full items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-left text-xs transition-colors hover:border-primary hover:text-primary"
                  >
                    <o.icon className="size-3.5 text-primary" /> {o.t}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-full border border-border px-3 py-2">
                <input
                  placeholder="Escribí tu mensaje..."
                  className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
                />
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="label-eyebrow">Mucho más que una inmobiliaria</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Tecnología, experiencia y personas <span className="text-primary">a tu servicio</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Comprar o vender una propiedad es una de las decisiones más importantes de la vida.
              Por eso unimos personas, experiencia y tecnología para que tomes decisiones con
              información clara y acceso a las mejores oportunidades del mercado.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="border-l border-border pl-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_2.4fr] lg:items-center">
          <div>
            <p className="label-eyebrow">Encontrar una propiedad</p>
            <h2 className="mt-3 font-display text-4xl">nunca fue tan simple</h2>
          </div>
          <ol className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.text} className="text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-cream/25">
                  <s.icon className="size-5 text-olive-light" />
                </span>
                <p className="mt-4 text-sm text-olive-light">{i + 1}</p>
                <p className="mt-1 text-xs leading-relaxed text-cream/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Properties */}
      <section id="propiedades" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_3fr]">
          <div>
            <p className="label-eyebrow">Propiedades destacadas</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Oportunidades que te pueden <span className="text-primary">cambiar la vida</span>
            </h2>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              Ver todas las propiedades <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {properties.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 rounded-sm bg-primary px-2 py-1 text-[0.6rem] uppercase tracking-widest text-primary-foreground">
                    {p.tag}
                  </span>
                  <button
                    type="button"
                    aria-label="Guardar propiedad"
                    className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-card/90 text-primary"
                  >
                    <Heart className="size-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug">{p.title}</h3>
                  <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BedDouble className="size-3.5" /> {p.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="size-3.5" /> {p.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="size-3.5" /> {p.m2} m²
                    </span>
                  </div>
                  <p className="mt-4 border-t border-border pt-3 text-sm font-semibold">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Invest + relations */}
      <section className="grid lg:grid-cols-2">
        <div className="relative flex items-end p-10 lg:p-14">
          <img
            src={investImg}
            alt="Torres corporativas"
            width={1000}
            height={800}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative max-w-md text-cream">
            <h2 className="font-display text-3xl leading-tight">
              Invertir con información cambia el resultado
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-cream/75">
              Nuestros especialistas y herramientas de inteligencia artificial analizan el mercado
              para ayudarte a identificar oportunidades con mayor potencial de valorización.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-xs text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              Conocer oportunidades de inversión <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="grid items-center gap-8 bg-card p-10 sm:grid-cols-2 lg:p-14">
          <div>
            <p className="label-eyebrow">Más que operaciones inmobiliarias</p>
            <h2 className="mt-4 font-display text-3xl leading-tight">
              Construimos relaciones de largo plazo basadas en confianza, transparencia y
              resultados.
            </h2>
            <div className="mt-8 flex flex-wrap gap-8">
              {[
                ["+1.250", "Clientes satisfechos"],
                ["+2.800", "Propiedades comercializadas"],
                ["8", "Años de experiencia"],
              ].map(([b, s]) => (
                <div key={s}>
                  <p className="font-display text-2xl text-primary">{b}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={agentImg}
            alt="Asesora inmobiliaria de Nira Brokers"
            width={1000}
            height={800}
            loading="lazy"
            className="h-72 w-full rounded-sm object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl leading-tight">
              ¿Listo para encontrar <span className="text-olive-light">tu próxima propiedad?</span>
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-cream/75">
              Nuestro equipo y nuestro asistente inteligente están preparados para ayudarte.
            </p>
            <a
              href="#asesor"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs text-primary-foreground"
            >
              Hablar ahora <Phone className="size-4" />
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [MessageCircle, "Respuesta inmediata 24/7 con IA"],
              [Users, "Asesoramiento personalizado"],
              [ShieldCheck, "Información clara y actualizada"],
              [Handshake, "Acompañamiento hasta el final"],
            ].map(([Icon, t]) => {
              const I = Icon as typeof MessageCircle;
              return (
                <div key={t as string} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-cream/25">
                    <I className="size-4 text-olive-light" />
                  </span>
                  <p className="text-xs leading-relaxed text-cream/75">{t as string}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-[0.7rem] text-cream/50">
            <span className="tracking-[0.3em]">NIRA BROKERS</span>
            <span>© {new Date().getFullYear()} Nira Brokers. Todos los derechos reservados.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
