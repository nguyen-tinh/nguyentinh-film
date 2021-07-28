import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  const navClasses = `fixed top-0 p-5 w-full h-7__5 z-10 transition-all ease-in duration-500 ${show ? 'bg-black' : ''}`

  return (
    <div className={navClasses}>
      <div className="flex justify-between">
        <img
        onClick={() => history.push('/')}
          className="fixed top-2 left-0 w-20 pl-5 object-contain cursor-pointer"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push('/profile')}
          className="fixed top-2 right-5 w-7__5 cursor-pointer rounded-full"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
