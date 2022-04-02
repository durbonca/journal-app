import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { JournalScreen } from '../journal/JournalScreen'
import { AuthRouter } from '../routers/AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter} />     
        <Route exact path="/" component={JournalScreen} />
        <Redirect to="/auth/login" />
      </ Switch>
    </ Router>
  )
}
