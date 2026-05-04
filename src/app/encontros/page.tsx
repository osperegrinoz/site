import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EncontrosView } from "@/components/EncontrosView";
import { getEncontrosCronologicos, getEncontrosPorLivro } from "@/lib/encontros";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encontros · Peregrinoz",
  description: "Leitura compartilhada comentada. Um capítulo por encontro, toda quarta.",
};

export default function EncontrosPage() {
  const cronologicos = getEncontrosCronologicos();
  const porLivro = getEncontrosPorLivro();

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.35em] text-marrom/50 mb-4">
            PEREGRINOZ
          </p>
          <h1 className="text-4xl md:text-5xl text-marrom mb-4">Encontros</h1>
          <p className="text-marrom/70 text-lg leading-relaxed mb-16 max-w-xl">
            Toda quarta a gente se reúne para uma leitura compartilhada comentada.
            Um capítulo da Bíblia por encontro: cada um lê um versículo,
            o Espírito Santo guia o resto.
          </p>

          <EncontrosView
            encontrosCronologicos={cronologicos}
            encontrosPorLivro={porLivro}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
