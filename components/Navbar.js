import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-6 bg-gray-800 flex justify-between">
      <h1 className="text-2xl font-bold">SentinelDAO</h1>
      <div className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/features">Features</Link>
      </div>
    </nav>
  );
}
