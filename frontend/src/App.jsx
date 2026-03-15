import { useEffect, useState } from "react";
import Header from './ui/Header'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  },[]);

  return (
    <>
          <Header/>
    </>
  );
}

export default App;
