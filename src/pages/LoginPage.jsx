import NavbarLogin from '../components/NavbarLogin';
import Apple from '../assets/images/apple.svg';
import Google from '../assets/images/googel.svg';
import Facebook from '../assets/images/facebook.svg';
import Login from '../components/Login';

const data = [
  {
    title: 'Apple',
    img: Apple,
  },
  {
    title: 'Google',
    img: Google,
  },
  {
    title: 'Facebook',
    img: Facebook,
  },
];

const SignUp = () => {
  return (
    <div>
      <NavbarLogin />
      <div className="min-h-screen bg-brand-greyOne pt-12 sm:pb-20">
        <div className="px-4">
          <h4 className="text-13 text-center font-semibold uppercase">
            login with
          </h4>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-3">
            {data.map((d) => (
              <button
                key={d.title}
                className="w-full sm:w-[9.5rem] h-10 flex items-center justify-center bg-brand-peach uppercase rounded"
              >
                <div className="flex items-center gap-2">
                  <img src={d.img} alt="" />
                  <h4 className="text-13 font-semibold">{d.title}</h4>
                </div>
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-[214px] h-px bg-brand-greyFive"></div>{' '}
            <h4 className="text-13 font-semibold uppercase">or</h4>
            <div className="w-[214px] h-px bg-brand-greyFive"></div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default SignUp;
