import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Configurer pour ne pas utiliser bodyParser par défaut
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  // Caster form en `any` pour éviter les erreurs de type
  const form = new formidable.IncomingForm() as any;
  form.uploadDir = path.resolve('public', 'uploads'); // Dossier pour stocker les fichiers
  form.keepExtensions = true;

  return new Promise<NextResponse>((resolve, reject) => {
    form.parse(req as any, (err: Error | null, fields: Record<string, string | string[]>, files: Record<string, formidable.File[]>) => {      if (err) {
        return reject(new NextResponse('Erreur lors de l\'upload', { status: 500 }));
      }

      const uploadedFile = files.file ? files.file[0] : null;
      if (!uploadedFile) {
        return reject(new NextResponse('Aucun fichier reçu', { status: 400 }));
      }

      const fileUrl = `/uploads/${uploadedFile.newFilename}`;

      // Renvoie la réponse avec l'URL du fichier uploadé
      return resolve(new NextResponse(JSON.stringify({ url: fileUrl }), { status: 200 }));
    });
  });
}

