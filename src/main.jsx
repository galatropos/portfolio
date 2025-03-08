import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {  HashRouter } from "react-router";
import { ProviderLanguage } from "./context/Language.jsx";
import { ProviderToggle } from "./context/Toggle.jsx";
import { ProviderTheme } from "./context/Theme.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ProviderLanguage>
      <ProviderToggle>
        <ProviderTheme>
          <App />
        </ProviderTheme>
      </ProviderToggle>
    </ProviderLanguage>
  </HashRouter>
);
