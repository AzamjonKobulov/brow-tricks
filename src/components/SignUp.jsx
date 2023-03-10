import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { ReactComponent as EyeOpen } from '../assets/images/eyeopen.svg';
import { ReactComponent as EyeClose } from '../assets/images/eyeclose.svg';

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [password, setPassword] = useState('');

  const [hidePassword2, setHidePassword2] = useState(false);
  const [password2, setPassword2] = useState('');

  const [value, setValue] = useState('');

  return (
    <div className="w-full sm:max-w-478 mx-auto bg-white border-y sm:border border-brand-greyThree sm:rounded-[0.625rem] shadow-sm p-8 mt-6">
      <h2 className="font-bold text-26 md:text-32">Create an Account</h2>
      <form action="#" className="flex flex-col">
        <label htmlFor="name" className="mt-4">
          First Name
        </label>
        <input
          type="text"
          id="name"
          className="px-3 py-[0.625rem] border border-brand-greyFive outline-none rounded mt-1"
        />
        <label htmlFor="lastname" className="mt-4">
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          className="px-3 py-[0.625rem] border border-brand-greyFive outline-none rounded mt-1"
        />
        <label htmlFor="phonenumber" className="mt-4">
          Phone Number
        </label>
        <PhoneInput
          className="px-3 py-[0.625rem] border border-brand-greyFive rounded mt-1"
          value={value}
          defaultCountry="US"
          onChange={(value) => setValue(value)}
        />
        <label htmlFor="bussinessname" className="mt-4">
          Bussiness Name
        </label>
        <input
          type="text"
          id="bussinessname"
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
        <label htmlFor="password2" className="mt-4">
          Repeat Password
        </label>
        <div className="border flex items-center justify-between px-3 border-brand-greyFive rounded mt-1 w-full">
          <input
            type={hidePassword2 ? 'password' : 'text'}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            id="password2"
            className="flex-1 py-[0.625rem] pr-3 outline-none"
          />
          <button
            type="button"
            onClick={() => setHidePassword2((prevState) => !prevState)}
          >
            {hidePassword2 ? <EyeClose /> : <EyeOpen />}
          </button>
        </div>
      </form>
      <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-9 mt-6">
        <button className="w-full sm:w-[9.5rem] h-12 sm:h-10 flex items-center justify-center bg-brand-peach rounded">
          <h4 className="text-15 font-semibold">Let's get started</h4>
        </button>
        <p className="text-sm flex items-center gap-1.5">
          <span>Already have an account?</span>
          <Link to="/login" className="text-brand-blue">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
