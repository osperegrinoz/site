import { App } from "@/components/App";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ListaEspera } from "@/components/ListaEspera";
import { Livro } from "@/components/Livro";
import { Manifesto } from "@/components/Manifesto";
import { Encontros } from "@/components/Encontros";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ComoFunciona />
        <Manifesto />
        <Livro />
        <App />
        <Encontros />
        <ListaEspera />
      </main>
      <Footer />
    </>
  );
}
