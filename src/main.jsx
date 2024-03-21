import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import '@fontsource-variable/onest'
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Analytics/>
    <App />
  </BrowserRouter>
)
