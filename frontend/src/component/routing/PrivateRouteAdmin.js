import {Redirect, Route} from 'react-router-dom';

const PrivateRouteAdmin = ({component: Component, ...rest}) =>{
return(
    <Route 
    {...rest}
    render={
        (props) =>
localStorage.getItem("authToken") ? (
    <Component {...props}/>
    
):(
    <Redirect to="/"/>
)
    }
    
    />
);
};

export default PrivateRouteAdmin;