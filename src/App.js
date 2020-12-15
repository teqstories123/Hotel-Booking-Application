import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
<Router>
      <div>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/details">
            <DetailPage />
          </Route>
          <Route path="/bookings">

          </Route>
        </Switch>
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
