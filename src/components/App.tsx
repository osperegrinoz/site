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
            iOS + Android. Gratuito em tudo que é espiritual. Sem paywall em
            conteúdo bíblico.
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

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-marrom/5 px-5 py-3 text-sm text-marrom/70">
            <span className="w-2 h-2 rounded-full bg-dourado" />
            App disponível nas lojas em julho de 2026
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
