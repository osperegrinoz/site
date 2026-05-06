import Image from "next/image";
import { CSSProperties } from "react";

export function Livro() {
  return (
    <section id="livro" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs tracking-[0.35em] text-marrom/60 mb-6">
            O LIVRO · MANIFESTO
          </p>
          <h2 className="text-4xl md:text-5xl leading-tight mb-8 text-marrom">
            Peregrinoz.
            <br />
            <span className="text-dourado">
              Para quem quer conhecer Jesus de verdade.
            </span>
          </h2>

          <div className="space-y-5 text-marrom/85 leading-relaxed">
            <p>
              21 capítulos, um para cada capítulo do Evangelho de João.
              Testemunho cru, texto bíblico aberto, e uma pergunta que você não
              vai conseguir devolver.
            </p>
            <p>
              Três partes. A primeira te diz por que você precisava disso. A
              segunda te mostra quem Jesus é, de perto. A terceira te pergunta:
              e agora, você vai seguir?
            </p>
            <p className="text-marrom italic border-l-2 border-dourado pl-5">
              &ldquo;Eu quero que você tenha um encontro real com Jesus através
              da Palavra e desenvolva um relacionamento honesto com Ele. O
              restante deixa com Ele.&rdquo;
              <span className="block mt-2 text-sm not-italic text-marrom/60">
                (Thiago Pastana, introdução)
              </span>
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-center border-t border-marrom/10 pt-8 max-w-sm">
            <Stat valor="21" label="Capítulos" />
            <Stat valor="3" label="Partes" />
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <CapaLivro />
        </div>
      </div>
    </section>
  );
}

function Stat({ valor, label }: { valor: string; label: string }) {
  return (
    <div>
      <div className="text-3xl text-dourado font-[family-name:var(--font-cinzel)]">
        {valor}
      </div>
      <div className="text-xs tracking-widest text-marrom/60 mt-1 uppercase">
        {label}
      </div>
    </div>
  );
}

function CapaLivro() {
  return (
    <div className="relative flex justify-center">
      {/* Sombra */}
      <div
        className="absolute bottom-[-16px] left-[10%] right-[10%] h-8 rounded-full"
        style={{ background: "rgba(20,10,3,0.45)", filter: "blur(20px)" }}
      />
      <Image
        src="/capalivro.png"
        width={380}
        height={520}
        alt="Capa do livro Peregrinoz"
        className="relative w-[280px] md:w-[380px] h-auto rounded-sm"
        style={
          {
            objectFit: "cover",
            rotate: "-2deg",
            filter: "drop-shadow(0 20px 40px rgba(20,10,3,0.5))",
          } as CSSProperties
        }
      />
    </div>
  );
}
