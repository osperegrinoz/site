export function App() {
  return (
    <section id="app" className="relative py-16 md:py-32 bg-pergaminho-claro">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10 md:mb-20">
          <p className="text-xs tracking-[0.35em] text-marrom/60 mb-6">
            O APP
          </p>
          <h2 className="text-4xl md:text-5xl leading-tight text-marrom max-w-3xl mx-auto">
            Cinco áreas.
            <br />
            <span className="text-dourado">Uma caminhada inteira.</span>
          </h2>
          <p className="mt-6 text-marrom/70 max-w-xl mx-auto">
            Para iOS e Android.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {AREAS.map((area, i) => (
            <div
              key={area.nome}
              className={`bg-pergaminho border border-marrom/10 rounded-xl p-6 hover:border-dourado/60 transition-colors ${i === 4 ? "sm:col-span-2 md:col-span-1" : ""}`}
            >
              <div className="text-dourado text-2xl mb-4 font-[family-name:var(--font-cinzel)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl text-marrom mb-2">{area.nome}</h3>
              <p className="text-sm text-marrom/70 leading-relaxed">
                {area.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 rounded-2xl bg-marrom text-pergaminho p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 grain opacity-30" aria-hidden />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.35em] text-dourado mb-2">
                O ANJO
              </p>
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] text-pergaminho">
                ✦
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl mb-3 leading-snug">
                E quem quiser, pode caminhar acompanhado.
              </h3>
              <p className="text-sm md:text-base text-pergaminho/80 leading-relaxed max-w-xl">
                O Anjo é direção espiritual no bolso. Pastoral, gentil, com a
                Palavra como bússola.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-marrom/5 px-5 py-3 text-sm text-marrom/70">
            <span className="w-2 h-2 rounded-full bg-dourado" aria-hidden />
            App em desenvolvimento
          </div>
        </div>
      </div>
    </section>
  );
}

const AREAS = [
  {
    nome: "Caminho",
    descricao: "A trilha completa pela Palavra (Etapas, Passos e Marcos).",
  },
  {
    nome: "Palavra",
    descricao: "Leitura bíblica guiada. A Escritura inteira apontando pra Jesus.",
  },
  {
    nome: "Missão",
    descricao: "A fé que transborda em gestos pequenos e reais.",
  },
  {
    nome: "Comunidade",
    descricao: "Mural, Círculos e Núcleo. Pra ninguém caminhar sozinho.",
  },
  {
    nome: "Eu",
    descricao: "Minha Caminhada: progresso, Marcos conquistados, Refúgio.",
  },
];
