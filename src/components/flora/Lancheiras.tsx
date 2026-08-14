import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { CTAButton, Section } from "./ui";
import l1 from "@/assets/lancheira-1.jpg";
import l2 from "@/assets/lancheira-2.jpg";
import l3 from "@/assets/lancheira-3.jpg";
import l4 from "@/assets/lancheira-4.jpg";
import l5 from "@/assets/lancheira-5.jpg";
import l6 from "@/assets/lancheira-6.jpg";
import l7 from "@/assets/lancheira-7.jpg";
import l8 from "@/assets/lancheira-8.jpg";
import l9 from "@/assets/lancheira-9.jpg";

const slides = [
  {
    img: l1,
    alt: "Lancheira infantil organizada com sanduíche integral, morangos, uvas e palitos de cenoura",
  },
  {
    img: l2,
    alt: "Lancheira colorida com panquecas, cubos de queijo, frutas vermelhas e potinho de iogurte",
  },
  {
    img: l3,
    alt: "Lancheira com rolinhos de wrap, pepino, pipoca e fatias de bolo de banana",
  },
  {
    img: l4,
    alt: "Bolsa térmica aberta com pote de lanche, frutas cortadas e garrafinha",
  },
  {
    img: l5,
    alt: "Lancheira com sanduíche de presunto e queijo, uvas verdes, cenourinhas e potinho de iogurte",
  },
  {
    img: l6,
    alt: "Lancheira com rolinhos de wrap de peito de peru e queijo, melancia, tomatinhos e pipoca",
  },
  {
    img: l7,
    alt: "Lancheira com fatias de bolo de banana caseiro, mirtilos, pepino e bolinhas de muçarela",
  },
  {
    img: l8,
    alt: "Lancheira com triângulos de quesadilha de queijo, milho, maçã fatiada e morangos",
  },
  {
    img: l9,
    alt: "Lancheira com pão de queijo, cubos de mamão, ovo cozido e biscoitinhos",
  },
];


export function Lancheiras() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);

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

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="surface-card relative aspect-square overflow-hidden">
          {slides.map((s, idx) => (
            <img
              key={s.alt}
              src={s.img}
              alt={s.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2.5">
          {slides.map((s, idx) => (
            <button
              key={s.alt}
              type="button"
              aria-label={`Ver lancheira ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === i ? "w-7 bg-brick" : "w-2.5 bg-primary/25"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <CTAButton>Quero montar assim amanhã</CTAButton>
      </div>
    </Section>
  );
}

export function Garantia() {
  return (
    <Section className="bg-brick text-brick-foreground">
      <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[auto_1fr]">
        <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border-2 border-gold/60 bg-gold/15">
          <div className="text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-gold" />
            <p className="mt-1 font-display text-2xl leading-none text-gold">
              7
            </p>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold/85">
              dias
            </p>
          </div>
        </div>

        <div>
          <span className="eyebrow text-gold">Risco zero</span>
          <h2 className="mt-3 text-3xl leading-tight text-brick-foreground md:text-[2.5rem]">
            Garantia incondicional de 7 dias.
          </h2>
          <p className="mt-5 text-brick-foreground/85">
            Entre, leia tudo, faça o pré-preparo de um domingo e teste as
            montagens numa semana inteira de escola. Se as suas manhãs não
            ficarem mais leves — ou se simplesmente não for para você — é só
            enviar um e-mail dentro de 7 dias e devolvemos 100% do valor. Sem
            formulário, sem justificativa, sem constrangimento.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-brick-foreground/90">
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
          <CTAButton className="btn-cta-gold mt-8">
            Testar sem risco por 7 dias
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
