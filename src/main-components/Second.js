import React, { useEffect } from "react";

import ShortCut from "../components/ShortCut";

const Second = () => {
  useEffect(() => {
    console.log("second mounted");
    return () => {
      console.log("second un-mounted");
    };
  }, []);
  return (
    <>
      <ShortCut
        id="second"
        shortCutStr="shift m"
        callback={() => console.log("shift m pressed!" + "second")}
      />
      <div className="second">Second Component</div>
    </>
  );
};

export default Second;
