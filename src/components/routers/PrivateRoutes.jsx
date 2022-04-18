import { Route, Redirect } from "react-router-dom"

export const PrivateRoutes = ({ component: Component, loggedIn, ...rest }) => {
    return (
            <Route {...rest} component={ (props) => 
                loggedIn ? ( <Component {...props}/> ) : ( <Redirect to="/auth/login" /> )
                } 
            />
        ) 
    }
