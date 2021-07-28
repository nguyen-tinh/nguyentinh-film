import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { auth } from "../../firebase";

function SignUpForm(props) {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const signUp = async (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((authUser) => {
        alert("Sign Up Successfully!");
        history.push("/profile");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form className="grid" onSubmit={handleSubmit(signUp)}>
      <h1 className="text-4xl text-left font-bold mb-4">Sign Up</h1>
      <input
        className="bg-white mb-2 px-3 py-1 outline-none h-12 rounded-md max-w-xl text-black"
        name="email"
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
        className="bg-white mb-2 px-3 py-1 outline-none h-12 rounded-md max-w-xl text-black"
        name="password"
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

      <input
        className="bg-white px-3 py-1 outline-none h-12 rounded-md max-w-xl text-black"
        name="rePassword"
        placeholder="Re-entered Password"
        type="password"
        {...register("rePassword", {
          required: true,
          validate: (value) => value === watch("password"),
        })}
      />
      {errors.rePassword && (
        <p className="text-red-500 text-left text-sm m-2">
          Re-entered password is incorrect!
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
        <span className="text-gray-400">Have account? </span>
        <span
          onClick={props.onShowSignIn}
          className="text-lg cursor-pointer hover:underline"
        >
          Sign In now.
        </span>
      </p>
    </form>
  );
}

export default SignUpForm;
