"use client";

import { useState } from "react";
import Image from "next/image";
import type { Encontro } from "@/lib/encontros";

function thumbnailUrl(youtube_id: string) {
  return `https://img.youtube.com/vi/${youtube_id}/mqdefault.jpg`;
}

function youtubeUrl(youtube_id: string) {
  return `https://www.youtube.com/watch?v=${youtube_id}`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function EncontroCard({ encontro }: { encontro: Encontro }) {
  const hasVideo = !!encontro.youtube_id;

  const card = (
    <div className="group border border-marrom/10 rounded-xl overflow-hidden bg-pergaminho hover:border-dourado/50 transition-colors">
      <div className="aspect-video bg-marrom/10 relative overflow-hidden">
        {hasVideo ? (
          <Image
            src={thumbnailUrl(encontro.youtube_id)}
            alt={encontro.titulo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grain absolute inset-0 opacity-60" aria-hidden />
            <div className="relative text-center">
              <p className="text-xs tracking-[0.3em] text-dourado mb-1">
                {encontro.livro.toUpperCase()}
              </p>
              <p className="font-[family-name:var(--font-cinzel)] text-3xl text-marrom/40 tracking-wider">
                {encontro.capitulo}
              </p>
            </div>
          </div>
        )}
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-marrom/30">
            <div className="w-12 h-12 rounded-full bg-dourado flex items-center justify-center">
              <svg className="w-5 h-5 text-marrom ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs tracking-[0.25em] text-marrom/40 mb-1">
          {encontro.livro.toUpperCase()} {encontro.capitulo} · {formatDate(encontro.data)}
        </p>
        <h3 className="text-sm leading-snug text-marrom group-hover:text-dourado transition-colors">
          {encontro.titulo}
        </h3>
        {!hasVideo && (
          <p className="text-xs text-marrom/30 mt-1">Em breve</p>
        )}
      </div>
    </div>
  );

  if (!hasVideo) return card;

  return (
    <a href={youtubeUrl(encontro.youtube_id)} target="_blank" rel="noreferrer">
      {card}
    </a>
  );
}

function ViewCronologico({ encontros }: { encontros: Encontro[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {encontros.map((e) => (
        <EncontroCard key={`${e.livro}-${e.capitulo}`} encontro={e} />
      ))}
    </div>
  );
}

function ViewPorLivro({ porLivro }: { porLivro: Record<string, Encontro[]> }) {
  return (
    <div className="space-y-16">
      {Object.entries(porLivro).map(([livro, encontros]) => (
        <div key={livro}>
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl text-marrom">{livro}</h2>
            <span className="text-sm text-marrom/40">{encontros.length} encontros</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {encontros.map((e) => (
              <EncontroCard key={`${e.livro}-${e.capitulo}`} encontro={e} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

type View = "livro" | "cronologico";

interface Props {
  encontrosCronologicos: Encontro[];
  encontrosPorLivro: Record<string, Encontro[]>;
}

export function EncontrosView({ encontrosCronologicos, encontrosPorLivro }: Props) {
  const [view, setView] = useState<View>("livro");

  return (
    <div>
      <div className="flex gap-1 mb-12 bg-marrom/5 rounded-full p-1 w-fit">
        <button
          onClick={() => setView("livro")}
          className={`rounded-full px-5 py-2 text-sm tracking-wide transition-colors ${
            view === "livro"
              ? "bg-marrom text-pergaminho"
              : "text-marrom/60 hover:text-marrom"
          }`}
        >
          Por livro
        </button>
        <button
          onClick={() => setView("cronologico")}
          className={`rounded-full px-5 py-2 text-sm tracking-wide transition-colors ${
            view === "cronologico"
              ? "bg-marrom text-pergaminho"
              : "text-marrom/60 hover:text-marrom"
          }`}
        >
          Cronológico
        </button>
      </div>

      {view === "livro" ? (
        <ViewPorLivro porLivro={encontrosPorLivro} />
      ) : (
        <ViewCronologico encontros={encontrosCronologicos} />
      )}
    </div>
  );
}
