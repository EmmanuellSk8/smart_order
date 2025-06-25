import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WaitStaffPanel from './pages/WaitStaffPanel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WaitStaffPanel/>
  </StrictMode>,
)
