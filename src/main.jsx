import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import global_en from '../src/Lang/En/global.json'
import global_ar from '../src/Lang/Ar/global.json'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'

i18next.init({
  interpolation: {escapeValue: false},
  lng : "en",
  resources :{
    en:{
      global: global_en
    },
    ar:{
      global: global_ar
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <I18nextProvider i18n = {i18next}>
    <App />
    </I18nextProvider>
    </BrowserRouter>
  </StrictMode>,
  
)
