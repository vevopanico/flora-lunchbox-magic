import { ShieldCheck } from "lucide-react";
import { CTAButton, Section } from "./ui";
import l1 from "@/assets/lancheira-1.jpg";
import l2 from "@/assets/lancheira-2.jpg";
import l3 from "@/assets/lancheira-3.jpg";
import l4 from "@/assets/lancheira-4.jpg";

const lancheiras = [
  {
    img: l1,
    dia: "Segunda",
    titulo: "A clássica que nunca falha",
    desc: "Sanduíche integral, morango, uva e palitos de cenoura. Montada em 4 minutos com o que já estava porcionado.",
    alt: "Lancheira infantil organizada com sanduíche integral, morangos, uvas e palitos de cenoura",
  },
  {
    img: l2,
    dia: "Terça",
    titulo: "A colorida antisseletivo",
    desc: "Panquequinhas do congelador, queijo em cubos, frutas e iogurte. Item conhecido ao lado do item novo — a regra da aceitação.",
    alt: "Lancheira colorida com panquecas, cubos de queijo, frutas vermelhas e potinho de iogurte",
  },
  {
    img: l3,
    dia: "Quarta",
    titulo: "A que volta vazia",
    desc: "Rolinhos de wrap, pepino, pipoca e bolo de banana caseiro. Tudo saiu de um único pré-preparo de domingo.",
    alt: "Lancheira com rolinhos de wrap, pepino, pipoca e fatias de bolo de banana",
  },
  {
    img: l4,
    dia: "Quinta",
    titulo: "A da manhã caótica",
    desc: "Bolsa térmica montada em 3 minutos: pote pronto, fruta cortada e bebida. Para o dia em que nada saiu como planejado.",
    alt: "Bolsa térmica aberta com pote de lanche, frutas cortadas e garrafinha",
  },
];

export function Lancheiras() {
  return (
    <Section className="bg-secondary">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Veja com os próprios olhos</span>
        <h2 className="mt-4 text-3xl md:text-[2.7rem]">
          É exatamente assim que a sua lancheira vai sair de casa.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Nada de foto de revista impossível de repetir. São montagens reais,
          com comida de mercado comum, prontas em minutos porque o trabalho
          pesado já foi feito no domingo.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {lancheiras.map((l) => (
          <article key={l.dia} className="surface-card overflow-hidden">
            <img
              src={l.img}
              alt={l.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <div className="p-6">
              <span className="eyebrow text-gold">{l.dia}</span>
              <h3 className="mt-1 text-xl">{l.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <CTAButton>Quero montar assim amanhã</CTAButton>
      </div>
    </Section>
  );
}

export function Garantia() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[auto_1fr]">
        <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border-2 border-gold/60 bg-gold/10">
          <div className="text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-gold" />
            <p className="mt-1 font-display text-2xl leading-none text-gold">
              7
            </p>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold/80">
              dias
            </p>
          </div>
        </div>

        <div>
          <span className="eyebrow text-gold">Risco zero</span>
          <h2 className="mt-3 text-3xl leading-tight md:text-[2.5rem]">
            Garantia incondicional de 7 dias.
          </h2>
          <p className="mt-5 text-primary-foreground/80">
            Entre, leia tudo, faça o pré-preparo de um domingo e teste as
            montagens numa semana inteira de escola. Se as suas manhãs não
            ficarem mais leves — ou se simplesmente não for para você — é só
            enviar um e-mail dentro de 7 dias e devolvemos 100% do valor. Sem
            formulário, sem justificativa, sem constrangimento.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-primary-foreground/85">
            {[
              "Você testa o método inteiro antes de decidir.",
              "Reembolso integral, sem perguntas e sem letras miúdas.",
              "O risco é meu. Para você, só sobra o resultado.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
          <CTAButton className="mt-8">Testar sem risco por 7 dias</CTAButton>
        </div>
      </div>
    </Section>
  );
}
