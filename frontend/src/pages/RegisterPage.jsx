import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import { useState } from "react";

export default function RegisterPage({loginData, setLoginData}) {
  const navigate = useNavigate();
  const [show, setShow] = useState("hide");
  let _id = loginData.length+1;
  // console.log(_id);

  // input
  const [uname, setUname] = useState('');
  const [passw, setPassw] = useState('');
  const [email, setEmail] = useState('');

  const submitData = (e) => {
    e.preventDefault();
    if (uname === "" || passw === "" || email === "") {
      alert("Username or Password or Email cannot be empty");
    } else if (passw.length < 8) {
      alert("Password cannot be less than 8 characters");
    } else if (uname.indexOf(" ") != -1 || passw.indexOf(" ") != -1) {
      alert("Username or Password cannot have space");
    } else {
      const user = loginData.find(e=>e.uname === uname);
      if (!user) {
        // const payload = Object.fromEntries(new FormData(e.target));
        // console.log(payload);
        setLoginData([...loginData, {
          "uname":uname,
          "passw":passw,
          "email":email,
          "_id": _id
        }])
        console.log(loginData);
        alert("User Registered!!!");
        navigate("/login");
      } else {
        alert("User Already Exist");
      }
    }

    setUname("");
    setPassw("");
    setEmail("");
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

        {/* Register form */}
        <div className="flex-1 flex flex-col items-center p-4">
          <p className="flex items-center self-start">
            <img src="/images/favicon.png" className="w-10 m-1" />
            <span className="text-2xl font-bold">QuillLink</span>
          </p>
          <span className="uppercase text-3xl mt-12">let's get started!</span>
          <form onSubmit={submitData} className="flex flex-col w-72 mt-10">
            <input
              type="text"
              placeholder="Enter Username"
              className="h-16 p-5 rounded-md"
              name="username"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email ID"
              className="h-16 p-5 mt-4 rounded-md"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex  my-3">
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
            <Button text={"Sign Up"} round="md" />
          </form>
          <span className="mt-8 text-lg">
            Already have a account?
            <Link to="/login" className="font-bold mx-1">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
