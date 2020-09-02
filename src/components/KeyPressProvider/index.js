import React, { useReducer, createContext, useEffect } from "react";

export const ReactKeyPressContext = createContext();

const initialState = {
  active: [],
  listener: new window.keypress.Listener(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SHORTCUT":
      return {
        ...state,
        active: [...state.active, action.payload],
      };
    case "DEL_SHORTCUT":
      return {
        ...state,
        active: state.active.filter((item) => {
          return (
            item.id !== action.payload.id ||
            item.shortCutStr !== action.payload.shortCutStr
          );
        }),
      };
    case "SET_LISTENER":
      return {
        ...state,
        listener: action.listener,
      };
    default:
      throw new Error();
  }
};

const ReactKeyPressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ReactKeyPressContext.Provider value={[state, dispatch]}>
        {children}
      </ReactKeyPressContext.Provider>
    </>
  );
};

export default ReactKeyPressProvider;
