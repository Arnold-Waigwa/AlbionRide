import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";
import FindaRide from "./pages/FindaRide";
import OfferaRide from "./pages/OfferaRide";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import Notfound from "./components/Notfound";
import PublishaRide from "./pages/PublishaRide";

function App() {
  const pages = useRoutes([
    { path: "/", element: <Home /> },
    { path: "login", element: <LoginSignup /> },
    { path: "findaride", element: <FindaRide /> },
    { path: "offeraride", element: <OfferaRide /> },
    { path: "signup", element: <Signup /> },
    { path: "contactus", element: <ContactUs /> },
    { path: "*", element: <Notfound /> },
    { path: "publisharide", element: <PublishaRide /> },
  ]);

  return <>{pages}</>;
}

export default App;
