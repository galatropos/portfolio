import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from "react-router";
import  { ProviderLanguage } from './context/Language.jsx';
import { ProviderToggle } from './context/Toggle.jsx';

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <ProviderLanguage >
            <ProviderToggle >
                <App />
            </ProviderToggle>
        </ProviderLanguage>
    </HashRouter>
)
