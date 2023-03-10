import NavbarLogin from '../components/NavbarLogin';
import ForgotPassword from '../components/ForgotPassword';

const SignUp = () => {
  return (
    <div>
      <NavbarLogin />
      <div className="min-h-screen bg-brand-greyOne pt-12 sm:pb-20">
        <ForgotPassword />
      </div>
    </div>
  );
};

export default SignUp;
