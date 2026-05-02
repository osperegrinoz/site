export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-16 md:py-32 bg-marrom text-pergaminho">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs tracking-[0.35em] text-dourado mb-6">
          O MANIFESTO
        </p>

        <h2 className="text-3xl md:text-5xl leading-tight mb-8 md:mb-12">
          Peregrino não é quem chegou.
          <br />É quem ainda está na estrada.
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-pergaminho/90 max-w-3xl">
          <p>
            Peregrinoz é um movimento bíblico centrado em Jesus Cristo.
            Convida pessoas para uma <em>jornada real</em> de transformação
            através da Palavra, vivida em comunidade e transbordando em missão.
          </p>
          <p>
            Não é um app de conteúdo genérico. É um movimento que serve a Igreja
            sem substituí-la — construído para quem cresceu dentro da fé e
            perdeu o peso dela, para quem foi machucado pela religião, e para
            quem está chegando agora, cheio de perguntas.
          </p>
          <p className="text-dourado italic">
            &ldquo;A palavra peregrino carrega tudo: não é quem chegou. É quem
            ainda está na estrada, suado, com dúvida, com o sapato gasto, mas
            andando.&rdquo;
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
      "A Bíblia aberta e honesta. Não um versículo isolado por dia — a Escritura inteira apontando para Jesus.",
  },
  {
    numero: "II",
    titulo: "Comunidade",
    texto:
      "Ninguém caminha sozinho. Círculos pequenos onde se pode ser quebrado, honesto e acompanhado de verdade.",
  },
  {
    numero: "III",
    titulo: "Missão",
    texto:
      "A fé que transborda. Não um evento anual — uma vida inteira feita de pequenos atos que apontam para Cristo.",
  },
];
