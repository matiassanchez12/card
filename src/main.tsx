import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Chakra from "./theme/Chakra";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Chakra>
      <App />
    </Chakra>
  </React.StrictMode>
);
