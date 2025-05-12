import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import SignInPage from "./pages/account/SignInPage.tsx";
import CreateNewAccount from "./pages/account/CreateNewAccount.tsx";

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
          element={
            <>
              <h1>Forgot password</h1>
              <p>
                Enter your email address and we will send you a link to reset
                your password.
              </p>
            </>
          }
        />
        <Route path="/account/create-account" element={<CreateNewAccount />} />
        <Route
          path="*"
          element={
            <article className="flex bg-white flex-col items-center justify-center h-svh gap-20">
              <header className="flex flex-col items-center gap-2">
                <h1 className="text-red-400">Page not found!</h1>
                <p className="text-gray-500 text-xl text-center">
                  Ponte en contacto con nosotros para obtener más información.
                </p>
              </header>
              <section>
                <Link
                  to="/"
                  className="rounded-full bg-white text-black px-4 py-2 border-2 border-black font-black hover:bg-black hover:text-white hover:border-none transiton-all duration-300 ease-in-out"
                >
                  Go home
                </Link>
              </section>
            </article>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
