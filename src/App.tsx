import React from "react";
import Header from "./components/Header/index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CoursesPage from "./components/CoursesPage";
import Login from "./components/Login";
import BlogPage from "./components/BlogPage/index";
import ScrollToTop from "./components/ScrollToTop";
import BlogPostPage from "./components/BlogPostPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { systemReducer } from "./store/system/reducers";
const store = createStore(systemReducer);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
