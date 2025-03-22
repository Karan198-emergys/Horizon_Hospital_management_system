import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginModuleCss } from "../../Components/index";
import { authenticateScreenImage } from "../../Components/index";
import CustomsInput from "src/Components/Inputs/CustomsInput";

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
        <div className={LoginModuleCss.formSection}>
          <div className="formHeading text-4xl text-gray-950 cursor-context-menu">
            Welcome, <br />
            Please Authorize
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <CustomsInput
              type="email"
              icon={faEnvelope}
              placeholder="Enter your email"
              register={register}
              errors={errors}
            />
            <CustomsInput
              type="password"
              icon={faLock}
              placeholder="Enter your password"
            />
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
