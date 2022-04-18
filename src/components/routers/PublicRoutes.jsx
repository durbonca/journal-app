import { Route, Redirect } from "react-router-dom"

export const PublicRoutes = ({ component: Component, loggedIn, ...rest }) => {
    return <Route {...rest} component={ (props) => 
        loggedIn ? ( <Redirect to="/" /> ) : ( <Component {...props} /> )
    }/>
}
