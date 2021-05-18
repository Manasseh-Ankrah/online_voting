import './App.css';
import Login from './Login_Page/Login';
import Main_Vote from './Vote_Component1/Main_Vote';
import AdminLogin from './AdminComponent/AdminLogin';
import AdminPage from './AdminComponent/AdminPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


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

          <Route path="/admin_login">
             <AdminLogin /> 
          </Route>

          <Route path="/admin_page">
             <AdminPage /> 
          </Route> 
        </Switch>
      </Router>


  );
}

export default App;
