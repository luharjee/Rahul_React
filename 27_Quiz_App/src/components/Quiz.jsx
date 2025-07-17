import React from "react";
import { Data } from "./Data";
import { useState } from "react";

const Quiz = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex((i) => i + 1);
    } else {
      let scoreVal = document.querySelector(".score");
      scoreVal.innerHTML = `<h2> Your Score : ${score}/7</h2>`;

      let replay = document.querySelector("#next");

      replay.innerHTML = "Play Again";
      replay.classList.add("reset");

      document.querySelector(".quiz").innerHTML = "";

      const reset = document.querySelector(".reset");
      reset.addEventListener("click", () => {
        window.location.reload();
      });
    }

    const checked = document.querySelectorAll(".checkedValue");
    checked.forEach((check) => {
      check.checked = false;
    });
  };

  console.log(data.length);

  const handleInput = (e) => {
    const ans = e.target.value;
    console.log(ans);

    if (ans == data[index].ans) {
      setScore((s) => s + 1);
    }
  };
  console.log(score);

  return (
    <div className="container">
      <div className="quiz">
        <div>
          <h2>Q : {data[index].q}</h2>
        </div>
        <div className="ans">
          <input
            type="radio"
            name="select"
            onChange={handleInput}
            value={data[index].a}
            className="checkedValue"
          />
          <p>A: {data[index].a}</p>
        </div>

        <div className="ans">
          <input
            type="radio"
            name="select"
            onChange={handleInput}
            value={data[index].b}
            className="checkedValue"
          />
          <p>B: {data[index].b}</p>
        </div>

        <div className="ans">
          <input
            type="radio"
            name="select"
            onChange={handleInput}
            value={data[index].c}
            className="checkedValue"
          />
          <p>C: {data[index].c}</p>
        </div>

        <div className="ans">
          <input
            type="radio"
            name="select"
            onChange={handleInput}
            value={data[index].d}
            className="checkedValue"
          />
          <p>D: {data[index].d}</p>
        </div>
      </div>

      <div>
        <div className="score"></div>
        <button id="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
