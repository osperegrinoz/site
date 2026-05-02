import { LogoSymbol } from "./LogoSymbol";

export function Footer() {
  return (
    <footer className="border-t border-marrom/10 py-14 bg-pergaminho">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
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

        <div className="text-sm">
          <p className="text-xs tracking-[0.3em] text-marrom/50 mb-4">
            NAVEGAR
          </p>
          <ul className="space-y-2 text-marrom/80">
            <li><a href="#manifesto" className="hover:text-marrom">Manifesto</a></li>
            <li><a href="#livro" className="hover:text-marrom">Livro</a></li>
            <li><a href="#app" className="hover:text-marrom">App</a></li>
            <li><a href="#peregrinagem" className="hover:text-marrom">Peregrinagem</a></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="text-xs tracking-[0.3em] text-marrom/50 mb-4">
            ACOMPANHE
          </p>
          <ul className="space-y-2 text-marrom/80">
            <li><a href="https://youtube.com/@peregrinoz" className="hover:text-marrom" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="https://instagram.com/peregrinoz" className="hover:text-marrom" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 md:mt-12 mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-marrom/50">
        <p>© {new Date().getFullYear()} Peregrinoz. Todos os direitos reservados.</p>
        <p>Thiago Pastana</p>
      </div>
    </footer>
  );
}
