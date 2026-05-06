import Image from "next/image";
import Link from "next/link";
import { getEncontrosCronologicos } from "@/lib/encontros";

function thumbnailUrl(youtube_id: string) {
  return `https://img.youtube.com/vi/${youtube_id}/mqdefault.jpg`;
}

function youtubeUrl(youtube_id: string) {
  return `https://www.youtube.com/watch?v=${youtube_id}`;
}

export function Encontros() {
  const ultimos = getEncontrosCronologicos()
    .filter((e) => e.youtube_id)
    .slice(0, 3);

  return (
    <section
      id="encontros"
      className="py-16 md:py-32 bg-marrom-profundo text-pergaminho"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.35em] text-dourado mb-6">
            ENCONTROS · TODA QUARTA
          </p>
          <h2 className="text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
            Toda quarta, 19h.
            <br />
            <span className="text-dourado">Pela Palavra, capítulo por capítulo.</span>
          </h2>
          <p className="mt-6 text-pergaminho/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Já caminhamos por João inteiro. Agora estamos em Atos. Toda semana,
            um novo encontro no canal. Bora?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {ultimos.map((ep) => (
            <a
              key={`${ep.livro}-${ep.capitulo}`}
              href={youtubeUrl(ep.youtube_id)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Assistir encontro ${ep.livro} ${ep.capitulo}: ${ep.titulo}`}
              className="group border border-pergaminho/10 rounded-xl overflow-hidden bg-marrom/30 hover:border-dourado/60 transition-colors block"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={thumbnailUrl(ep.youtube_id)}
                  alt={`Capa do encontro ${ep.titulo}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-marrom-profundo/40">
                  <div className="w-14 h-14 rounded-full bg-dourado flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-marrom-profundo ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[0.25em] text-dourado/80 mb-2">
                  {ep.livro.toUpperCase()} {ep.capitulo}
                </p>
                <h3 className="text-base leading-snug text-pergaminho group-hover:text-dourado transition-colors">
                  {ep.titulo}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/encontros"
            className="inline-block rounded-full border border-dourado text-dourado px-8 py-4 text-sm tracking-wider hover:bg-dourado hover:text-marrom-profundo transition-colors"
          >
            VER TODOS OS ENCONTROS
          </Link>
          <a
            href="https://youtube.com/@osperegrinoz"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full text-pergaminho/70 hover:text-pergaminho px-4 py-4 text-sm tracking-wider transition-colors"
          >
            INSCREVER NO CANAL
          </a>
        </div>
      </div>
    </section>
  );
}
