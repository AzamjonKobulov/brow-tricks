import { Link } from 'react-router-dom';
import { ReactComponent as CustomersImg } from '../assets/images/customers.svg';

const CustomersContainer = () => {
  return (
    <div className="w-full text-center mt-1 py-20 px-4 sm:rounded-[0.625rem] bg-white shadow-sm border border-brand-greyThree rouned-[0.625rem]">
      <div className="flex flex-col space-y-10">
        <div>
          <CustomersImg className="mx-auto" />
        </div>
        <div>
          <h3 className="text-26 font-semibold space-y-">Add Customer</h3>
          <p className="text-15 max-w-[29.5625rem] mx-auto mt-4">
            Get started by adding customer contact info in order to add media,
            manage PMU form signing, and notes.
          </p>
        </div>
        <div>
          <Link
            to="/customertablepage"
            className="inline-block py-2.5 px-5 bg-brand-peach rounded"
          >
            <h4 className="text-15 font-semibold">Add a customer</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomersContainer;
