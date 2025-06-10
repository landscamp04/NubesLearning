import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaRocket, FaUsers, FaCloud, FaCogs } from "react-icons/fa";
import "./index.css"; // Assumes TailwindCSS is set up
//import architectureImg from 'C:/Users/Landon/Desktop/nubeslearning/frontend/src/assets/architecture.png';

function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Trigger page fade-in after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); // Small delay for smoother effect
    return () => clearTimeout(timer);
  }, []);

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
    <div className={`min-h-screen bg-gray-100 text-gray-800 font-sans transition-all duration-1000 ease-out ${
      isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      {/* HEADER BAR */}
      <header className="bg-gradient-to-r from-yellow-100 to-blue-100 border-b border-gray-200 shadow-sm mb-6">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-3 text-gray-800">🌥️ NubesLearning</h1>
            <p className="text-xl mb-6 text-gray-700">A cloud-native education prototype</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/landscamp04/NubesLearning"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-xl" />
                View on GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/landon-campos-6a1366176/"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="p-6">

      {/* PROJECT SUMMARY SECTION */}
      <section className="bg-gradient-to-r from-yellow-100 to-blue-100 rounded-2xl shadow-lg p-8 mb-10 max-w-4xl mx-auto border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <FaRocket className="text-blue-600" />
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            NubesLearning is a production-ready infrastructure project featuring
            containerized deployment with Docker, EKS-managed Kubernetes, and automated
            CI/CD with GitHub Actions. Designed for scale, simplicity, and learning.
          </p>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaUsers className="text-purple-600 text-center" />
            Mission Statement
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The goal of NubesLearning is to provide users with a comprehensive web-based platform 
            that enables colleges and educational institutions to better manage and maintain remote 
            learning environments with modern cloud-native technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaCloud className="text-blue-500" />
              Cloud Infrastructure
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Amazon EKS Kubernetes Management</li>
              <li>• Docker Containerization</li>
              <li>• Terraform Infrastructure as Code</li>
              <li>• Auto-scaling & Load Balancing</li>
            </ul>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaCogs className="text-green-500" />
              Development Features
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• GitHub Actions CI/CD Pipeline</li>
              <li>• React Frontend with Tailwind CSS</li>
              <li>• RESTful API Backend</li>
              <li>• Production-Ready Architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* API TEST SECTION */}
      <section className="bg-gradient-to-r from-yellow-100 to-blue-100 rounded-xl shadow-md p-6 mb-10 max-w-xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4 text-center">Test Backend API</h2>
        <button
          onClick={fetchApi}
          disabled={isLoading}
          className="text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
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
            Click the button to test the backend API
          </p>
        )}
      </section>

      {/* ARCHITECTURE SECTION - HOVER COMPONENT */}
      <section className=" text-center">
        <div
          className={`
            relative cursor-pointer transition-all duration-700 ease-out transform mx-auto
            ${isHovered 
              ? 'w-[600px] h-[500px] rounded-2xl shadow-2xl shadow-blue-300/30 scale-105' 
              : 'w-64 h-20 rounded-full shadow-lg shadow-blue-300/20 hover:shadow-blue-300/40'
            }
            bg-gradient-to-r from-yellow-100 to-blue-100
            border border-gray-200
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background glow effect */}
          <div className={`
            absolute inset-0 rounded-full transition-all duration-700
            ${isHovered ? 'rounded-2xl opacity-60' : 'opacity-30'}
            bg-gradient-to-r from-yellow-200 to-blue-200 blur-xl -z-10
          `} />
          
          {/* Content */}
          <div className="relative h-full w-full flex items-center justify-center p-4">
            {!isHovered ? (
              // Oval state - just the label
              <span className="text-gray-800 font-semibold text-xl tracking-wide">
                System Architecture
              </span>
            ) : (
              // Expanded state - image container
              <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                <h3 className="text-gray-800 font-bold text-2xl mb-3 text-center">
                  System Architecture
                </h3>
                
                {/* Image container - using your architectureImg */}
                <div className="w-full h-96 bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <img
                    //src={architectureImg}
                    src="/architecture.png"
                    alt="System architecture"
                    className="w-full h-full object-contain p-3"
                    onError={(e) => {
                      // Fallback to a styled placeholder if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div 
                    className="w-full h-full hidden items-center justify-center text-gray-600 text-sm text-center p-4"
                    style={{display: 'none'}}
                  >
                    <div>
                      <div className="text-4xl mb-2">📊</div>
                      <div>System Architecture Image</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 text-center mt-2">
                  Infrastructure deployed with Terraform + EKS
                </p>
              </div>
            )}
          </div>
          
          {/* Animated border effect */}
          <div className={`
            absolute inset-0 transition-all duration-700
            ${isHovered ? 'rounded-2xl' : 'rounded-full'}
            bg-gradient-to-r from-yellow-200 to-blue-200 opacity-0 hover:opacity-20
          `} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        Built by Landon (@landscamp04) • MIT License • Project Status: In Progress
      </footer>
      </div>
    </div>
  );
}

export default App;