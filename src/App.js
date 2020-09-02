import React, { useState } from "react";
import "./App.css";
import First from "./main-components/First";
import Second from "./main-components/Second";
import Active from "./main-components/Active";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="wrap">
        {show && <First />}
        <Second />
        <Active />
      </div>
      <button onClick={() => setShow(!show)}>
        {!show ? "Show First" : "Hide First"}
      </button>
    </>
  );
}

export default App;
