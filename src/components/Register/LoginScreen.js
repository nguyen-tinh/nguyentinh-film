import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [showSignInButton, setShowSignInButton] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    setSignIn(true);
    setShowSignInButton(false);
  };

  return (
    <div className="loginScreen">
      <div className="">
        <img
          onClick={() => {
            setSignIn(false);
            setShowSignInButton(true);
            history.push("/");
          }}
          className="fixed left-0 w-36 object-contain pl-5 cursor-pointer"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        {showSignInButton && (
          <button
            onClick={() => {
              setSignIn(true);
              setShowSignInButton(false);
            }}
            className="fixed right-5 top-5 px-4 py-2 rounded-md cursor-pointer border-none bg-redPrimary text-white hover:text-redPrimary hover:bg-white"
          >
            Sign in
          </button>
        )}

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="absolute left-0 right-0 top-24 z-10 text-white text-center mx-auto p-5">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1 className="text-5xl md:text-6xl font-bold mb-5">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="mb-8 text-3xl font-semibold">
              Watch anywhere. Cancel anytime.
            </h2>
            <p className="p-1 text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="m-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    className="p-3 outline-none h-12 w-1/3 border-none max-w-xl text-black"
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="text-redPrimary text-sm text-xl m-2">
                      Please enter a valid email address!
                    </p>
                  )}
                </div>

                <button className="m-4 bg-redPrimary border-none px-5 py-3 font-semibold text-2xl cursor-pointer hover:bg-red-500">
                  Get Started &gt;
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
