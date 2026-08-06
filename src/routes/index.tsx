import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-lancheira.jpg";
import { CTAButton } from "@/components/flora/ui";
import { Dores, Metodo } from "@/components/flora/Metodo";
import { Oferta } from "@/components/flora/Oferta";
import { FaqFinal } from "@/components/flora/FaqFinal";

const title = "Lancheira da Flora | Lancheiras saudáveis em 5 minutos";
const description =
  "O método prático para mães resolverem a lancheira da semana inteira em minutos: planejamento, pré-preparo e montagem de 5 minutos, sem culpa e sem caos matinal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <header className="border-b bg-background/90 py-4 backdrop-blur">
        <div className="container-page flex items-center justify-between">
          <span className="font-display text-xl tracking-tight text-primary">
            Lancheira da <span className="text-brick">Flora</span>
          </span>
          <a
            href="#oferta"
            className="hidden rounded-full border border-brick px-5 py-2 text-sm font-semibold text-brick transition-colors hover:bg-brick hover:text-brick-foreground sm:inline-block"
          >
            Quero começar
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl" />
        <div className="container-page relative grid items-center gap-14 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="eyebrow">Para mães reais, sem tempo a perder</span>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-primary md:text-[3.4rem]">
              Nunca mais encare a geladeira aberta
              <span className="block text-brick">às 6h40 da manhã.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              O Método Lancheira da Flora transforma um pré-preparo de fim de
              semana em lanches prontos o mês inteiro — você só abre o
              congelador, monta e entrega. Sem receita nova, sem culpa, sem
              acordar mais cedo.
            </p>

            <ul className="mt-7 grid gap-2.5 text-[0.98rem] text-primary/85">
              {[
                "Sem ingrediente caro e sem receita de Instagram",
                "Pré-preparo de 40 minutos que sustenta o mês",
                "Lanche saudável que a criança realmente come",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-[11px] font-bold text-gold-foreground">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <CTAButton>Quero a lancheira resolvida</CTAButton>
              <p className="text-sm text-muted-foreground">
                <span className="line-through">De R$ 297</span> por{" "}
                <strong className="text-brick">R$ 97</strong> hoje
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="float-soft overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={hero}
                alt="Lancheira infantil saudável montada com frutas, sanduíche e muffins caseiros"
                width={1408}
                height={1408}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="surface-card absolute -bottom-6 left-4 max-w-[15rem] p-4 md:-left-8">
              <p className="font-display text-lg text-primary">
                “Voltou vazia.”
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A frase que toda mãe quer ouvir no fim do dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Dores />
      <Metodo />
      <Oferta />
      <FaqFinal />
    </main>
  );
}
