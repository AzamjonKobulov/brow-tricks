import { useState } from 'react';
import Accordion from './Accordion';

const AccordionContainer = () => {
  const [width, setWidth] = useState(0);

  const handleWidth = (width) => {
    setWidth(width);
  };

  return (
    <div className="w-full mt-1 sm:rounded-[0.625rem] bg-white shadow-sm border border-brand-greyThree rouned-[0.625rem]">
      <div className="py-7 px-8 border-b border-b-brand-greyThree">
        <h2 className="font-semibold text-lg sm:text-26">Setup guide</h2>
        <div className="flex items-center gap-4">
          <p className="text-sm sm:text-15 text-brand-greySeven">
            <span>{width / 20}</span> of <span>5</span> tasks complete
          </p>
          <div className="flex-1 h-1 rounded-[2.25rem] bg-brand-greyThree">
            <div
              style={{ width: `${width}%` }}
              className="h-full bg-brand-greySeven rounded-[2.25rem]"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Accordion onWidth={handleWidth} />
      </div>
    </div>
  );
};

export default AccordionContainer;
