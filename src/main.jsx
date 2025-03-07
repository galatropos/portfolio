import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import  { ProviderLanguage } from './context/Language.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ProviderLanguage >
        <App />
        </ProviderLanguage>
    </BrowserRouter>
)
