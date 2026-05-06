export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-16 md:py-32 bg-marrom text-pergaminho">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs tracking-[0.35em] text-dourado mb-6">
          O MANIFESTO
        </p>

        <h2 className="text-3xl md:text-5xl leading-tight mb-8 md:mb-12">
          E se a fé virou só clichê?
          <br />
          <span className="text-pergaminho/70">Peregrino não é quem chegou. É quem ainda está na estrada.</span>
        </h2>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-pergaminho/90 max-w-3xl">
          <p>
            Eu cresci respondendo certo sobre Deus e não sentindo nada.
            Versículo decorado, mas nenhum encontro de verdade. Jesus era
            mais uma ideia do que uma pessoa real. E quando a vida apertou,
            descobri que fé no piloto automático não segura ninguém. PeregrinoZ
            nasceu daí: da vontade de conhecer a pessoa (não a ideia) de
            Jesus e de desenvolver um relacionamento sincero e honesto com ele.
          </p>
          <p>
            Construído pra quem cresceu dentro da fé e perdeu o peso dela, pra
            quem foi machucado pela religião, e pra quem está chegando agora,
            cheio de perguntas. Deus não usa gente perfeita. Usa gente
            restaurada.
          </p>
          <p className="text-dourado italic">
            &ldquo;Eu não quero que você vire uma versão mais religiosa de si
            mesmo. Quero que Jesus deixe de ser um conceito distante e se torne
            alguém que você conhece.&rdquo;
            <span className="block mt-2 text-sm not-italic text-pergaminho/60 font-normal">
              (Thiago Pastana, introdução)
            </span>
          </p>
        </div>

        <div className="mt-12 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10">
          {PILARES.map((pilar) => (
            <div key={pilar.titulo}>
              <div className="text-dourado text-3xl mb-4 font-[family-name:var(--font-cinzel)]">
                {pilar.numero}
              </div>
              <h3 className="text-xl mb-3">{pilar.titulo}</h3>
              <p className="text-sm text-pergaminho/70 leading-relaxed">
                {pilar.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILARES = [
  {
    numero: "I",
    titulo: "Palavra",
    texto:
      "A Bíblia aberta, sem filtro. Já caminhamos por João inteiro. Agora estamos em Atos. E a gente segue, um capítulo por vez, a Escritura inteira apontando para Jesus.",
  },
  {
    numero: "II",
    titulo: "Comunidade",
    texto:
      "Ninguém caminha sozinho. Encontros toda quarta-feira, 19h. Lugar para ser quebrado, honesto e acompanhado de verdade.",
  },
  {
    numero: "III",
    titulo: "Missão",
    texto:
      "A fé que transborda. Não um evento de igreja, uma vida de pequenos atos. Você não precisa de credencial para cuidar das ovelhas que Deus colocou na sua vida.",
  },
];
