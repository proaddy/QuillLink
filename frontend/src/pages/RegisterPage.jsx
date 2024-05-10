import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function RegisterPage() {
  return (
    <div className="flex items-center content-center flex-col w-full text-[#564cba]">
      <div className="bg-[#FFF4F4] flex w-[1000px] h-[650px]">
        {/* design */}
        <div className="bg-[#FFC900] flex-1 relative">
          <img
            src="/images/woman.png"
            className="absolute m-auto inset-x-0 bottom-0 w-[340px] h-[320px]"
          />
        </div>

        {/* Register form */}
        <div className="flex-1 flex flex-col items-center p-4">
          <p className="flex items-center self-start">
            <img src="/images/favicon.png" className="w-10 m-1" />
            <span className="text-2xl font-bold">QuillLink</span>
          </p>
          <span className="uppercase text-3xl mt-12">let's get started!</span>
          <form action="" className="flex flex-col w-72 mt-10">
            <input
              type="text"
              placeholder="Enter Username"
              className="h-16 p-5 rounded-md"
            />
              <input
                type="text"
                placeholder="Email ID"
                className="h-16 p-5 mt-4 rounded-md"
              />
              <input
                type="text"
                placeholder="Password"
                className="h-16 p-5 mt-4 mb-10 rounded-md"
              />
            <Button text={"Sign Up"} round="md" />
          </form>
          <span className="mt-8 text-lg">
            Already have a account? <Link to='/login' className="font-bold">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
