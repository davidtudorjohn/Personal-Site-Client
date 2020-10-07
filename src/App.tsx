import React from "react";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PortfolioPage from "./components/PortfolioPage";
import Login from "./components/Login";
import BlogPage from "./components/BlogPage/index";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
