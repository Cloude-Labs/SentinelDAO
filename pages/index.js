import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>SentinelDAO - Decentralized AI Security Auditor</title>
      </Head>
      <Navbar />
      <main className="text-center py-20">
        <h1 className="text-4xl font-bold">AI-Powered Smart Contract Audits</h1>
        <p className="mt-4 text-lg">Ensuring blockchain security with decentralized governance.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 rounded-md hover:bg-blue-700">Get Started</button>
        <a href="/about" className="mt-6 block text-lg text-blue-400 hover:underline">Learn More</a> {/* Added 'Learn More' link */}
      </main>
      <Footer />
    </div>
  );
}
