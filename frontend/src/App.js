import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://backend-service:5000/api/hello')
    //or use below for local docker deployment
    //fetch('http://localhost:4000/api/hello')
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
        <h1>NubesLearning Frontend</h1>
        <p>{message}</p>
    </div>
  );

}

export default App;