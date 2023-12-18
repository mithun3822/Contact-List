import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import NewContact from "./components/NewContact";
import ContactDetails from "./components/ContactDetails";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <div id="page-Home-wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={NewContact} />
            <Route path="/persons/:id" component={ContactDetails} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
