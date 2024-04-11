import Button from "../components/Button.jsx";

export default function LoginPage() {
  return (
    <div className="flex items-center content-center flex-col w-full">
      <div className="bg-[#EEE4C2] flex w-[1000px] h-[650px]">
        {/* design */}
        <div className="bg-[#FFC900] flex-1 relative">
          <img
            src="/images/woman.png"
            className="absolute m-auto inset-x-0 bottom-0 w-[340px] h-[320px]"
          />
        </div>

        {/* Login form */}
        <div className="flex-1 flex flex-col items-center p-4">
          <p className="flex items-center self-start">
            <img src="/images/favicon.png" className="w-10 m-1" />
            <span className="text-2xl font-bold">QuillLink</span>
          </p>
          <span className="uppercase text-3xl mt-12">hello again!</span>
          <span className="mt-4">welcome back you have been missed</span>
          <form action="" className="flex flex-col w-72 mt-10">
            <input
              type="text"
              placeholder="Enter Username"
              className="h-16 p-5 rounded-md"
            />
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Enter Password"
                className="h-16 p-5 rounded-tl-md rounded-bl-md"
              />
              <img
                src="/images/show.png"
                className="w-10 px-2 py-5 bg-white rounded-tr-md rounded-br-md"
              />
            </div>
            <a href="#" className="self-end my-2 mb-8 text-sm">
              Forgot Password?
            </a>
            <Button text={"Sign In"} round="md" />
          </form>
          <span className="mt-8 text-lg">
            Doesn't have a account? <a href="#">Sign Up</a> for free
          </span>
        </div>
      </div>
    </div>
  );
}
