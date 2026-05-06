"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 p-2 text-marrom"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        <span
          className={`block w-6 h-0.5 bg-marrom transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-marrom transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-marrom transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-pergaminho flex flex-col">
          <div className="flex justify-end px-6 py-6">
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-marrom"
              aria-label="Fechar menu"
            >
              <span className="block w-6 h-0.5 bg-marrom rotate-45 translate-y-px" />
              <span className="block w-6 h-0.5 bg-marrom -rotate-45 -translate-y-px" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-xl text-marrom">
            <Link href="/#manifesto" onClick={() => setOpen(false)}>Manifesto</Link>
            <Link href="/#livro" onClick={() => setOpen(false)}>Livro</Link>
            <Link href="/#app" onClick={() => setOpen(false)}>App</Link>
            <Link href="/encontros" onClick={() => setOpen(false)}>Encontros</Link>
            <Link href="/escritos" onClick={() => setOpen(false)}>Escritos</Link>
            <Link
              href="/#lista-de-espera"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-marrom text-pergaminho px-8 py-4 text-sm tracking-wider"
            >
              Lista de espera
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
