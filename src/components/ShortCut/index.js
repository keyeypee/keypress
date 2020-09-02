import { useEffect, useContext } from "react";

import { ReactKeyPressContext } from "../KeyPressProvider";

const ShortCut = ({ shortCutStr, id, callback }) => {
  const [state, dispatch] = useContext(ReactKeyPressContext);

  useEffect(() => {
    state.listener.simple_combo(shortCutStr, callback);
    dispatch({
      type: "ADD_SHORTCUT",
      payload: {
        shortCutStr,
        id,
      },
    });
    return () => {
      state.listener.unregister_combo(shortCutStr);
      dispatch({
        type: "DEL_SHORTCUT",
        payload: {
          shortCutStr,
          id,
        },
      });
    };
  }, []);

  return null;
};

export default ShortCut;
