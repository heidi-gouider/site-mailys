// app/api/files/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const uploadDir = path.resolve('public', 'uploads'); // Dossier des fichiers uploadés

  try {
    const files = await fs.promises.readdir(uploadDir);

    const fileList = files.map((file) => ({
      filename: file,
      url: `/uploads/${file}`,
    }));

    return NextResponse.json(fileList); // Retourne la liste des fichiers
  } catch (err) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
