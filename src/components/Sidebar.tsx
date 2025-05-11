import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <nav className="space-y-2">
        <Link href="/admin" className="block hover:underline">Dashboard</Link>
        <Link href="/admin/upload" className="block hover:underline">Upload</Link>
      </nav>
    </aside>
  );
}
