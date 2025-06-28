import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OrderPanel from './pages/OrderPanel'
import App from './components/waitstaff/App'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/wait-staff" element={<App/>} />
    <Route path="/order-panel" element={<OrderPanel/>} />
  </Routes>
  </BrowserRouter>,
)