import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
      { title: "Nira Brokers — Patrimonio y legado inmobiliario" },
      {
        name: "description",
        content:
          "Curaduría de propiedades excepcionales en Buenos Aires. Inversión, compra y alquiler con asesoramiento humano e inteligencia artificial.",
      },
      { property: "og:title", content: "Nira Brokers — Patrimonio y legado inmobiliario" },
      {
        property: "og:description",
        content:
          "Activos inmobiliarios curados, análisis de rentabilidad y un concierge inteligente que encuentra tu próxima propiedad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Propiedades", "Inversiones", "Nosotros", "Contacto"];

const properties = [
  {
    img: prop1,
    ref: "8829",
    title: "Residencia Hollywood",
    place: "Palermo Hollywood, CABA",
    m2: "85 m²",
    unit: "USD 2.880 / m²",
    price: "USD 245.000",
    tag: "Venta",
  },
  {
    img: prop2,
    ref: "7410",
    title: "Ático Belgrano R",
    place: "Belgrano R, CABA",
    m2: "60 m²",
    unit: "2 amb. · reciclado",
    price: "USD 650 / mes",
    tag: "Alquiler",
  },
  {
    img: prop3,
    ref: "6155",
    title: "Casa Nordelta",
    place: "Barrio privado, Tigre",
    m2: "240 m²",
    unit: "USD 2.417 / m²",
    price: "USD 580.000",
    tag: "Venta",
  },
  {
    img: prop4,
    ref: "5023",
    title: "Oficina Madero",
    place: "Puerto Madero, CABA",
    m2: "60 m²",
    unit: "Renta est. +7,1%",
    price: "USD 210.000",
    tag: "Inversión",
  },
];

const steps = [
  ["Paso 01", "Escucha", "Definimos criterio, presupuesto y horizonte de la operación."],
  ["Paso 02", "Curaduría", "Filtramos el mercado con analítica propia y visita técnica."],
  ["Paso 03", "Due diligence", "Auditoría legal y documental antes de cualquier reserva."],
  ["Paso 04", "Cierre", "Negociación, escritura y gestión posterior del activo."],
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <div className="leading-none">
            <div className="font-display text-2xl tracking-[0.3em]">NIRA</div>
            <div className="mt-1 text-[0.55rem] font-bold tracking-[0.4em] text-muted-foreground">
              BROKERS
            </div>
          </div>
          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href="#propiedades"
                className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#asesor"
            className="hidden items-center gap-2 border border-foreground px-6 py-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
          >
            Concierge IA
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid grid-cols-12 items-start gap-y-16 md:gap-x-12">
          <div className="col-span-12 flex flex-col space-y-16 lg:col-span-7">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="rule-ochre" />
                <span className="label-eyebrow">Inmobiliaria boutique · Buenos Aires</span>
              </div>
              <h1 className="font-display text-7xl leading-[0.85] tracking-tighter md:text-9xl">
                Patrimonio
                <br />
                <span className="ml-8 italic text-primary md:ml-16">y legado.</span>
              </h1>
              <p className="max-w-md text-xl font-light leading-relaxed text-muted-foreground">
                Curaduría de activos excepcionales. Inversiones con visión de futuro, arquitectura
                atemporal y acompañamiento de principio a fin.
              </p>
            </div>

            <div id="asesor" className="relative max-w-2xl">
              <div className="absolute inset-y-0 -left-4 w-[2px] bg-primary" />
              <div className="flex flex-col items-center gap-6 border-y border-r border-border bg-card p-4 md:flex-row md:p-6">
                <div className="w-full flex-1">
                  <label
                    htmlFor="q"
                    className="mb-2 block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Consultar con el concierge IA
                  </label>
                  <input
                    id="q"
                    type="text"
                    placeholder="Busco un dúplex con terraza en Palermo…"
                    className="w-full bg-transparent font-display text-lg italic outline-none placeholder:text-foreground/25"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-foreground px-10 py-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary md:w-auto"
                >
                  Explorar
                </button>
              </div>
            </div>
          </div>

          <div className="relative col-span-12 pt-12 lg:col-span-5 lg:pt-0">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={heroImg}
                alt="Interior de un departamento contemporáneo con luz natural"
                width={1600}
                height={2000}
                className="size-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
              />
              <div className="absolute bottom-0 right-0 border-l border-t border-border bg-background p-8 md:p-10">
                <div className="space-y-6">
                  <div>
                    <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Localización
                    </span>
                    <span className="font-display text-xl">Palermo Chico, CABA</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Precio
                      </span>
                      <span className="text-sm font-semibold">USD 3.400 / m²</span>
                    </div>
                    <div>
                      <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Retorno
                      </span>
                      <span className="text-sm font-semibold text-primary">+9,4%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden size-24 border border-primary/30 md:block" />
          </div>

          {/* Strategy */}
          <div className="col-span-12 mt-12 grid grid-cols-1 gap-8 border-t border-border pt-16 md:grid-cols-4">
            <h2 className="font-display text-4xl italic leading-none">
              Estrategia de
              <br />
              inversión
            </h2>
            {steps.slice(0, 2).map(([n, t, d]) => (
              <div key={n} className="space-y-4">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary">
                  {n} — {t}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
            <button
              type="button"
              className="group flex w-full items-center justify-between border border-foreground px-6 py-4 transition-all hover:bg-foreground hover:text-background"
            >
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                Ver informe 2026
              </span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section id="propiedades" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="mb-16 grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 md:col-span-7">
              <span className="label-eyebrow">Selección — Índice 01/04</span>
              <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-tighter md:text-7xl">
                Activos <span className="italic text-primary">curados.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:text-right">
              <p className="text-sm leading-relaxed text-muted-foreground md:ml-auto md:max-w-sm">
                Cada propiedad pasa por auditoría documental, verificación de precio por metro y
                análisis de plusvalía a cinco años.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 lg:grid-cols-4">
            {properties.map((p, i) => (
              <article key={p.ref} className={`group ${i % 2 === 1 ? "lg:translate-y-12" : ""}`}>
                <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={1066}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-background px-3 py-1.5 text-[0.55rem] font-bold uppercase tracking-[0.2em]">
                    {p.tag}
                  </span>
                  <span className="absolute right-4 top-4 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-background mix-blend-difference">
                    Ref. {p.ref}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl italic leading-tight">{p.title}</h3>
                  <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {p.place}
                </p>
                <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                  <div className="space-y-1">
                    <span className="block text-[0.6rem] uppercase tracking-widest text-muted-foreground">
                      {p.m2}
                    </span>
                    <span className="block text-xs italic">{p.unit}</span>
                  </div>
                  <span className="font-display text-xl">{p.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="mt-16 bg-ink text-cream lg:mt-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 lg:px-12">
          <div className="md:col-span-4">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-primary">
              Metodología
            </span>
            <h2 className="mt-6 font-display text-5xl italic leading-[0.95]">
              Transparencia
              <br />
              en cada paso.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              Un proceso corto, documentado y sin intermediarios innecesarios. Vos decidís, nosotros
              respondemos por cada dato.
            </p>
          </div>
          <div className="grid gap-12 md:col-span-8 md:grid-cols-2">
            {steps.map(([n, t, d], i) => (
              <div key={n} className="border-t border-cream/15 pt-6">
                <span className="font-display text-4xl text-primary/60">
                  {["I", "II", "III", "IV"][i]}.
                </span>
                <h3 className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.2em]">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment split */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex min-h-[520px] items-end p-10 lg:p-16">
          <img
            src={investImg}
            alt="Torres corporativas al atardecer"
            width={1200}
            height={1000}
            loading="lazy"
            className="absolute inset-0 size-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative max-w-md text-cream">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-cream/60">
              Inversión
            </span>
            <h2 className="mt-6 font-display text-4xl leading-[0.95]">
              Invertir con información <span className="italic text-primary">cambia el resultado.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              Analizamos flujo de capital, obra nueva y absorción por barrio para identificar los
              activos infravalorados antes que el mercado.
            </p>
            <a
              href="#asesor"
              className="mt-8 inline-flex items-center gap-3 border border-cream/40 px-7 py-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-cream hover:text-ink"
            >
              Oportunidades de inversión <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-12 border-l border-border bg-card p-10 lg:p-16">
          <div>
            <span className="label-eyebrow">Más que operaciones</span>
            <h2 className="mt-6 font-display text-4xl leading-[1] tracking-tight">
              Construimos relaciones de largo plazo basadas en confianza y{" "}
              <span className="italic text-primary">resultados.</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 border-t border-border pt-8">
            {[
              ["1.250", "Clientes"],
              ["2.800", "Operaciones"],
              ["8", "Años"],
            ].map(([b, s]) => (
              <div key={s}>
                <p className="font-display text-4xl">{b}</p>
                <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {s}
                </p>
              </div>
            ))}
          </div>
          <img
            src={agentImg}
            alt="Asesora inmobiliaria de Nira Brokers"
            width={1000}
            height={800}
            loading="lazy"
            className="h-64 w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-6 py-24 md:grid-cols-12 lg:px-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-6xl leading-[0.9] tracking-tighter md:text-8xl">
              ¿Listo para su
              <br />
              <span className="italic text-primary">próxima propiedad?</span>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Escribinos y en 24 horas recibís una selección hecha a medida por nuestro equipo y el
              concierge IA.
            </p>
            <a
              href="#asesor"
              className="mt-8 flex w-full items-center justify-between bg-foreground px-7 py-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary"
            >
              Hablar ahora <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-muted-foreground lg:px-12">
            <span>Nira Brokers</span>
            <span>© {new Date().getFullYear()} — Buenos Aires</span>
          </div>
        </div>
      </section>
    </main>
  );
}
