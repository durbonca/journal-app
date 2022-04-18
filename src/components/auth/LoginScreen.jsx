import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForms';
import { setError, removeError } from '../../actions/ui'
import { startLoginEmailPassword, startLoginGoogle } from '../../actions/auth';

export const LoginScreen = () => {
  
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector(state => state.ui);

  const [ values, handleInputChange ] = useForm({
    email: 'test@tset.cl',
    password: '123456',
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    if( isValidForm() ) {
      dispatch( startLoginEmailPassword(email, password) )
      return;
    }
    else {
      console.log( values );
      console.error('Formulario incorrecto')
      return;
    }
  }

  const isValidForm = () => {

    if (email.trim().length === 0) {
      dispatch(setError('Email is required'))
      return false;
    } 
    else if (!validator.isEmail(email)) {
      dispatch(setError('Email is invalid'))
      return false;
    } 
    else if(password.trim().length === 0){
      dispatch(setError('Password is required'))
      return false;
    }
    else if(password.trim().length < 6){
      dispatch(setError('Password must be at least 6 characters'))
      return false;
    }
    else {
      dispatch(removeError())
      return true;
    }
  }

  const handleLoginGoogle = () => {
    dispatch( startLoginGoogle() )
  }

  return (
    <>
      <h3
        className='auth__title'
      >
        Login
      </h3>

      {
       msgError &&
      <div className='auth__alert-error'>
        { msgError }
      </div>
      }

      <form 
        onSubmit={ handleLogin }
        className='animate__animated animate__fadeIn animate__faster'
      >
        <input
          className="auth__input" 
          type="text" 
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input" 
          type="Password" 
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>
        <div className="auth__social-network">
          <p>Login with social networks</p>
          <div 
              className="google-btn"
              onClick={handleLoginGoogle}
              >
          <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
          </div>
        </div>

        <Link 
          className='link'
          to="/auth/register">
            create new account
        </Link>
      </form>
    </>
  )
}
