import { LogoSymbol } from "./LogoSymbol";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grain opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-pergaminho-claro via-pergaminho to-pergaminho" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-32 text-center">
        <div className="flex justify-center mb-8 md:mb-10">
          <LogoSymbol size={96} />
        </div>

        <p className="text-sm tracking-[0.35em] text-marrom/60 mb-6">
          UM MOVIMENTO BÍBLICO
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.05] text-marrom mb-6 md:mb-8">
          Caminhando com Jesus
          <br />
          <span className="text-dourado">pela Palavra.</span>
        </h1>

        <p className="text-base md:text-xl text-marrom/80 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
          Um livro, um app e encontros semanais para quem quer conhecer Jesus
          de verdade. Não de cor, mas de encontro. Pela Palavra, um capítulo
          por vez.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#lista-de-espera"
            className="rounded-full bg-marrom text-pergaminho px-8 py-4 text-sm tracking-wider hover:bg-marrom-profundo transition-colors"
          >
            ENTRAR NA LISTA DE ESPERA
          </a>
          <a
            href="#encontros"
            className="rounded-full border border-marrom/20 text-marrom px-8 py-4 text-sm tracking-wider hover:border-marrom transition-colors"
          >
            VER ENCONTROS
          </a>
        </div>

        <p className="mt-14 text-xs tracking-[0.3em] text-marrom/50">
          EM BREVE · NA APP STORE E GOOGLE PLAY
        </p>
      </div>
    </section>
  );
}
