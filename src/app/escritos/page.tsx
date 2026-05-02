import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllEscritos } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escritos — Peregrinoz",
  description: "Textos de aprofundamento sobre fé, caminhada e Palavra.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EscritosPage() {
  const escritos = getAllEscritos();

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs tracking-[0.35em] text-marrom/50 mb-4">
            PEREGRINOZ
          </p>
          <h1 className="text-4xl md:text-5xl text-marrom mb-4">Escritos</h1>
          <p className="text-marrom/70 text-lg leading-relaxed mb-16 max-w-xl">
            Textos de aprofundamento. Reflexões sobre a Palavra, a caminhada e o
            que significa seguir Jesus de verdade.
          </p>

          {escritos.length === 0 ? (
            <p className="text-marrom/50">Nenhum escrito publicado ainda.</p>
          ) : (
            <ol className="space-y-12">
              {escritos.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/escritos/${e.slug}`}
                    className="group block"
                  >
                    <time className="text-xs tracking-widest text-marrom/40 mb-2 block">
                      {formatDate(e.date)}
                    </time>
                    <h2 className="text-2xl text-marrom group-hover:text-dourado transition-colors mb-2">
                      {e.title}
                    </h2>
                    <p className="text-marrom/70 leading-relaxed">
                      {e.excerpt}
                    </p>
                    {e.tags.length > 0 && (
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {e.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-marrom/40 border border-marrom/15 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
