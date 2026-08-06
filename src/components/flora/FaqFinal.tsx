import { CTAButton, Section } from "./ui";

const faq = [
  {
    q: "Eu não sei cozinhar quase nada. Serve pra mim?",
    a: "Serve especialmente pra você. O método é montado em combinações e pré-preparos simples: se você sabe usar o fogão e o congelador, você consegue. Nada de técnica de chef.",
  },
  {
    q: "Meu filho é seletivo e recusa tudo.",
    a: "A lógica das combinações trabalha justamente a aceitação: item conhecido + item novo, sempre na mesma estrutura visual. E o bônus Pequenos Chefes existe para virar esse jogo envolvendo a criança no preparo.",
  },
  {
    q: "Quanto tempo vou gastar por semana?",
    a: "De 30 a 40 minutos de pré-preparo no fim de semana e cerca de 5 minutos de montagem por manhã. É menos tempo do que você gasta hoje decidindo o que fazer.",
  },
  {
    q: "Preciso comprar ingredientes caros?",
    a: "Não. O método foi desenhado com itens de mercado comum. A lista inteligente costuma reduzir o gasto, porque acaba com a compra por impulso e o desperdício.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento, no seu e-mail. O acesso é vitalício e você pode consultar pelo celular na cozinha.",
  },
];

export function FaqFinal() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">Dúvidas honestas</span>
            <h2 className="mt-4 text-3xl md:text-[2.6rem]">
              Antes de você decidir
            </h2>
          </div>
          <div className="mt-10 grid gap-4">
            {faq.map((f) => (
              <details key={f.q} className="surface-card group p-6">
                <summary className="cursor-pointer list-none font-display text-lg text-primary marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brick text-brick-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight text-brick-foreground md:text-[2.6rem]">
            Amanhã de manhã vai acontecer de novo.
          </h2>
          <p className="mt-5 text-lg text-brick-foreground/85">
            A pergunta é só uma: você vai encarar a geladeira aberta outra vez, ou
            vai abrir o congelador e pegar o que já está pronto? São R$ 97 para
            comprar de volta as suas manhãs.
          </p>
          <CTAButton className="mt-8">Começar agora por R$ 97</CTAButton>
        </div>
      </Section>

      <footer className="border-t bg-background py-10">
        <div className="container-page text-center text-sm text-muted-foreground">
          <p className="font-display text-lg text-primary">
            Lancheira da Flora
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Lancheira da Flora · Todos os direitos
            reservados
          </p>
        </div>
      </footer>
    </>
  );
}
