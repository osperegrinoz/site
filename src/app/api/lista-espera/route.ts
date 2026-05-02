import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
  }

  const linha = `${new Date().toISOString()},${email}\n`;
  const dir = path.join(process.cwd(), "data");
  const arquivo = path.join(dir, "lista-espera.csv");

  try {
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(arquivo, linha, "utf8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Falha ao salvar" }, { status: 500 });
  }
}
