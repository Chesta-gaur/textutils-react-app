import { useState } from "react";
import "./App.css";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("Light Mode");

  const toggleMode = () => {
    if (mode === "Light Mode") {
      setMode("Dark Mode");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("Light Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <div className="container">
        <TextForm
          heading="Enter the text to analyze..."
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
    </>
  );
}

export default App;
