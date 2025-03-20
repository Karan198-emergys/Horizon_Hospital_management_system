import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginModuleCss } from "../../Components/index";
import { authenticateScreenImage } from "../../Components/index";

const Login = () => {
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <div className={LoginModuleCss.loginDashBoard}>
      <div className={LoginModuleCss.loginForm}>
        <div className=" formSection w-full pl-24 flex flex-col justify-center gap-10">
          <div className="formHeading text-4xl text-gray-950 cursor-context-menu">
            Welcome, <br />
            Please Authorize
          </div>
          <form
            className=" flex flex-col justify-center gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="loginUsername w-[80%] h-12 flex items-center gap-2  border-2 border-teal-600 rounded-lg">
              <label htmlFor="loginEmail w-[20%]">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-3xl pl-2 text-teal-600"
                />
              </label>
              <input
                type="text"
                id="loginEmail"
                className="text-xl outline-none w-[87%] placeholder:text-gray-400"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="loginPassword w-[80%]  h-12 flex items-center gap-2 border-teal-600  border-2 rounded-lg">
              <label htmlFor="loginPassword w-[20%]">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-3xl pl-2 text-teal-600"
                />
              </label>
              <input
                type="password"
                id="loginPassword"
                className=" text-xl border-teal-600 outline-none w-[87%] placeholder:text-gray-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="toRegister">
              Don't have account ?{" "}
              <Link className=" text-blue-600" to="/registration">
                Register
              </Link>
            </div>
            <div className={LoginModuleCss.loginButton}>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
        <div className=" flex items-center justify-center w-full">
          <span className=" border-b-2 border-teal-700 w-[40%]"></span>
          <span className=" pl-1 pr-1 text-xl text-gray-800">OR</span>
          <span className="border-b-2 border-teal-700 w-[40%]"></span>
        </div>
        <div className="googleLogin w-full flex item-centre justify-center">
          <button className=" w-[70%] border-teal-600 rounded-4xl border-2 p-2 cursor-pointer">
            {" "}
            Continue with Google
          </button>
        </div>
      </div>
      <div className="loginScreenImage w-1/2">
        <div>
          <img src={authenticateScreenImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
