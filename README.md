# Use and Setup

yarn add react-keypress or npm install react-keypress

# Usage

## Wrap your App with `KeyPressProvider` exported from `react-keypress`.

```javascript
import { KeyPressProvider } from "react-keypress";

<KeyPressProvider>
  <App />
</KeyPressProvider>;
```

## Import and use `registerCombination` and `unRegisterCombination` from `react-keypress`

```javascript
import { ShortCut } from "react-keypress";

const YourComponent = () => {
  const callback1 = () => {
    console.log("Some action on callback 1");
  };

  const callback2 = () => {
    console.log("Some action on callback 2");
  };

  return (
    <>
      <ShortCut shortCutStr="shift s" callback={callback1} id="uniqueId" />
      <ShortCut shortCutStr="shift d" callback={callback2} id="uniqueId" />
      ...
    </>
  );
};
```

## Get data of all active shorts using `useFetchActiveShortCuts` exported from `react-keypress`.

```javascript
import { useFetchActiveShortCuts } from "react-keypress";

const YourComponent = () => {
  const activeShortCuts = useFetchActiveShortCuts();
  return <>...</>;
};
```
