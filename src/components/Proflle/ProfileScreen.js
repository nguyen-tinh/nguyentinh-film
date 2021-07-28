import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { selectUser } from "../../slices/userSlice";
import Nav from "../HomeScreen/Nav";
import PlanScreen from "./PlanScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <div className="h-screen text-white">
      <Nav />

      <div className="flex flex-col w-full sm:w-1/2 sm:mx-auto pt-12 max-w-3xl text-center ">
        <h1 className="text-4xl sm:text-6xl font-normal border-b-2 border-solid border-[#282c2d] pb-3 mb-5">
          Edit Profile
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img
            className="h-24 w-24 rounded-full"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="text-white ml-6 flex-1 mt-5">
            <h2 className="rounded text-lg p-4 bg-gray-500 pl-5">
              {user.email}
            </h2>
            <div className="mt-5">
              <h3 className="border-b-2 border-solid border-[#282c2d] pb-3 text-2xl">
                Plans
              </h3>

              <PlanScreen />

              <button
                onClick={() => {
                  history.push("/");
                }}
                className="rounded px-5 py-2 text-md mt-4 w-full text-white font-semibold border-none cursor-pointer bg-redPrimary hover:bg-opacity-80"
              >
                Save &amp; Close
              </button>
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="rounded px-5 py-2 text-md mt-4 w-full text-white font-semibold border-none cursor-pointer bg-redPrimary hover:bg-opacity-80"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
