import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserImg from '../assets/images/user.svg';
import DropdownIcon from '../assets/images/dropdown.svg';

const UserDropdown = (value, onChange) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const settings = [{ label: 'Log out' }, { label: 'Settings' }];

  const renderedSettings = settings.map((setting) => {
    return (
      <Link
        to="/signup"
        key={setting.label}
        className="rounded-sm bg-brand-peach  hover:bg-brand-greyThree border-b cursor-pointer p-1"
      >
        {setting.label}
      </Link>
    );
  });

  return (
    <div ref={divEl} className="flex items-center gap-3 relative">
      <div
        onClick={handleClick}
        className="cursor-pointer flex items-center gap-1.5"
      >
        <p className="text-sm">Chris Luke</p>
        <img src={DropdownIcon} alt="" />
      </div>
      <Link to="/signup">
        <img src={UserImg} alt="" />
      </Link>
      {isOpen && (
        <div className="absolute top-full w-fit border flex flex-col">
          {renderedSettings}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
