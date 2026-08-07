import { CTAButton, Section } from "./ui";
import produto from "@/assets/produto.jpg";

const bonus = [
  {
    tag: "Bônus 1",
    titulo: "Domingo de 40 Minutos",
    sub: "O roteiro cronometrado do pré-preparo: o que picar, assar e congelar, na ordem certa.",
  },
  {
    tag: "Bônus 2",
    titulo: "Lista de Compras Inteligente",
    sub: "Uma folha só, por seção do mercado, que abastece a lancheira por 30 dias.",
  },
  {
    tag: "Bônus 3",
    titulo: "Termômetro da Rejeição",
    sub: "O passo a passo para apresentar um alimento novo sem virar briga na mesa.",
  },
  {
    tag: "Bônus 4",
    titulo: "Caderno das Trocas Espertas",
    sub: "Substituições um-para-um: sem glúten, sem lactose, sem castanha, mesmo preparo.",
  },
  {
    tag: "Bônus 5",
    titulo: "Plano Manhã Caótica",
    sub: "12 montagens de 3 minutos com o que sempre tem em casa, para o dia em que nada saiu como planejado.",
  },
];

const naoE = [
  "Não é um cardápio gourmet com farinha de amêndoas e frutas importadas.",
  "Não é um monte de receita bonita para você salvar e nunca fazer.",
  "Não é um método que exige duas horas de cozinha por dia.",
];

const eSim = [
  "É um sistema de 5 minutos por manhã, feito para a vida real.",
  "É comida de mercado normal, preço de mercado normal.",
  "É o fim da culpa e da decisão às pressas todos os dias.",
];

export function Oferta() {
  return (
    <>
      <Section className="bg-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Pausa na programação</span>
          <h2 className="mt-4 text-3xl md:text-[2.6rem]">
            Prefiro perder a venda a te vender a coisa errada.
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="surface-card p-7">
            <h3 className="text-xl text-brick">O que isso não é</h3>
            <ul className="mt-4 grid gap-3 text-muted-foreground">
              {naoE.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brick" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-7">
            <h3 className="text-xl text-primary">O que isso é</h3>
            <ul className="mt-4 grid gap-3 text-muted-foreground">
              {eSim.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">E ainda tem mais</span>
          <h2 className="mt-4 text-3xl md:text-[2.6rem]">
            5 bônus para você aplicar já na próxima segunda-feira
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bonus.map((b) => (
            <article key={b.tag} className="surface-card h-full p-6">
              <span className="eyebrow text-gold">{b.tag}</span>
              <h3 className="mt-2 text-lg leading-snug">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.sub}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="oferta" className="bg-primary text-primary-foreground">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src={produto}
            alt="Método Lancheira da Flora em tablet e celular"
            loading="lazy"
            width={1408}
            height={1008}
            className="w-full rounded-3xl shadow-soft"
          />
          <div>
            <span className="eyebrow text-gold">Sua decisão de hoje</span>
            <h2 className="mt-4 text-3xl leading-tight md:text-[2.6rem]">
              Acesso completo ao Método + 5 bônus
            </h2>
            <p className="mt-5 text-primary-foreground/75">
              Acesso vitalício, no celular, no computador ou impresso. Você entra
              hoje e já monta a lancheira de amanhã com o guia aberto ao lado.
            </p>

            <div className="mt-8 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/6 p-8 text-center">
              <p className="text-sm text-primary-foreground/60 line-through">
                De R$ 297,00
              </p>
              <p className="mt-1 font-display text-5xl text-gold">R$ 97</p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                à vista ou 12x de R$ 9,90
              </p>
              <CTAButton className="mt-6 w-full">
                Quero a lancheira resolvida
              </CTAButton>
              <p className="mt-4 text-xs text-primary-foreground/60">
                Compra 100% segura · Acesso imediato por e-mail
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gold/40 p-6">
              <h3 className="text-lg text-gold">
                Garantia incondicional de 7 dias
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                Teste o método por uma semana inteira. Se as suas manhãs não
                ficarem mais leves, você pede o reembolso e devolvemos cada
                centavo. O risco é meu, não seu.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
