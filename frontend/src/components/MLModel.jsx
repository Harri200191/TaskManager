import React from "react";
import { useState } from "react";
import loadingimage from "../assets/loading.gif"
import mouseClick from "../assets/mouse-click.mp3";
import {Howl, Howler} from "howler";

const MLModel = () => {

  const SoundPlay = (src) => {
    const sound = new Howl(src);
    sound.play();
  };

  Howler.volume(1.0);

  const [isloading, setisloading] = useState(false)
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  async function query(data) {
    setisloading(true)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText != "") {
      const resultText = query({ "inputs": inputText , "return_full_text": true }).then((response) => {
        setResult(response[0].generated_text);
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
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add the text that you want to summarize...."
          rows="15"
          cols="60"
        />
        <button onClick={this.SoundPlay(mouseClick)} id = "clickButton" className="--butt" type="submit">
          Submit
        </button>
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
