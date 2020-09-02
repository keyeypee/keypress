import React from "react";

import useFetchActiveShortCuts from "../hooks/useFetchActiveShortCuts";

const Active = () => {
  const active = useFetchActiveShortCuts();
  return (
    <>
      <div className="active">
        Active ShortCuts are
        <ul>
          {active.map((item, i) => (
            <li key={`index_i`}>
              {item.shortCutStr} - id: {item.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Active;
