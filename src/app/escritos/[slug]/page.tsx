import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllEscritos, getEscrito } from "@/lib/mdx";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEscritos().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const escrito = getEscrito(slug);
  if (!escrito) return {};
  return {
    title: `${escrito.title} — Escritos Peregrinoz`,
    description: escrito.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function EscritoPage({ params }: Props) {
  const { slug } = await params;
  const escrito = getEscrito(slug);
  if (!escrito) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-2xl px-6">
          {/* Breadcrumb */}
          <Link
            href="/escritos"
            className="text-xs tracking-widest text-marrom/40 hover:text-marrom transition-colors mb-10 inline-block"
          >
            ← ESCRITOS
          </Link>

          <time className="text-xs tracking-widest text-marrom/40 mb-4 block">
            {formatDate(escrito.date)}
          </time>

          <h1 className="text-3xl md:text-5xl text-marrom leading-tight mb-6">
            {escrito.title}
          </h1>

          <p className="text-marrom/60 text-lg leading-relaxed border-l-2 border-dourado/40 pl-4 mb-12">
            {escrito.excerpt}
          </p>

          {/* Corpo do texto */}
          <div className="prose-escrito">
            <MDXRemote source={escrito.content} />
          </div>

          {/* Tags */}
          {escrito.tags.length > 0 && (
            <div className="flex gap-2 mt-12 flex-wrap pt-8 border-t border-marrom/10">
              {escrito.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-marrom/40 border border-marrom/15 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA Substack */}
          <div className="mt-12 p-6 bg-marrom/5 rounded-2xl border border-marrom/10 text-center">
            <p className="text-marrom/70 text-sm mb-4">
              Receba os próximos escritos por e-mail.
            </p>
            <a
              href="https://peregrinoz.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-marrom text-pergaminho px-6 py-3 text-sm tracking-wider hover:bg-marrom-profundo transition-colors"
            >
              ASSINAR NO SUBSTACK
            </a>
            {escrito.substack_url && (
              <p className="mt-4">
                <a
                  href={escrito.substack_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-marrom/40 hover:text-marrom transition-colors"
                >
                  Ver este texto no Substack →
                </a>
              </p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
