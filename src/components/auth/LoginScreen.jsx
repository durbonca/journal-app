import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForms';
import { login } from '../../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ values, handleInputChange, reset ] = useForm({
    email: 'nando@gmail.com',
    password: '123456',
  });
  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( login(123456, 'Manolo') )
  }

  return (
    <>
      <h3
        className='auth__title'
      >
        Login
      </h3>
      <form onSubmit={ handleLogin }>
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
        >
          Login
        </button>
        <div className="auth__social-network">
          <p>Login with social networks</p>
          <div 
              className="google-btn"
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
