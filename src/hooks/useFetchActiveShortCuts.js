import { useContext } from "react";
import { ReactKeyPressContext } from "../components/KeyPressProvider";

const useFetchActiveShortCuts = () => {
  const [state] = useContext(ReactKeyPressContext);
  return state.active;
};

export default useFetchActiveShortCuts;
