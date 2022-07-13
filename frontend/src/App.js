import React from "react";
import Header from "./components/layout/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
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
      <Header />
    </Router>
  );
}
