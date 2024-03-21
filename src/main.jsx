import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import './index.css'
import '@fontsource-variable/onest'
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Analytics/>
    <App />
  </BrowserRouter>
)
