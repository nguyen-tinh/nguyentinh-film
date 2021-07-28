import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from './SignUpForm'

function SignupScreen() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const showSignUp = () => {
    setShowSignUpForm(true)
  }

  const showSignIn = () => {
    setShowSignUpForm(false)
  }


  return (
    <div className="w-full sm:max-w-xl p-20 sm:mx-auto bg-black bg-opacity-80">
      {!showSignUpForm && <SignInForm onShowSignUp={showSignUp} />}
      {showSignUpForm && <SignUpForm onShowSignIn={showSignIn}/>}
    </div>
  );
}

export default SignupScreen;
