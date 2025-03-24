import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import registerStyleModule from "src/styles/register.module.scss";
import Button from "../../Components/button/Button";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toNavigate = useNavigate();

  const onSubmit = (data) => {  
    console.log(data); 
    toNavigate("/login");  
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
                  inputName="firstname"
                  register={register}
                  errors={errors}
                  validation={{
                    required: "Please enter the name",
                    max: {
                      value: 8,
                      message: "8 characters allowed",
                    },
                    pattern: {
                      value: /^[A-Za-z ]{1,7}$/,
                      message: "Please enter a valid name",
                    },
                  }}
                />
              </div>

              <div className={registerStyleModule.lastName}>
                <CustomsInput
                  placeholder="Last name"
                  type="text"
                  inputName="lastname"
                  register={register}
                  errors={errors}
                  validation={{
                    required: "Please enter the name",
                    max: {
                      value: 8,
                      message: "8 characters allowed",
                    },
                    pattern: {
                      value: /^[A-Za-z ]{1,7}$/,
                      message: "Please enter a valid name",
                    },
                  }}
                />
              </div>

              <div className="registerButton">
                <Button type="submit" />Register
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Registration;
