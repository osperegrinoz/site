export function Peregrinagem() {
  return (
    <section id="peregrinagem" className="py-16 md:py-32 bg-marrom-profundo text-pergaminho">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] text-dourado mb-6">
            PEREGRINAGEM — YOUTUBE
          </p>
          <h2 className="text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
            21 encontros com Jesus,
            <br />
            <span className="text-dourado">um por semana.</span>
          </h2>
          <p className="mt-6 text-pergaminho/70 max-w-xl mx-auto">
            Uma série de vinte e um vídeos pelo Evangelho de João. Novo episódio
            toda semana, direto pro seu inbox se você estiver na lista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EPISODIOS.map((ep) => (
            <div
              key={ep.numero}
              className="border border-pergaminho/10 rounded-xl overflow-hidden bg-marrom/30"
            >
              <div className="aspect-video bg-marrom flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grain opacity-40" aria-hidden />
                <div className="relative text-center">
                  <div className="text-xs tracking-[0.3em] text-dourado mb-2">
                    EP {ep.numero}
                  </div>
                  <div className="text-4xl text-pergaminho font-[family-name:var(--font-cinzel)] tracking-wider">
                    {ep.palavra}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base leading-snug mb-2">{ep.titulo}</h3>
                <p className="text-xs text-pergaminho/60">
                  {ep.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <a
            href="#lista-de-espera"
            className="inline-block rounded-full border border-dourado text-dourado px-8 py-4 text-sm tracking-wider hover:bg-dourado hover:text-marrom-profundo transition-colors"
          >
            SER AVISADO QUANDO ESTREAR
          </a>
        </div>
      </div>
    </section>
  );
}

const EPISODIOS = [
  {
    numero: "01",
    palavra: "RUÍDO",
    titulo: "O Verbo que virou ruído de fundo",
    status: "Estreia em breve",
  },
  {
    numero: "02",
    palavra: "CHAMADO",
    titulo: "O chamado que eu ouvi — e fingi que não",
    status: "Em produção",
  },
  {
    numero: "03",
    palavra: "FESTA",
    titulo: "A festa que secou na minha mão",
    status: "Em produção",
  },
];
