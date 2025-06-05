import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import RootStore from "./RootStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={RootStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
