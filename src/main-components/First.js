import React, { useEffect, useContext } from "react";

import ShortCut from "../components/ShortCut";
import { ReactKeyPressContext } from "../components/KeyPressProvider";

const First = () => {
  const [state] = useContext(ReactKeyPressContext);
  useEffect(() => {
    console.log("first mounted", state);
    return () => {
      console.log("first un-mounted", state);
    };
  }, []);
  const abc = () => console.log("shift m pressed!" + "first");
  return (
    <>
      <ShortCut id="first" shortCutStr="shift m" callback={abc} />
      <div className="first">First Component</div>
    </>
  );
};

export default First;
