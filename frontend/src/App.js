import React from "react";
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer.js";
import Home from "./components/Home/Home.js";
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
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}
