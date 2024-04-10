import Button from "../components/Button.jsx";

export default function LoginPage() {
  return (
    <div className="bg-blue-400 flex w-[1000px] h-[650px]">
      <div className="bg-[#FFC900] flex-1 relative">
        <img
          src="/images/woman.png"
          className="absolute m-auto inset-x-0 bottom-0 w-[340px] h-[320px]"
        />
      </div>
      <div className="flex-1">
        <img src="/images/favicon.png" alt="image" /> <span className="font-bold">QuillLink</span> 
        hello again!
        welcome back you have been missed
        <form action="">
          <input type="text" />
          <input type="text" /><img src="/images/show.png" className="w-6" />
          <a href="#">Forgot Password?</a>
        <Button text={"Sign In"}></Button>
        </form>
          Doesn't have a account? <a href="#">Sign Up</a>for free

      </div>
    </div>
  );
}
