import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import {
  authenticateScreenImage,
  Button,
  LoginModuleCss,
} from "../../Components/index";
import { toast } from "react-toastify";
import { loginUser } from "src/redux/Slices/async/AsyncFunction";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "src/Components/navbar/Navbar";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, role } = useSelector((state) => state.authentication);

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      user_password: data.password,
    };

    try {
      const result = await dispatch(loginUser(payload)).unwrap();

      if (result.isAdmin && role === "admin") {
        navigate("/admin");
        toast.success("Login successful as admin");
      } else {
        navigate("/user");
        toast.success("Login successful as patient");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={LoginModuleCss.loginPage}>
      <Navbar />
      <div className={LoginModuleCss.loginDashBoard}>
        <div className={LoginModuleCss.loginForm}>
          <div className={LoginModuleCss.formSection}>
            <div className="formHeading text-4xl text-gray-950 cursor-context-menu">
              Welcome, <br />
              Please Login
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
              <div className={LoginModuleCss.toRegister}>
                Don't have an account?{" "}
                <Link className="underline text-blue-600" to="/registration">
                  Register
                </Link>
              </div>
              <div className={LoginModuleCss.loginButton}>
                <Button type="submit">
                  {loading ? "Logging in..." : "Log In"}
                </Button>
              </div>
            </form>
          </div>
          <div className={LoginModuleCss.loginUnderline}>
            <span className={LoginModuleCss.line}></span>
            <span className={LoginModuleCss.or}>OR</span>
            <span className={LoginModuleCss.line}></span>
          </div>
        </div>
        <div className={LoginModuleCss.loginScreenImage}>
          <img src={authenticateScreenImage} alt="Authentication" />
        </div>
      </div>
    </div>
  );
};

export default Login;
