import React from "react";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CoursesPage from "./components/CoursesPage";
import Login from "./components/Login";
import BlogPage from "./components/BlogPage/index";
import ScrollToTop from "./components/ScrollToTop";
import BlogPostPage from "./components/BlogPostPage";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/blog/posts/:id" component={BlogPostPage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
