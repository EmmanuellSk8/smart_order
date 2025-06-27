import { createRoot } from 'react-dom/client'
import './index.css'
import WaitStaffPanel from './pages/WaitStaffPanel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OrderPanel from './pages/OrderPanel'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/wait-staff" element={<WaitStaffPanel />} />
    <Route path="/order-panel" element={<OrderPanel />} />
  </Routes>
  </BrowserRouter>,
)
