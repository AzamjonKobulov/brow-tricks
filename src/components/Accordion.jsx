import { useState } from 'react';
import { ReactComponent as CircleEmpty } from '../assets/images/empty-circle.svg';
import { ReactComponent as CircleChecked } from '../assets/images/circle-checked.svg';
import Img from '../assets/images/customer.svg';
import Img2 from '../assets/images/forms.svg';
import Img3 from '../assets/images/accounts.svg';
import Img4 from '../assets/images/media.svg';
import Img5 from '../assets/images/sms.svg';

const data = [
  {
    id: 1,
    label: 'Add customers',
    title: 'Add customer contact information',
    description:
      'Streamline your contact book by saving before/after media and signed forms all within our single app.',
    btn: 'Add customer',
    img: Img,
    width: 20,
  },
  {
    id: 2,
    label: 'Create forms',
    title: 'Create customer onboarding forms',
    description:
      'Use our pre-built templates for quick onboarding, or create your own templates for use again and again! View signing status, and manage sms integrations.',
    btn: 'Manage forms',
    img: Img2,
    width: 40,
  },
  {
    id: 3,
    label: 'Connect social accounts',
    title: 'Connect brand accounts',
    description:
      'Import user generated content across social channels. Gain access to advanced analytics and performance reports by connecting your brand social accounts.',
    btn: 'Connect accounts',
    img: Img3,
    width: 60,
  },
  {
    id: 4,
    label: 'Add before/after media',
    title: 'Add images or video content to customer profiles',
    description:
      'Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.',
    btn: 'Upload media',
    img: Img4,
    width: 80,
  },
  {
    id: 5,
    label: 'Enable SMS sending',
    title: 'Send your forms via SMS.',
    description:
      'Manage onboarding by sending forms directly to your customers before treatments.',
    btn: 'Verify phone',
    img: Img5,
    width: 100,
  },
];

const Accordion = ({ onWidth }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    expandedIndex === nextIndex
      ? setExpandedIndex(-1)
      : setExpandedIndex(nextIndex);
  };

  const renderedItems = data.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id} className="relative">
        {item.id === 5 ? null : (
          <div className="border-l-2 absolute h-full left-2.5 top-8"></div>
        )}
        <div
          onClick={() => {
            handleClick(index);
            onWidth(item.width);
          }}
          className="relative cursor-pointer"
        >
          <div className="flex items-center gap-x-4">
            {isExpanded ? <CircleChecked /> : <CircleEmpty />}
            <h4 className="font-semibold">{item.label}</h4>
          </div>
          {isExpanded && (
            <img
              className="hidden lg:block absolute right-0"
              src={item.img}
              alt=""
            />
          )}
        </div>
        {isExpanded && (
          <div className="px-10 py-4 max-w-xl relative">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="mt-2 text-15">{item.description}</p>
            <button className="bg-brand-peach py-[0.625rem] px-6 mt-4 rounded text-15 font-semibold">
              {item.btn}
            </button>
          </div>
        )}
      </div>
    );
  });

  return <div className="p-8 flex flex-col gap-10">{renderedItems}</div>;
};
export default Accordion;
