import React from "react";
import { useState } from "react";
import loadingimage from "../assets/loading.gif"
import mouseClick from "../assets/mouse-click.mp3";
import {Howl, Howler} from "howler";
import SoundButton from "./SoundButton";

const MLModel = () => {
  const [isloading, setisloading] = useState(false)
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  // Function to update the state and count words
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Split the text by whitespace to count words
    const words = newText.split(/\s+/);

    // Remove empty strings from the array (e.g., consecutive spaces)
    const filteredWords = words.filter((word) => word !== '');

    // Update the word count
    setWordCount(filteredWords.length);
  };

  async function query(data) {
    setisloading(true);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/Hari93/res",
      {
        headers: {
          Authorization: process.env.AUTH_KEY,
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    setisloading(true)
    const result = await response.json();
    return result;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText != "") {
      const resultText = query({ "inputs": inputText , "return_full_text": true }).then((response) => {
        setResult(response[0].generated_text);
        console.log(response);
        setisloading(false)
      });
    } else {
      setResult("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          id="inputText"
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
            handleTextChange(e)
            }
          }
          placeholder="Add the text that you want to summarize...."
          rows="15"
          cols="60"
        />

        <SoundButton/>
        
        <p><b><i>Word Count:</i></b> {wordCount}</p>
      </form>
      {      
      isloading && (
          <div className="--flex-center">
            <img src = {loadingimage} alt='Loading...'></img>
          </div>)
      }
      <div className="output-txt">{result && <p>{result}</p>}</div>
    </div>
  );
};

export default MLModel;
