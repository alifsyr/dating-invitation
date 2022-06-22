import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Navbar from "./Navbar";
import Story from "./Story";
import Answer from "./Answer";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stories">
              <Story />
            </Route>
            <Route path="/answer">
              <Answer />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
