import { LogoSymbol } from "./LogoSymbol";

export function Footer() {
  return (
    <footer className="border-t border-marrom/10 bg-pergaminho">
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-10">
        <p className="text-center text-lg md:text-2xl text-marrom max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-cinzel)] italic">
          Conhecer Jesus de verdade não precisa ser uma caminhada solitária.
          {" "}
          <span className="text-dourado not-italic">Bora?</span>
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start pb-10 border-t border-marrom/10 pt-10">
        <div>
          <div className="flex items-center gap-3">
            <LogoSymbol size={40} />
            <span className="font-[family-name:var(--font-cinzel)] tracking-[0.2em] text-sm text-marrom">
              PEREGRINOZ
            </span>
          </div>
          <p className="mt-4 text-sm text-marrom/70 max-w-xs">
            Um movimento bíblico. Caminhando com Jesus pela Palavra.
          </p>
        </div>

        <nav className="text-sm" aria-label="Navegação do rodapé">
          <p className="text-xs tracking-[0.3em] text-marrom/50 mb-4">
            NAVEGAR
          </p>
          <ul className="space-y-2 text-marrom/80">
            <li><a href="#manifesto" className="hover:text-marrom">Manifesto</a></li>
            <li><a href="#livro" className="hover:text-marrom">Livro</a></li>
            <li><a href="#app" className="hover:text-marrom">App</a></li>
            <li><a href="#encontros" className="hover:text-marrom">Encontros</a></li>
          </ul>
        </nav>

        <nav className="text-sm" aria-label="Redes sociais">
          <p className="text-xs tracking-[0.3em] text-marrom/50 mb-4">
            ACOMPANHE
          </p>
          <ul className="space-y-2 text-marrom/80">
            <li>
              <a
                href="https://youtube.com/@osperegrinoz"
                className="hover:text-marrom"
                target="_blank"
                rel="noreferrer"
                aria-label="Canal Os PeregrinoZ no YouTube"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/osperegrinoz"
                className="hover:text-marrom"
                target="_blank"
                rel="noreferrer"
                aria-label="Perfil Os PeregrinoZ no Instagram"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10 flex flex-col md:flex-row justify-between gap-2 text-xs text-marrom/50 border-t border-marrom/10 pt-6">
        <p>© {new Date().getFullYear()} Peregrinoz. Todos os direitos reservados.</p>
        <p>Thiago Pastana</p>
      </div>
    </footer>
  );
}
