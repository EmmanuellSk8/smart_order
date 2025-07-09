import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OrderPanel from './pages/OrderPanel'
import { Welcome } from './components/Welcome'
import WaitStaffPanel from './pages/WaitStaffPanel' 

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/wait-staff" element={<WaitStaffPanel/>} />
    <Route path="/order-panel" element={<OrderPanel/>} />
  </Routes>
  </BrowserRouter>,
)