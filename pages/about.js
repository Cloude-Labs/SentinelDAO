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
    </div>
  );
}
