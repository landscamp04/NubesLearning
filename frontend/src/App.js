import { useState } from "react";
import "./index.css"; // Assumes TailwindCSS is set up

function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Manual fetch function for the button only
  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/hello");
      // use "http://backend-service:5000/api/hello" inside Kubernetes
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Failed to fetch backend API.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 font-sans">
      {/* HEADER */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🌥️ NubesLearning</h1>
        <p className="text-lg mb-4">A cloud-native education prototype</p>
        <a
          href="https://github.com/landscamp04/NubesLearning"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub →
        </a>
      </header>

      {/* API TEST SECTION */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-10 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">📡 Test Backend API</h2>
        <button
          onClick={fetchApi}
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
        >
          {isLoading ? "Loading..." : "Fetch /api/hello"}
        </button>
        
        {message && (
          <p className="p-3 bg-gray-100 border rounded text-center">
            {message}
          </p>
        )}
        
        {!message && !isLoading && (
          <p className="p-3 bg-gray-100 border rounded text-center text-gray-500">
            Click the button to test your backend API
          </p>
        )}
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-10 max-w-xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">🧱 System Architecture</h2>
        <img
          src="/public/architecture.png"
          alt="System architecture"
          className="rounded-lg mx-auto max-w-full h-auto"
        />
        <p className="text-sm mt-2 text-gray-500">Infrastructure deployed with Terraform + EKS</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        Built by Landon (@landscamp04) • MIT License • Project Status: In Progress
      </footer>
    </div>
  );
}

export default App;