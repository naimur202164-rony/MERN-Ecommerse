import React from "react";
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer.js";
export default function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
    <Header/>
    <Footer/>
    </Router>
  );
}
