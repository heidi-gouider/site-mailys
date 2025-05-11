// import { NextRequest, NextResponse } from 'next/server';
// import { IncomingForm } from 'formidable';
// import fs from 'fs';
// import { promisify } from 'util';

// const parseForm = promisify((req: any, cb: any) => new IncomingForm().parse(req, cb));

// export async function POST(req: NextRequest) {
//   const form = new IncomingForm();
//   form.uploadDir = '/tmp';
//   form.keepExtensions = true;

//   const [fields, files]: any = await parseForm(req);

//   // Pour simplifier, on renvoie le nom du fichier local
//   const file = files.file[0];
//   return NextResponse.json({ url: file.filepath });
// }
