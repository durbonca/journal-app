import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'
import { setError, removeError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {

  const dispatch = useDispatch()
  const { msgError, loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'manu',
    email: 'manu@mail.com',
    password: '123456',
    password2: '123456',
  })

  const { name, email, password, password2 } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isFormValid()) {
      dispatch( startRegisterWithEmailPasswordName(email, password, name) )
      return;
    }
    else {
      console.log( formValues );
      console.error('Formulario incorrecto')
      return;
    }
  }

  const isFormValid = () => {
    if(name.trim().length === 0){
      dispatch(setError('Name is required'))
      return false;
    }
    else if (!validator.isEmail(email)) {
      dispatch(setError('Email is invalid'))
      return false;
    }
    else if(password !== password2 || password.length < 6) {
      dispatch(setError('Password should be at least 6 characters and match each other'))
      return false;
    }
    else {
      dispatch(removeError())
      return true;
    }
  }
  
  return (
    <>
      <h3
        className='auth__title'
      >
        Register
      </h3>
      <form 
        onSubmit={ handleSubmit }
        className='animate__animated animate__fadeIn animate__faster'
      >

      { msgError && 
        <div className='auth__alert-error'>
          { msgError }
        </div>
      }

      <input
          className='auth__input' 
          type="text" 
          placeholder="Name"
          name='name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />

        <input
          className='auth__input' 
          type="text" 
          placeholder="Email"
          name='email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        <input
          className='auth__input' 
          type="password" 
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <input
          className='auth__input' 
          type="password" 
          placeholder="Confirm password"
          name='password2'
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className='btn btn-primary btn-block mb-5'
          disabled={loading}
        >
          Register
        </button>

        <Link 
          className='link'
          to="/auth/login">
            Already register?
        </Link>
      </form>
    </>
  )
}
