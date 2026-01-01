// Imports useState hook to manage component state, useState allows the component to store and update data
import React, { useState } from "react";

export default function TextForm(props) {
  // setText → function to update state
  const [text, setText] = useState("");

  // event.target.value gets textarea content, setText() updates state
  // Makes textarea a controlled component(input value controlled by React state)
  // Triggered whenever the user types
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Updates state → triggers re-render, UI updates automatically
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to uppercase!", "success");
  };

  // converts the text into lower case
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lowercase!", "success");
  };

  // String → Array → Transform → Array → String → State → UI
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text has been capitalized succesfully!", "success");
  };

  // removes the extra spaces from the text to format it
  const handleExtraSpaces = () => {
    // let newText = text.split(" ").filter(words => words !== "").join(" ");
    let newText = text.split(" ").filter(Boolean).join(" ");
    setText(newText);
    props.showAlert(
      "Extra spaces has been removed from the text successfully!",
      "success"
    );
  };

  // clears the text
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the text area!", "warning");
  };

  // text summary
  const wordsArray = text.split(/\s+/).filter(Boolean);
  const wordCount = wordsArray.length;
  const charCount = text.length;
  const readingTime = (wordCount / 200).toFixed(2);

  return (
    <div className="my-5">
      {/* light/dark mode starts */}
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
      {/* light/dark mode ends */}
      <h3 style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}>
        {props.heading}
      </h3>
      <div className="my-3">
        {/* onChange → updates state on typing */}
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
          className="btn btn-success mx-2"
          onClick={handleUpperCase}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          UPPERCASE
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={handleLowerCase}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          LOWERCASE
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCapitalize}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          CAPITALIZE
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
          style={{ color: props.mode === "Dark Mode" ? "white" : "black" }}
        >
          REMOVE EXTRA SPACES
        </button>
        <button
          className="btn btn-danger mx-2"
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
        <p>WORDS: {wordCount}</p>
        <p>CHARACTERS: {charCount}</p>
        <p>READING TIME: {readingTime} minutes</p>
        <p>TEXT PREVIEW : {text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
