import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Contact from "./pages/Contact/Contact";
import Log from "./pages/Log/Log";
import About from "./pages/About/About";
import FAQ from "./pages/FAQ/FAQ";
import CookiesPrivacyPage from "./pages/cookies/Cookie/Cookie";
import Policy from "./pages/cookies/another/policyPage";
import Timeline from "./timeline/Timeline";
import "./App.scss";

// Import i18n configuration
import i18n from './i18n';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  console.log("App component rendered");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="swimmingpaddle" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="logIn" element={<Log />} />
          <Route path="about" element={<About />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="CookiesPrivacyPage" element={<CookiesPrivacyPage />} />
          <Route path="cookies-policy" element={<Policy />} />
          <Route path="timeline" element={<Timeline />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
