import { CTAButton, Section } from "./ui";
import prep from "@/assets/prep.jpg";
import mae from "@/assets/mae-crianca.jpg";

const dores = [
  "Você acorda 20 minutos antes só para “pensar” no que colocar na lancheira — e mesmo assim não pensa em nada.",
  "Encara a geladeira aberta às 6h40 esperando que alguma ideia apareça sozinha.",
  "Coloca o bolinho industrializado na mochila e sente aquela pontada de culpa até o fim do dia.",
  "Salva dezenas de receitas lindas no Instagram que você nunca vai fazer numa terça-feira real.",
  "A lancheira volta cheia. De novo. E você não sabe se o problema é a comida ou você.",
];

const passos = [
  {
    n: "01",
    titulo: "A lista que decide por você",
    texto:
      "Você para de improvisar no mercado. Uma lista enxuta, montada pela Regra das Combinações, garante que tudo que entra na sua casa vira lanche — sem sobra, sem desperdício, sem gasto extra.",
  },
  {
    n: "02",
    titulo: "40 minutos que salvam o mês",
    texto:
      "Um único bloco de pré-preparo no fim de semana. Você faz as receitas-base uma vez e elas sustentam as semanas inteiras. Depois disso, cozinhar de manhã nunca mais.",
  },
  {
    n: "03",
    titulo: "O congelador vira sua babá",
    texto:
      "Técnicas corretas de resfriamento, porcionamento e congelamento seguro. Seu estoque fica pronto, organizado e visível — você só estende a mão.",
  },
  {
    n: "04",
    titulo: "A montagem de 5 minutos",
    texto:
      "Você escolhe, monta, fecha e entrega. Sem correria, sem culpa, sem discussão. Sobra tempo até para tomar o café sentada.",
  },
];

export function Dores() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow text-gold">Sejamos honestas</span>
        <h2 className="mt-4 text-3xl leading-tight md:text-[2.7rem]">
          O problema nunca foi falta de receita.
          <br />
          <span className="text-gold">Foi falta de um sistema.</span>
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/75">
          Você já sabe o que é saudável. Você já viu mil ideias bonitas. O que
          ninguém te deu foi um jeito de executar isso às 6h40 da manhã, com
          criança chorando e o relógio contra você.
        </p>
      </div>

      <ul className="mx-auto mt-14 grid max-w-4xl gap-4">
        {dores.map((d) => (
          <li
            key={d}
            className="flex items-start gap-4 rounded-2xl border border-primary-foreground/12 bg-primary-foreground/6 p-5 text-left"
          >
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-ember" />
            <p className="text-primary-foreground/85">{d}</p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl text-center font-display text-2xl leading-snug text-gold">
        Se você leu isso e pensou “é exatamente a minha casa”, respira. Não é
        preguiça, nem desorganização. É só um processo que ninguém te ensinou.
      </p>
    </Section>
  );
}

export function Metodo() {
  return (
    <Section id="metodo">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">O Método Lancheira da Flora</span>
        <h2 className="mt-4 text-3xl md:text-[2.7rem]">
          Quatro passos entre o caos de hoje e a manhã tranquila de segunda.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Você não está comprando um monte de vídeos soltos para assistir “quando
          der”. Está adquirindo um processo com começo, meio e fim — desenhado
          para mãe real, com tempo real.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 md:mt-16 md:gap-10 md:grid-cols-2">
        <div className="grid gap-5">
          {passos.map((p) => (
            <article key={p.n} className="surface-card p-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl text-gold">{p.n}</span>
                <h3 className="text-xl">{p.titulo}</h3>
              </div>
              <p className="mt-3 text-muted-foreground">{p.texto}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-5 md:sticky md:top-10">
          <img
            src={prep}
            alt="Potes de vidro com lanches saudáveis pré-preparados para a semana"
            loading="lazy"
            width={1200}
            height={912}
            className="w-full rounded-3xl object-cover shadow-soft"
          />
          <img
            src={mae}
            alt="Mãe sorrindo ao entregar a lancheira pronta para a filha antes da escola"
            loading="lazy"
            width={1200}
            height={912}
            className="w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="rounded-3xl bg-brick p-7 text-brick-foreground">
            <h3 className="text-2xl text-brick-foreground">
              O resultado: a lancheira que volta vazia.
            </h3>
            <p className="mt-3 text-brick-foreground/85">
              Seu filho comendo de verdade, você saindo de casa leve e a culpa
              fora da mochila. Esse é o combinado.
            </p>
            <CTAButton className="btn-cta-gold mt-6 w-full">
              Quero esse resultado
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
