import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import { Button } from "src/Components/index";
import registerStyleModule from "src/styles/register.module.scss";
import registerImage from "src/assets/loginImage.png";
import { registerUser } from "src/redux/Slices/async/AsyncFunction";
import Navbar from "src/Components/navbar/Navbar";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authentication);

  const password = watch("user_password");

  const onSubmit = async (data) => {
    const payload = {
      last_name: data.last_name,
      first_name: data.first_name,
      email: data.email,
      user_password: data.user_password,
      mobile_number: data.mobile_number,
    };

    try {
      await dispatch(registerUser(payload));
      toast.success("User registered successfully");
    } catch (error) {
      console.error("Error registering user", error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className={registerStyleModule.registerPage}>
      <Navbar />
      <div className={registerStyleModule.registrationDashboard}>
        <div className={registerStyleModule.registerForm}>
          <div className={registerStyleModule.formSection}>
            <h2 className={registerStyleModule.formHeading}>
              Welcome, <br /> Please register.
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={registerStyleModule.name}>
                <CustomsInput
                  placeholder="First name"
                  type="text"
                  inputName="first_name"
                  register={register}
                  errors={errors}
                  validation={{
                    required: "Name required",
                    maxLength: 8,
                    pattern: /^[A-Za-z ]{1,7}$/,
                  }}
                />
                <CustomsInput
                  placeholder="Last name"
                  type="text"
                  inputName="last_name"
                  register={register}
                  errors={errors}
                  validation={{
                    required: "Name required",
                    maxLength: 8,
                    pattern: /^[A-Za-z ]{1,7}$/,
                  }}
                />
              </div>
              <CustomsInput
                icon={faEnvelope}
                placeholder="Email"
                type="email"
                inputName="email"
                register={register}
                errors={errors}
                validation={{
                  required: "Please enter the email",
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                }}
              />
              <CustomsInput
                placeholder="Enter phone number"
                icon={faPhone}
                type="text"
                inputName="mobile_number"
                register={register}
                errors={errors}
                validation={{
                  required: "Please enter the phone number",
                  pattern: /^\d{10}$/,
                }}
              />
              <CustomsInput
                icon={faLock}
                placeholder="Password"
                type="password"
                inputName="user_password"
                register={register}
                errors={errors}
                validation={{
                  required: "Please enter the password",
                  maxLength: 4,
                }}
              />
              <CustomsInput
                icon={faLock}
                placeholder="Confirm Password"
                type="password"
                inputName="confirm_password"
                register={register}
                errors={errors}
                validation={{
                  required: "Please confirm password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                }}
              />
              <div className={registerStyleModule.registerAndLoginLink}>
                <Button
                  type="submit"
                  className={registerStyleModule.signupButton}
                >
                  {loading ? "Registering..." : "Register"}
                </Button>
                <p className={registerStyleModule.alreadyAccount}>
                  Already have an account?{" "}
                  <Link className="text-blue-700 underline" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className={registerStyleModule.registerImage}>
          <img src={registerImage} alt="Register" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
