import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import registerStyleModule from "src/styles/register.module.scss";
import Button from "../../Components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import registerImage from "src/assets/loginImage.png";
import { toast } from "react-toastify";
import { registerUser } from "src/redux/Slices/async/AsyncFunction";
import { useDispatch } from "react-redux";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const toNavigate = useNavigate();

  const dispatch = useDispatch();

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
    }
  };

  return (
    <div className={registerStyleModule.registrationDashboard}>
      <div className={registerStyleModule.registerForm}>
        <div className={registerStyleModule.formSection}>
          <div className={registerStyleModule.formHeading}>
            Welcome, <br />
            Please register.
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={registerStyleModule.name}>
              <div className={registerStyleModule.firstName}>
                <CustomsInput
                  placeholder="First name"
                  type="text"
                  inputName="first_name"
                  register={register}
                  errors={errors}
                  validation={{
                    required: "name required",
                    max: {
                      value: 8,
                      message: "8 characters allowed",
                    },
                    pattern: {
                      value: /^[A-Za-z ]{1,7}$/,
                      message: "Invalid name",
                    },
                  }}
                />
              </div>

              <div className={registerStyleModule.lastName}>
                <CustomsInput
                  placeholder="Last name"
                  type="text"
                  inputName="last_name"
                  register={register}
                  errors={errors}
                  validation={{
                    required: "name required",
                    max: {
                      value: 8,
                      message: "8 characters allowed",
                    },
                    pattern: {
                      value: /^[A-Za-z ]{1,7}$/,
                      message: "Invalid name",
                    },
                  }}
                />
              </div>
            </div>
            <div className={registerStyleModule.registerEmail}>
              <CustomsInput
                icon={faEnvelope}
                placeholder="Email"
                type="email"
                inputName="email"
                register={register}
                errors={errors}
                validation={{
                  required: "Please enter the email",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email",
                  },
                }}
              />
            </div>
            <div className={registerStyleModule.registerPhoneNumber}>
              <CustomsInput
                placeholder="Enter phone number"
                icon={faPhone}
                type="text"
                inputName="mobile_number"
                register={register}
                errors={errors}
                validation={{
                  required: "Please enter the phone number",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                }}
              />
            </div>
            <div className={registerStyleModule.registerPassword}>
              <CustomsInput
                icon={faLock}
                placeholder="Password"
                type="password"
                inputName="user_password"
                register={register}
                errors={errors}
                validation={{
                  required: "Please enter the password",
                  max: {
                    value: 4,
                    message: "4 character's allowed",
                  },
                }}
              />
            </div>
            <div className={registerStyleModule.confirmPassword}>
              <CustomsInput
                icon={faLock}
                placeholder="Confirm Password"
                type="password"
                inputName="confirm_password"
                register={register}
                errors={errors}
                validation={{
                  required: "Please enter the password",
                  max: {
                    value: 4,
                    message: "4 character's allowed",
                  },
                  validate: (value) =>
                    value === password || "Passwords do not match",
                }}
              />
            </div>
            <div className={registerStyleModule.registerAndLoginLink}>
              <div className={registerStyleModule.registerButton}>
                <Button
                  type="submit"
                  className={registerStyleModule.signupButton}
                >
                  Register
                </Button>
              </div>
              <div className={registerStyleModule.alreadyAccount}>
                Already have an account ?
                <Link className="text-blue-800" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={registerStyleModule.registerImage}>
        <img src={registerImage} alt="registerImage" />
      </div>
    </div>
  );
};

export default Registration;
