export default function About() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold">About SentinelDAO</h2>
      <p className="mt-4">A decentralized AI-driven security auditor for smart contracts.</p>
      
      {/* Added Learn More button */}
      <a 
        href="https://sentineldao.io/docs" 
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Learn More
      </a>

      {/* Added section for benefits */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Why SentinelDAO?</h3>
        <ul className="mt-4 space-y-2 text-left">
          <li>🔒 Advanced AI-powered audits for improved contract security</li>
          <li>⚡ Real-time analysis to identify vulnerabilities</li>
          <li>💡 Transparent and immutable auditing results</li>
        </ul>
      </section>

      {/* Added Explore Features button */}
      <a 
        href="https://sentineldao.io/features" 
        className="mt-6 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Explore Features
      </a>
    </div>
  );
}
