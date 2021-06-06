import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//routing
import PrivateRouteUser from './component/routing/PrivateRouteUser';
import PrivateRouteAdmin from './component/routing/PrivateRouteAdmin'; 
//import PrivateRoute from './component/routing/PrivateRouteAdmin';

//Screems
import PrivateScreenAdmin from './component/screens/PrivateScreenAdmin';
import LoginScreen from './component/screens/login/LoginScreen';
import RegisterScreen from './component/screens/register/RegisterScreen';
//porceso de evaluacion de vistas admin
// import adminHome from './component/screens/adminpage/adminhome';
//porceso de evaluacion de vistas usuarios
// import userHome from './component/screens/userpage/home'

import PrivateScreenUser from './component/screens/PrivateScreenUser';
import "bootswatch/dist/lux/bootstrap.min.css"

const App = () => {
  return (
    
     <Router>
<div className="app container p-4">
  <Switch>
    <PrivateRouteAdmin exact path="/homeadmin" component={PrivateScreenAdmin} />
    <PrivateRouteUser exact path="/homeuser" component={PrivateScreenUser} />
    <Route exact path="/" component={LoginScreen} />
    <Route exact path="/register" component={RegisterScreen} />
    {/* rutas del administrador*/}
    {/* <Route exact path="/adminhome" component={adminHome}/> */}
    {/*rutas del usuario*/}
    {/* <Route exact path="/userhome" component={userHome}/> */}

    {/*<Route exact path="/forgotPasswor" component={ForgotPasswordScreen} />
    <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} />*/}

  </Switch>
</div>
     </Router>

  );
}

export default App;
