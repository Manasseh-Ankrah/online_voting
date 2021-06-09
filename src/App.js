import "./App.css";
import Login from "./Login_Page/Login";
import Main_Vote from "./Vote_Component1/Main_Vote";
import AdminLogin from "./AdminComponent/AdminLogin";
import AdminPage from "./AdminComponent/AdminPage";
// import AdminLogin from "./AdminComponent/AdminLogin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Message from "./Vote_Message/Message";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <Login />
          </div>
        </Route>

        <Route path="/main_vote">
          <Main_Vote />
        </Route>

        <Route path="/main_results">
          <AdminLogin />
        </Route>

        <Route path="/admin_login">
          <AdminLogin />
        </Route>

        <Route path="/vote_status">
          <Message />
        </Route>

        <Route path="/admin_page">
          <AdminPage />
        </Route>


        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
}

export default App;
