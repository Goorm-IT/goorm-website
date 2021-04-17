import Header from "components/Header";
import Home from "routes/Home";
import Members from "routes/Members";
import Projects from "routes/Projects";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;