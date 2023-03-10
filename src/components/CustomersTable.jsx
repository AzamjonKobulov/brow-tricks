import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Search } from '../assets/images/search.svg';
import { ReactComponent as Sort } from '../assets/images/sort.svg';

const data = [
  {
    name: 'Desirae Kenter',
    phone: '(468) 845-6839',
    email: 'desiraekenter@gmail.com',
    date: 'Nov 23, 2022',
    status: 'draft',
  },
  {
    name: 'Carla Siphron',
    phone: '(469) 578-8248',
    email: 'carlasiphron@gmail.com',
    date: 'Oct 23, 2022',
    status: 'sent',
  },
  {
    name: 'Kaylynn Carder',
    phone: '(468) 737-5824',
    email: 'kaylynncarder@gmail.com',
    date: 'Jul 3, 2022',
    status: 'signed',
  },
  {
    name: 'Allison Press',
    phone: '(469) 578-8248',
    email: 'carlasiphron@gmail.com',
    date: 'Jun 4, 2022',
    status: 'Sent',
  },
  {
    name: 'Marley Calzoni',
    phone: '(468) 737-5824',
    email: 'kaylynncarder@gmail.com',
    date: 'May 24, 2022',
    status: 'Signed',
  },
  {
    name: 'Lydia Mango',
    phone: '(469) 578-8248',
    email: 'carlasiphron@gmail.com',
    date: 'Mar 30, 2022',
    status: 'Sent',
  },
  {
    name: 'Makenna Gouse',
    phone: '(468) 737-5824',
    email: 'kaylynncarder@gmail.com',
    date: 'Apr 8, 2022',
    status: 'Signed',
  },
  {
    name: 'Leo Franci',
    phone: '(469) 578-8248',
    email: 'carlasiphron@gmail.com',
    date: 'Nov 3, 2022',
    status: 'Draft',
  },
  {
    name: 'Makenna Lubin',
    phone: '(468) 845-6839',
    email: 'desiraekenter@gmail.com',
    date: 'Nov 23, 2022',
    status: 'Draft',
  },
  {
    name: 'Lincoln Passaquindici',
    phone: '(469) 578-8248',
    email: 'carlasiphron@gmail.com',
    date: 'May 16, 2022',
    status: 'Sent',
  },
  {
    name: 'Emery Bergson',
    phone: '(468) 737-5824',
    email: 'kaylynncarder@gmail.com',
    date: 'May 24, 2022',
    status: 'Signed',
  },
  {
    name: 'Abram Rosser',
    phone: '(469) 578-8248',
    email: 'carlasiphron@gmail.com',
    date: 'Jul 3, 2022',
    status: 'Sent',
  },
  {
    name: 'Ruben Curtis',
    phone: '(468) 845-6839',
    email: 'desiraekenter@gmail.com',
    date: 'Nov 12, 2022',
    status: 'Draft',
  },
  {
    name: 'Erin Rhiel Madsen',
    phone: '(469) 578-8248',
    email: 'carlasiphron@gmail.com',
    date: 'Oct 23, 2022',
    status: 'Sent',
  },
  {
    name: 'Phillip Press',
    phone: '(468) 845-6839',
    email: 'desiraekenter@gmail.com',
    date: 'Jun 4, 2022',
    status: 'Draft',
  },
];

const CustomersTable = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl md:text-32 font-bold">Customers</h2>
        <Link
          to="/"
          className="inline-block py-1.5 px-3.5 md:py-2.5 md:px-5 bg-brand-peach rounded"
        >
          <h4 className="text-15 font-semibold">Add a customer</h4>
        </Link>
      </div>
      <div className="w-full text-center pt-6 sm:rounded-[0.625rem] bg-white shadow-sm border border-brand-greyThree rouned-[0.625rem] sm:mt-6">
        <form
          action="#"
          className="flex px-6 items-center justify-between gap-2.5"
        >
          <div className="flex-1 flex items-center gap-2 border border-brand-greyFive rounded px-3">
            <Search />
            <input
              type="text"
              className="w-full py-1.5 outline-none placeholder:text-sm"
              placeholder="Search for a client"
            />
          </div>
          <div className="relative">
            <button
              onClick={handleCollapse}
              className="flex items-center gap-1 pl-3 py-2 pr-4 border border-brand-greyNine rounded"
            >
              <Sort />
              <span className="text-sm font-medium">Sort</span>
            </button>
            {isCollapse && (
              <div className="absolute bg-white py-4 right-0 top-10 border flex flex-col border-brand-greyThree rounded-lg shadow-lg min-w-[12.5rem]">
                <div className="hover:bg-brand-greyTwo px-6 text-start py-2.5">
                  <button>Date added</button>
                </div>
                <div className="hover:bg-brand-greyTwo px-6 text-start py-2.5">
                  <button>Created</button>
                </div>
                <div className="hover:bg-brand-greyTwo px-6 text-start py-2.5">
                  <button>PMU Status</button>
                </div>
              </div>
            )}
          </div>
        </form>
        <div className="mt-5 overflow-auto">
          <table className="w-full text-start">
            <thead>
              <tr className="text-sm font-medium">
                <td className="py-5 px-6 border-b">Customer name</td>
                <td className="py-5 px-6 border-b">Phone</td>
                <td className="py-5 px-6 border-b">Email</td>
                <td className="py-5 px-6 border-b">Created at</td>
                <td className="py-5 px-6 border-b">PMU Status</td>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr>
                  <td className="py-5 px-6 border-b">{d.name}</td>
                  <td className="py-5 px-6 border-b">{d.phone}</td>
                  <td className="py-5 px-6 border-b">{d.email}</td>
                  <td className="py-5 px-6 border-b">{d.date}</td>
                  <td className="py-5 px-6 border-b">{d.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersTable;
