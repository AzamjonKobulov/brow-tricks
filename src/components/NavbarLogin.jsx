import { ReactComponent as Logo } from '../assets/images/logo.svg';

const NavbarLogin = () => {
  return (
    <div className="w-full py-[0.9375rem] sm:py-[1.125rem] text-center shadow-sm relative z-50">
      <Logo className="mx-auto w-[10.625rem] h-8 sm:w-52 sm:h-10" />
    </div>
  );
};

export default NavbarLogin;
