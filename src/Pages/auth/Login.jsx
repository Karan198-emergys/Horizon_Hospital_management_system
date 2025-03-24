import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import {
  authenticateScreenImage,
  LoginModuleCss,
} from "../../Components/index";
import { toast } from "react-toastify";
import { loginUser } from "src/redux/Slices/async/AsyncFunction";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const toNavigate = useNavigate();

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.authentication);

  const onSubmit = async(data) => {

    try {
      if(data && !loading){
        await dispatch(loginUser(data));
        reset({ email: data.email, password: data.password });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={LoginModuleCss.loginDashBoard}>
      <div className={LoginModuleCss.loginForm}>
        <div className={LoginModuleCss.formSection}>
          <div className="formHeading text-4xl text-gray-950 cursor-context-menu">
            Welcome, <br />
            Please Authorize
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomsInput
              type="email"
              icon={faEnvelope}
              placeholder="Enter your email"
              register={register}
              errors={errors}
              inputName="email"
              validation={{
                required: "Please enter the email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
              }}
            />
            <CustomsInput
              type="password"
              icon={faLock}
              placeholder="Enter your password"
              register={register}
              errors={errors}
              inputName="password"
              validation={{
                required: "Please enter the password",
              }}
            />
            <div className="toRegister">
              Don't have account ?{" "}
              <Link className=" text-blue-600" to="/registration">
                Register
              </Link>
            </div>
            <div className={LoginModuleCss.loginButton}>
              <button type="submit">{loading ? "logging..." : "Log In"}</button>
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
