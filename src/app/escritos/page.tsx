import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSubstackPosts } from "@/lib/substack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escritos · Peregrinoz",
  description: "Textos de aprofundamento sobre fé, caminhada e Palavra.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function EscritosPage() {
  const posts = await getSubstackPosts();

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

          {posts.length === 0 ? (
            <p className="text-marrom/50">Nenhum escrito publicado ainda.</p>
          ) : (
            <ol className="space-y-12">
              {posts.map((post) => (
                <li key={post.url}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <time className="text-xs tracking-widest text-marrom/40 mb-2 block">
                      {formatDate(post.date)}
                    </time>
                    <h2 className="text-2xl text-marrom group-hover:text-dourado transition-colors mb-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-marrom/70 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="inline-block mt-3 text-xs tracking-widest text-dourado group-hover:underline">
                      LER NO SUBSTACK →
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          )}

          <div className="mt-20 pt-12 border-t border-marrom/10 text-center">
            <p className="text-marrom/60 text-sm mb-4">
              Receba os próximos escritos diretamente no seu e-mail.
            </p>
            <a
              href="https://osperegrinoz.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-marrom text-pergaminho px-8 py-4 text-sm tracking-wider hover:bg-marrom-profundo transition-colors"
            >
              ASSINAR NO SUBSTACK
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
