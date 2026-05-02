import data from "../../content/encontros.json";

export interface Encontro {
  livro: string;
  capitulo: number;
  titulo: string;
  data: string;
  youtube_id: string;
}

export function getAllEncontros(): Encontro[] {
  return data as Encontro[];
}

export function getEncontrosCronologicos(): Encontro[] {
  return [...getAllEncontros()].sort((a, b) => (a.data < b.data ? 1 : -1));
}

export function getEncontrosPorLivro(): Record<string, Encontro[]> {
  const encontros = getAllEncontros();
  return encontros.reduce<Record<string, Encontro[]>>((acc, e) => {
    if (!acc[e.livro]) acc[e.livro] = [];
    acc[e.livro].push(e);
    return acc;
  }, {});
}
