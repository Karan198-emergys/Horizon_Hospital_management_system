import { faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { authenticateScreenImage } from "src/Components";

const Registration = () => {
  return (
    <div className="h-[80vh] w-3/4 flex gap-8 shadow-lg border-0 rounded-lg m-auto mt-14 bg-white">
      <div className="registerForm h-full flex flex-col w-1/2">
        <div className="formSection pl-24 flex flex-col justify-center w-full h-full gap-10">
          <div className="formHeading text-4xl">
            Welcome, <br />
            Register yourself
          </div>
          <form className=" w-full flex flex-col gap-4">
            <div className="fullNameRegister flex gap-2 w-[80%] ">
              <div className="firstName flex items-center p-1 w-1/2 h-12 border-2 border-teal-600 rounded-lg">
                <input
                  type="text"
                  className=" outline-none text-xl "
                  placeholder="First name"
                />
              </div>
              <div className="lastNameRegister flex items-center p-1 w-1/2 h-12 border-2 border-teal-600 rounded-lg">
                <input
                  type="text"
                  className=" outline-none text-xl"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="registerEmail w-[80%] h-12 flex items-center gap-2  border-2 border-teal-600 rounded-lg">
              <label htmlFor="registerEmail w-[20%]">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-3xl pl-2 text-teal-600"
                />
              </label>
              <input
                type="text"
                id="registerEmail"
                className="text-xl outline-none w-[87%] placeholder:text-gray-400"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="registerPhoneNumber w-[80%] h-12 flex items-center gap-2  border-2 border-teal-600 rounded-lg">
              <label htmlFor="registerNumber w-[20%]">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-3xl pl-2 text-teal-600"
                />
              </label>
              <input
                type="tel"
                id="registerNumber"
                className="text-xl outline-none w-[87%] placeholder:text-gray-400"
                placeholder="Enter Your phone number"
              />
            </div>
            <div className="registerPasswordInput w-[80%]  h-12 flex items-center gap-2 border-teal-600  border-2 rounded-lg">
              <label htmlFor="registerPassword w-[20%]">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-3xl pl-2 text-teal-600"
                />
              </label>
              <input
                type="password"
                id="registerPassword"
                className=" text-xl border-teal-600 outline-none w-[87%] placeholder:text-gray-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="confirmPasswordInput w-[80%]  h-12 flex items-center gap-2 border-teal-600  border-2 rounded-lg">
              <label htmlFor="confirmPassword w-[20%]">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-3xl pl-2 text-teal-600"
                />
              </label>
              <input
                type="password"
                id="confirmPassword"
                className=" text-xl border-teal-600 outline-none w-[87%] placeholder:text-gray-400"
                placeholder="Confirm password"
              />
            </div>
            <div className="registerButton w-full h-12 flex items-center  gap-1">
              <button className=" w-[36%] h-full border-2 rounded-4xl">
                Register
              </button>
              <div className="toLogin pl-2">
                Already have account ?{" "}
                <Link to="/login" className="text-blue-600 w-[50%]">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" w-1/2">
        <img src={authenticateScreenImage} alt="" />
      </div>
    </div>
  );
};

export default Registration;

// <FontAwesomeIcon icon={faPhone} />
