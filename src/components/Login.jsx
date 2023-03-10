import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as EyeOpen } from '../assets/images/eyeopen.svg';
import { ReactComponent as EyeClose } from '../assets/images/eyeclose.svg';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="w-full sm:max-w-478 mx-auto bg-white border-y sm:border border-brand-greyThree sm:rounded-[0.625rem] shadow-sm p-8 mt-6">
        <form action="#" className="flex flex-col">
          <label htmlFor="email" className="mt-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="px-3 py-[0.625rem] border border-brand-greyFive outline-none rounded mt-1"
          />
          <label htmlFor="password" className="mt-4">
            Password
          </label>
          <div className="border flex items-center justify-between px-3 border-brand-greyFive rounded mt-1 w-full">
            <input
              type={hidePassword ? 'password' : 'text'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="flex-1 py-[0.625rem] pr-3 outline-none"
            />
            <button
              type="button"
              onClick={() => setHidePassword((prevState) => !prevState)}
            >
              {hidePassword ? <EyeClose /> : <EyeOpen />}
            </button>
          </div>
        </form>
        <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-9 mt-6">
          <Link
            to="/"
            className="w-full sm:w-[9.5rem] h-12 sm:h-10 flex items-center justify-center bg-brand-peach rounded"
          >
            <h4 className="text-15 font-semibold">Login</h4>
          </Link>
          <p className="text-sm flex items-center gap-1.5">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-brand-blue">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Link
        to="/forgotpassword"
        className="block text-center text-brand-blue mt-8"
      >
        Forgot password?
      </Link>
    </div>
  );
};

export default Login;
