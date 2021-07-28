import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { auth } from "../../firebase";

function SignInForm(props) {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const signIn = async (data) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        history.push("/profile");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form className="grid" onSubmit={handleSubmit(signIn)}>
      <h1 className="text-4xl text-left font-bold mb-4">Sign In</h1>
      <input
        className="bg-white mb-2 px-3 py-1 outline-none h-12 rounded-md max-w-xl text-black"
        name='email'
        placeholder="Email"
        type="email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
      />
      {errors.email && (
        <p className="text-red-500 text-left text-sm mb-2">
          Please enter a valid email address!
        </p>
      )}
      <input
        className="bg-white px-3 py-1 outline-none h-12 rounded-md max-w-xl text-black"
        name='password'
        placeholder="Password"
        type="password"
        {...register("password", {
          required: true,
          validate: (value) => value.length > 5,
        })}
      />
      {errors.password && (
        <p className="text-red-500 text-left text-sm m-2">
          Please enter a valid password! (more than 5 characters)
        </p>
      )}
      <button
        disabled={!isDirty || !isValid}
        className="bg-redPrimary my-8 px-3 py-1 outline-none h-12 rounded-md max-w-xl text-white text-lg font-semibold disabled:bg-opacity-60 hover:bg-red-600 disabled:cursor-not-allowed"
        type="submit"
      >
        Sign In
      </button>

      <p className="text-left">
        <span className="text-gray-400">New to NetFlix? </span>
        <span
          onClick={props.onShowSignUp}
          className="text-lg cursor-pointer hover:underline"
        >
          Sign Up now.
        </span>
      </p>
    </form>
  );
}

export default SignInForm;
