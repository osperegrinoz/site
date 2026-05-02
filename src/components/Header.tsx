import Link from "next/link";
import { LogoSymbol } from "./LogoSymbol";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <LogoSymbol size={76} />
          <span className="font-[family-name:var(--font-cinzel)] tracking-[0.2em] text-sm text-marrom">
            PEREGRINOZ
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-marrom/80">
          <a href="#manifesto" className="hover:text-marrom transition-colors">
            Manifesto
          </a>
          <a href="#livro" className="hover:text-marrom transition-colors">
            Livro
          </a>
          <a href="#app" className="hover:text-marrom transition-colors">
            App
          </a>
          <Link href="/encontros" className="hover:text-marrom transition-colors">
            Encontros
          </Link>
          <Link href="/escritos" className="hover:text-marrom transition-colors">
            Escritos
          </Link>
          <a
            href="#lista-de-espera"
            className="rounded-full bg-marrom text-pergaminho px-4 py-2 hover:bg-marrom-profundo transition-colors"
          >
            Lista de espera
          </a>
        </nav>
      </div>
    </header>
  );
}
