// src/app/admin/page.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [files, setFiles] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);

  const fetchFiles = async () => {
    const res = await fetch('/api/files'); // Tu peux remplacer par une fausse liste si besoin
    const data = await res.json();
    setFiles(data);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setUrl(data.url);
    setUploading(false);
    fetchFiles();
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
  <div>
    <h2 className="text-xl font-bold mb-6">Admin</h2>
    <nav className="space-y-4">
      <a href="#" className="block text-gray-700 hover:text-blue-600">Tableau de bord</a>
      <a href="#" className="block text-gray-700 hover:text-blue-600">Vidéos</a>
      <a href="#" className="block text-gray-700 hover:text-blue-600">Images</a>
      <a href="#" className="block text-gray-700 hover:text-blue-600">Texte</a>
    </nav>
  </div>

  {/* Lien de retour */}
  <div className="mt-10">
    <a
      href="/"
      className="block text-sm text-gray-500 hover:text-blue-600"
    >
      ← Retour au site
    </a>
  </div>
</aside>


      {/* Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Dashboard Admin</h1>

        <form onSubmit={handleUpload} className="mb-6">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="border p-2 mr-4"
          />
          <button
            type="submit"
            disabled={uploading}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {uploading ? 'Envoi...' : 'Uploader'}
          </button>
        </form>

        {url && (
          <div className="mb-4">
            Fichier uploadé : <a href={url} target="_blank" className="underline text-blue-700">{url}</a>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4">Fichiers Uploadés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {files.map((file, index) => (
            <div key={index} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <span>{file.filename}</span>
              <a href={file.url} target="_blank" className="text-blue-600 underline">Voir</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
