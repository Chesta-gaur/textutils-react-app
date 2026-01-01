import { useState } from "react";
import "./App.css";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("Light Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "Light Mode") {
      setMode("Dark Mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("Light Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the text to analyze..."
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
