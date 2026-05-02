import { App } from "@/components/App";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ListaEspera } from "@/components/ListaEspera";
import { Livro } from "@/components/Livro";
import { Manifesto } from "@/components/Manifesto";
import { Peregrinagem } from "@/components/Peregrinagem";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Livro />
        <App />
        <Peregrinagem />
        <ListaEspera />
      </main>
      <Footer />
    </>
  );
}
