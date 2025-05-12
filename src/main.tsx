import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import SignInPage from "./pages/account/SignInPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account/signin" element={<SignInPage />} />
        <Route
          path="/account/contact-sales"
          element={
            <>
              <h1>Contact sales</h1>
            </>
          }
        />
        <Route
          path="/account/forgot-password"
          element={<>
            <h1>Forgot password</h1>
            <p>Enter your email address and we will send you a link to reset your password.</p>
          </>}
        />
        <Route
          path="/account/create-account"
          element={<>
            <h1>Create a new account?</h1>
            <p>Enter your email address and we will send you a link to create a new account.</p>
          </>}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
