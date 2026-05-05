"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ListaEspera() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lista-espera", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="lista-de-espera"
      className="relative py-16 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs tracking-[0.35em] text-marrom/60 mb-6">
          LISTA DE ESPERA
        </p>
        <h2 className="text-3xl md:text-5xl leading-tight text-marrom mb-6">
          Seja o primeiro a
          <br />
          <span className="text-dourado">caminhar com a gente.</span>
        </h2>
        <p className="text-marrom/80 max-w-lg mx-auto mb-10">
          Entre pra lista e receba o primeiro capítulo do livro no seu inbox,
          os episódios dos Encontros antes de estrearem, e convite pro beta
          do app.
        </p>

        {status === "success" ? (
          <div className="rounded-2xl border border-dourado bg-dourado/10 px-6 py-8 text-marrom">
            <p className="text-lg">
              Recebemos. Em breve você recebe um e-mail nosso.
            </p>
            <p className="mt-2 text-sm text-marrom/70">
              Se não aparecer, dá uma olhada na caixa de spam.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="flex-1 rounded-full border border-marrom/20 bg-pergaminho-claro px-6 py-4 text-marrom placeholder:text-marrom/40 focus:outline-none focus:border-dourado transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-marrom text-pergaminho px-8 py-4 text-sm tracking-wider hover:bg-marrom-profundo transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "ENVIANDO..." : "QUERO ENTRAR"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm text-red-800">
            Deu um problema aqui. Tenta de novo em instantes.
          </p>
        )}

        <p className="mt-8 text-xs text-marrom/50">
          Sem spam. Sem venda de dados. Só atualizações reais da caminhada.
        </p>
      </div>
    </section>
  );
}
