const MOVIMENTOS = [
  {
    numero: "I",
    titulo: "O Livro abre",
    texto: "21 capítulos pra começar a caminhada com a Palavra na mão.",
  },
  {
    numero: "II",
    titulo: "Os Encontros sustentam",
    texto: "Toda quarta, 19h. Um capítulo por semana, juntos, no canal.",
  },
  {
    numero: "III",
    titulo: "O App guia",
    texto: "Caminho, Palavra, Missão, Comunidade e Eu. Pra caminhar todo dia.",
  },
  {
    numero: "IV",
    titulo: "Os Círculos andam junto",
    texto: "Pra ninguém caminhar sozinho. A fé vivida em comunidade real.",
  },
];

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 bg-pergaminho-claro"
      aria-labelledby="como-funciona-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.35em] text-marrom/60 mb-6">
            COMO FUNCIONA
          </p>
          <h2
            id="como-funciona-heading"
            className="text-3xl md:text-5xl leading-tight text-marrom max-w-3xl mx-auto"
          >
            Quatro movimentos.
            <br />
            <span className="text-dourado">Uma caminhada inteira.</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {MOVIMENTOS.map((m) => (
            <li
              key={m.numero}
              className="bg-pergaminho border border-marrom/10 rounded-xl p-6 md:p-7 hover:border-dourado/50 transition-colors"
            >
              <div className="text-dourado text-2xl mb-4 font-[family-name:var(--font-cinzel)]">
                {m.numero}
              </div>
              <h3 className="text-lg md:text-xl text-marrom mb-2 leading-snug">
                {m.titulo}
              </h3>
              <p className="text-sm text-marrom/70 leading-relaxed">
                {m.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
