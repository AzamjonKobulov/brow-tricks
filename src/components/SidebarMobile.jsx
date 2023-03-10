import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../assets/images/home.svg';
import Heart from '../assets/images/heart.svg';
import Note from '../assets/images/note.svg';
import Picture from '../assets/images/img.svg';
import Settings from '../assets/images/settings.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    {
      icon: HomeImg,
      label: 'Home',
      path: '/homepage',
    },
    {
      icon: Heart,
      label: 'Customers',
      path: '/customerspage',
      items: [
        { name: 'Add Customer', path: '/customerpage' },
        { name: 'Customer Edit Page', path: '/customereditpage' },
      ],
    },
    { icon: Note, label: 'PMU Forms', path: '/pmuformspage' },
    { icon: Picture, label: 'Media', path: '/mediapage' },
    {
      icon: Settings,
      label: 'Settings',
      path: '/settingpage',
    },
  ];

  return (
    <div className="min-w-[17.125rem] min-h-screen z-20 bg-brand-greyOne p-2 border-r border-brand-greyFive">
      {data.map((d, idx) => (
        <React.Fragment key={idx}>
          {d.items ? (
            <Link to={d.path} className="relative focus:bg-brand-peach rounded">
              <div>
                <div
                  onClick={handleClick}
                  className="flex items-center py-3 px-4 rounded gap-3"
                >
                  <img src={d.icon} alt="" />
                  <p className="text-15 font-medium">{d.label}</p>
                </div>
              </div>
              {isOpen && (
                <div className="absoute top-full flex flex-col">
                  {d.items.map((item) => (
                    <Link className="text-brand-greyNine font-medium pl-10 pt-2">
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ) : (
            <Link className="relative focus:bg-brand-peach rounded">
              <div className="flex items-center py-3 px-4 focuse:bg-brand-peach gap-3">
                <img src={d.icon} alt="" />
                <p className="text-15 font-medium">{d.label}</p>
              </div>
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
