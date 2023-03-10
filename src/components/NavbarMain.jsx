import { useState } from 'react';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import UserDropdown from './UserDropdown';
import { ReactComponent as Menu } from '../assets/images/menu.svg';

const NavbarMain = ({ onOpen }) => {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  const handleMenu = () => {
    setHiddenMenu(false);
  };

  return (
    <div className="w-full pl-5 pr-5 lg:pr-[7.375rem] flex items-center justify-between py-[0.9375rem] sm:py-[1.125rem] text-center shadow-sm relative z-50">
      <button onClick={onOpen} className="sm:hidden">
        <Menu />
      </button>
      <Logo className="hidden sm:block w-[10.625rem] h-8 sm:w-52 sm:h-10" />
      <UserDropdown />
    </div>
  );
};

export default NavbarMain;
