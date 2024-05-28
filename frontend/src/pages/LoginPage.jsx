import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage({loginData}) {
  const navigate = useNavigate();

  const [show, setShow] = useState("hide");

  // input
  const [uname, setUname] = useState("");
  const [passw, setPassw] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    if (uname === "" || passw === "") {
      alert("Username or Password cannot be empty");
    } else {
      if (uname.indexOf(" ") != -1 || passw.indexOf(" ") != -1) {
        alert("Username or Password cannot have space");
      } else {
        const payload = Object.fromEntries(new FormData(e.target));
        console.log(payload);
        
        const user = loginData.find(e=>e.uname === uname.toLowerCase());
        if(!user) {
          alert("No such user exist!!");
        } else {
          if (user.passw === passw) {
            alert("Login Successfull");
            localStorage.setItem('username', uname.toLowerCase());
            localStorage.setItem('userID', user._id)
            navigate("/dashboard", { state: {username: uname, _id:user._id} });
          } else {
            alert("Wrong Password");
          }
        }
      }
    }

    setUname("");
    setPassw("");
  };

  return (
    <div className="flex items-center justify-center h-screen content-center flex-col w-full text-[#564cba]">
      <div className="bg-[#FFF4F4] flex w-[1000px] h-[650px]">
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
          {/* form */}
          <form
            onSubmit={submitData}
            action=""
            className="flex flex-col w-72 mt-10"
          >
            <input
              type="text"
              placeholder="Enter Username"
              className="h-16 p-5 rounded-md"
              name="uname"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
            <div className="flex mt-4">
              <input
                type={show === "show" ? "text" : "password"}
                placeholder="Enter Password"
                className="h-16 p-5 rounded-tl-md rounded-bl-md"
                name="password"
                value={passw}
                onChange={(e) => setPassw(e.target.value)}
              />
              <img
                src={`/images/${show}.png`}
                className="w-10 px-2 py-5 bg-white rounded-tr-md rounded-br-md cursor-pointer hover:bg-gray-100"
                onClick={
                  show === "show"
                    ? () => setShow("hide")
                    : () => setShow("show")
                }
              />
            </div>
            <a href="#" className="self-end my-2 mb-8 text-sm">
              Forgot Password?
            </a>
            <button
              className="bg-[#FFC900] p-4 w-full rounded-md shadow-xl"
              type="submit">Sign In</button>
          </form>
          <span className="mt-8 text-lg">
            Doesn't have a account?
            <Link to="/register" className="font-bold mx-1">Sign Up</Link>for free
          </span>
        </div>
      </div>
    </div>
  );
}
