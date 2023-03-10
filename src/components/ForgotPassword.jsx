import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div>
      <div className="w-full sm:max-w-478 mx-auto bg-white border-y sm:border border-brand-greyThree sm:rounded-[0.625rem] shadow-sm p-8 mt-6">
        <h2 className="font-bold text-26 md:text-32">Forgot Password?</h2>
        <p className="text-sm text-brand-greyNine max-w-xs mt-1">
          Enter your registered email address to receive password reset
          instructions.
        </p>
        <form action="#" className="flex flex-col">
          <label htmlFor="email" className="mt-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="px-3 py-[0.625rem] border border-brand-greyFive outline-none rounded mt-1"
          />
        </form>
        <button className="w-full sm:w-[9.5rem] mt-6 h-12 sm:h-10 flex items-center justify-center bg-brand-peach rounded">
          <h4 className="text-15 font-semibold">Reset password</h4>
        </button>
      </div>
      <Link to="/login" className="block text-center text-brand-blue mt-8">
        Back to login
      </Link>
    </div>
  );
};

export default ForgotPassword;
