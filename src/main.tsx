import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import App from './pages/App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import SignInPage from './pages/account/SignInPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account/signin" element={<SignInPage />} />
        <Route path="/account/forgot-password" element={<>
          Plis insert your email, and reset your password
        </>} />
        <Route path="/account/create-account" element={<>
          Create new Account
        </>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
