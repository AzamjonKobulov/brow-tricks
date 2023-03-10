import { ReactComponent as Logo } from '../assets/images/logo.svg';
import UserDropdown from './UserDropdown';

const NavbarMainMobile = () => {
  return (
    <div className="flex sm:hidden pl-5 pr-5 items-center justify-between py-[0.9375rem] sm:py-[1.125rem] text-center shadow-sm relative z-50">
      <Logo className="w-[10.625rem] h-8" />
      <UserDropdown />
    </div>
  );
};

export default NavbarMainMobile;
