import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-6 bg-gray-800 flex justify-between items-center">
      <h1 className="text-2xl font-bold">SentinelDAO</h1>
      <div className="space-x-4">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/features" className="hover:underline">Features</Link>
        <Link href="/contact" className="hover:underline">Contact</Link> {/* Added Contact link */}
      </div>
    </nav>
  );
}
