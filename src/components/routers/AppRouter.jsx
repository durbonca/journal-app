import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { JournalScreen } from '../journal/JournalScreen'
import { AuthRouter } from '../routers/AuthRouter';
import { firebase } from '../../firebase/firebase-config';
import { login } from '../../actions/auth';
import { startLoadingNotes } from '../../actions/notes';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged( async (user) => {
      if(user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setLoggedIn(true);
        dispatch( startLoadingNotes(user.uid));
      }else{
        setLoggedIn(false);
      }
      setChecking(false);
    })
  }, [dispatch, setChecking]);

  if(checking) {
    return <h1>Wait...</h1>
  }

  return (
    <Router>
      <Switch>
        <PublicRoutes path="/auth" component={AuthRouter} loggedIn={loggedIn}/>
        <PrivateRoutes exact path="/" component={JournalScreen} loggedIn={loggedIn}/>
        <Redirect to="/auth/login" />
      </ Switch>
    </ Router>
  )
}
