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
  };

  // converts the text into lower case
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // String → Array → Transform → Array → String → State → UI
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  // removes the extra spaces from the text to format it
  const handleExtraSpaces = () => {
    // let newText = text.split(" ").filter(words => words !== "").join(" ");
    let newText = text.split(" ").filter(Boolean).join(" ");
    setText(newText);
  };

  // clears the text
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  // text summary
  const wordsArray = text.split(/\s+/).filter(Boolean);
  const wordCount = wordsArray.length;
  const charCount = text.length;
  const readingTime = (wordCount / 200).toFixed(2);

  return (
    <div className="my-5">
      <h3>{props.heading}</h3>
      <div className="my-3">
        {/* onChange → updates state on typing */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows={8}
        ></textarea>
      </div>
      <div>
        <button
          className="btn btn-success mx-2"
          onClick={handleUpperCase}
          disabled={text.length === 0}
        >
          UPPERCASE
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={handleLowerCase}
          disabled={text.length === 0}
        >
          LOWERCASE
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCapitalize}
          disabled={text.length === 0}
        >
          CAPITALIZE
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          REMOVE EXTRA SPACES
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={handleClearText}
          disabled={text.length === 0}
        >
          CLEAR TEXT
        </button>
      </div>
      <div className="my-3">
        <h3 className="mb-3">Text Summary</h3>
        <p>WORDS: {wordCount}</p>
        <p>CHARACTERS: {charCount}</p>
        <p>READING TIME: {readingTime} minutes</p>
        <p>TEXT PREVIEW : {text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
