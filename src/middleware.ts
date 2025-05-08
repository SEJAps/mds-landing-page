// import { defineMiddleware } from "astro/middleware";
// import { mook } from "./config";
import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

// export const onRequest = defineMiddleware((context, next) => {
//   context.locals.data = {
//     ...mook
//   };
//   const language = context.request.headers.get("Accept-Language") || "es"; // Default to 'en' if not set
//   const preferredLanguage = language.split(",")[0]; // Get the first language preference
//   const supportedLanguages = ["en", "es", "fr"]; // Define supported languages
//   console.log("Language:", preferredLanguage); // Log the language header for debugging
//   // Continue to the next middleware or route handler
//   return next();
// });
const isProptectedRoute = createRouteMatcher(["/dashboard"]);
export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();
  if (isProptectedRoute(context.request) && !userId) {
    return redirectToSignIn();
  }
})

