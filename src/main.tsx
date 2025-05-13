import "./assets/css/style.css";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Club from "./pages/account/create/Club.tsx";
import Team from "./pages/account/create/Team.tsx";

// Importing lazy-loaded components
// These components will be loaded only when they are needed, improving the initial load time of the application.
const App = lazy(() => import("./pages/App.tsx"));
const CreateNewAccount = lazy(() => import("./pages/account/CreateNewAccount.tsx"));
const SignInPage = lazy(() => import("./pages/account/SignInPage.tsx"));
const ContactSales = lazy(() => import("./pages/ContactSales.tsx"));
const ForgotPassword = lazy(() => import("./pages/account/ForgotPassword.tsx"));
const PageNotFound = lazy(() => import("./layouts/PageNotFound.tsx"));

// Creating the root element for the React application
// This is where the React application will be rendered.
const root = document.getElementById("root") as HTMLElement;
const app = createRoot(root);

app.render(
  <Suspense
    fallback={
      <div className="flex items-center justify-center h-svh bg-white">
        Loading...
      </div>
    }
  >
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/account/signin" element={<SignInPage />} />
          <Route path="/account/contact-sales" element={<ContactSales />} />
          <Route path="/account/create/club" element={<Club />} />
          <Route path="/account/create/team" element={<Team />} />
          <Route path="/account/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/account/create-account"
            element={<CreateNewAccount />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Suspense>
);
