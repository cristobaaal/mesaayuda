import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//routing
import PrivateRoute from './component/routing/PrivateRoute';

//Screems
import PrivateScreen from './component/screens/PrivateScreen';
import LoginScreen from './component/screens/login/LoginScreen';
import RegisterScreen from './component/screens/register/RegisterScreen';
//porceso de evaluacion de vistas admin
import adminHome from './component/screens/adminpage/home';
//porceso de evaluacion de vistas admin
import userHome from './component/screens/userpage/home'

const App = () => {
  return (
    
     <Router>
<div className="app">
  <Switch>
    <PrivateRoute exact path="/" component={PrivateScreen} />
    <Route exact path="/login" component={LoginScreen} />
    <Route exact path="/register" component={RegisterScreen} />
    {/* rutas del administrador*/}
    <Route exact path="/adminhome" component={adminHome}/>
    {/*rutas del usuario*/}
    <Route exact path="/userhome" component={userHome}/>

    {/*<Route exact path="/forgotPasswor" component={ForgotPasswordScreen} />
    <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} />*/}

  </Switch>
</div>
     </Router>

  );
}

export default App;
