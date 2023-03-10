import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarMobile from '../components/SidebarMobile';
import NavbarMain from '../components/NavbarMain';
import { ReactComponent as Close } from '../assets/images/close.svg';
import CustomersTable from '../components/CustomersTable';

const CustomersTablePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsClose(true);
  };

  const handleClose = () => {
    setIsClose(false);
    setIsOpen(false);
  };

  return (
    <div>
      <NavbarMain onOpen={handleOpen} />
      <div className="flex bg-brand-greyOne min-h-screen relative">
        {isOpen && <SidebarMobile />}
        <Sidebar />
        {isClose && (
          <div className="inline-block sm:hidden absolute z-10 w-full text-end bg-brand-greyNine min-h-screen p-2">
            <button onClick={(handleOpen, handleClose)}>
              <Close />
            </button>
          </div>
        )}
        <div className="flex-1 sm:p-8 lg:px-24 lg:py-10">
          <CustomersTable />
        </div>
      </div>
    </div>
  );
};

export default CustomersTablePage;
