import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/Login";
import ProfilePage from "./components/ProfilePage"
import EditUser from "./components/EditUser";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //  <LoginForm/>
    // </div>
    <Router>
    <div className="App">
      

      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/profilepage" component={ProfilePage} />
        <Route exact path="/edit/" component={EditUser} />
      
      </Switch>
    </div>
  </Router>
  );
}

export default App;
