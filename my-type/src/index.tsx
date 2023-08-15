import React, { useState } from "react";
import ReactDOM from "react-dom";

type AppProps = {
  item: string;
};
function App({ item }: AppProps) {
  const [fabricColor, setFabricColor] = useState("purple");
  return (
    <div>
      <h1>
        {fabricColor} {item}
      </h1>
      <button onClick={() => setFabricColor("blue")}>
        Make the Jacket Blue
      </button>
    </div>
  );
}

ReactDOM.render(<App item="ss" />, document.getElementById("root"));
