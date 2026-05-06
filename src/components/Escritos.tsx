import Link from "next/link";
import { getSubstackPosts } from "@/lib/substack";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function stripHtml(html: string, max = 140) {
  const text = html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

export async function Escritos() {
  const posts = (await getSubstackPosts()).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      id="escritos"
      className="py-16 md:py-32 bg-pergaminho-claro"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.35em] text-marrom/60 mb-6">
            ESCRITOS · SUBSTACK
          </p>
          <h2 className="text-3xl md:text-5xl leading-tight max-w-3xl mx-auto text-marrom">
            Textos pra ler com calma.
            <br />
            <span className="text-dourado">
              Direto no seu e-mail, quando você quiser.
            </span>
          </h2>
          <p className="mt-6 text-marrom/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Reflexões de aprofundamento sobre a Palavra, a caminhada e o que
            significa seguir Jesus de verdade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-marrom/10 rounded-xl p-6 md:p-7 bg-pergaminho hover:border-dourado/60 transition-colors flex flex-col"
            >
              <time className="text-xs tracking-widest text-marrom/40 mb-3 block">
                {formatDate(post.date)}
              </time>
              <h3 className="text-lg md:text-xl text-marrom group-hover:text-dourado transition-colors leading-snug mb-3">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-sm text-marrom/70 leading-relaxed flex-1">
                  {stripHtml(post.excerpt)}
                </p>
              )}
              <span className="inline-block mt-5 text-xs tracking-widest text-dourado group-hover:underline">
                LER →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/escritos"
            className="inline-block rounded-full border border-marrom text-marrom px-8 py-4 text-sm tracking-wider hover:bg-marrom hover:text-pergaminho transition-colors"
          >
            VER TODOS OS ESCRITOS
          </Link>
          <a
            href="https://osperegrinoz.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full text-marrom/70 hover:text-marrom px-4 py-4 text-sm tracking-wider transition-colors"
          >
            ASSINAR NO SUBSTACK
          </a>
        </div>
      </div>
    </section>
  );
}
