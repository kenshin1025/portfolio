import { useState } from "react";

const Game = () => {
  const Data = 1;

  const [Flow, setFlow] = useState([]);
  // let Flow:Function[] = [];

  function source() {
    return Data;
  }

  function result(input: number) {
    console.log(input);
    return input;
  }

  function flowCheck() {
    let data = source();
    for (const node of Flow) {
      data = node(data);
    }
    return result(data);
  }

  function plusOne(input: number) {
    return input + 1;
  }

  function addFunc(func: Function) {
    let f = Flow.slice();
    f.push(func);
    setFlow(f);
  }

  return (
    <div>
      <div className="border-solid border-2 w-10 ">{source()}</div>
      <div className="border-solid border-2 w-10 ">{flowCheck()}</div>
      <button className="btn btn-blue" onClick={() => addFunc(plusOne)}>
        +１を追加
      </button>
    </div>
  );
};

export default Game;
