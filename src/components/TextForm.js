import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // event.target.value gets textarea content, setText() updates state
  // Makes textarea a controlled component(input value controlled by React state)
  // Triggered whenever the user types
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to uppercase!", "success");
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lowercase!", "success");
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text has been capitalized succesfully!", "success");
  };

  const handleExtraSpaces = () => {
    // let newText = text.split(" ").filter(words => words !== "").join(" ");
    let newText = text.split(" ").filter(Boolean).join(" ");
    setText(newText);
    props.showAlert(
      "Extra spaces has been removed from the text successfully!",
      "success"
    );
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the text area!", "warning");
  };

  const wordsArray = text.split(/\s+/).filter(Boolean);
  const wordCount = wordsArray.length;
  const charCount = text.length;
  const readingTime = (wordCount / 200).toFixed(2);

  return (
    <div className="my-5">
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          {props.mode}
        </label>
      </div>
      <h3
        className="mb-4"
        style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
      >
        {props.heading}
      </h3>
      <div className="my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows={8}
          style={{
            color: props.mode === "Dark Mode" ? "white" : "black",
            backgroundColor: props.mode === "Dark Mode" ? "black" : "white",
            border:
              props.mode === "Dark Mode"
                ? "2px solid white"
                : "2px solid black",
          }}
        ></textarea>
      </div>
      <div>
        <button
          className="btn btn-success m-1"
          onClick={handleUpperCase}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          UPPERCASE
        </button>
        <button
          className="btn btn-warning m-1"
          onClick={handleLowerCase}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          LOWERCASE
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={handleCapitalize}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          CAPITALIZE
        </button>
        <button
          className="btn btn-info m-1"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          REMOVE SPACES
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={handleClearText}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          CLEAR TEXT
        </button>
      </div>
      <div
        className="my-3"
        style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
      >
        <h3 className="mb-3">Text Summary</h3>
        <p className="mb-1">WORDS: {wordCount}</p>
        <p className="mb-1">CHARACTERS: {charCount}</p>
        <p className="mb-1">READING TIME: {readingTime} minutes</p>
        <p className="mb-1">
          TEXT PREVIEW : {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </div>
  );
}
