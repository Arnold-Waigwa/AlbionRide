import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";
import FindaRide from "./pages/FindaRide";
import OfferaRide from "./pages/OfferaRide";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import SafetyandGuidelines from "./pages/SafetyandGuidelines";
import TermsandServices from "./pages/TermsandServices";
import ContactUs from "./pages/ContactUs";
import Notfound from "./components/Notfound";

function App() {
  const pages = useRoutes([
    { path: "/", element: <Home /> },
    { path: "login", element: <LoginSignup /> },
    { path: "findaride", element: <FindaRide /> },
    { path: "offeraride", element: <OfferaRide /> },
    { path: "signup", element: <Signup /> },
    { path: "safetyandguidelines", element: <SafetyandGuidelines /> },
    { path: "termsandservices", element: <TermsandServices /> },
    { path: "contactus", element: <ContactUs /> },
    { path: "*", element: <Notfound /> },
  ]);

  return (
    <>
      <Navbar />
      {pages}
    </>
  );
}

export default App;
