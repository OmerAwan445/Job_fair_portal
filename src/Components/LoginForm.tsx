import React, { useContext, useRef, useState } from 'react'
import Spinner from './Spinner';
import { loginVerification } from '../utils/loginVerification';
import { AppContext } from '../DataLayer/DataProviders/AppProvider';

function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [{ token }, appDispatch] = useContext(AppContext);
  console.log(token);
  // Login Handler Function =======
  async function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const emailVal = (emailRef.current?.value)?.trim().toLowerCase();
    const passwordVal = (passwordRef.current?.value)?.trim();

    if (!emailVal || !passwordVal) return;
    if (emailVal === '' || passwordVal === '') return;

    setIsLoading(true);
    try {
      const { isLoggedIn, _token, errorMessage } = await loginVerification(emailVal, passwordVal);
      setIsLoading(false);
      // Handle Login Failure Messages =======
      if (!isLoggedIn) {
        setErrorMessage(errorMessage);
        // Reset password input =======
        if (passwordRef.current) passwordRef.current.value = '';
      } else {
        // Handle Successful Login =======
        if (isLoggedIn) {
          setErrorMessage('');
          //  Saving the token in AppContext ===== =======
          appDispatch({ type: "UPDATE_TOKEN", payload: _token });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      action=""
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium">Login in to your account</p>
      {errorMessage && (
        <span className="text-red-500 pl-2 text-sm">*{errorMessage}</span>
      )}
      <div>
        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
            placeholder="Enter email"
            ref={emailRef}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>
        <div className="relative">
          <input
            name='password'
            id='password'
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
            placeholder="Enter password"
            ref={passwordRef}
          />
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        onClick={handleLogin}
      >
        {isLoading ? <Spinner /> : 'Login in'}
      </button>

      <p className="text-center text-sm text-gray-500">
        No account?&nbsp;
        <a className="underline text-blue-400" href="##">Sign up</a>
      </p>
    </form>
  )
}

export default LoginForm;
