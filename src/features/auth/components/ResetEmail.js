import Button from "../../ui/Button";
import SuccessMessage from "../../ui/SuccessMessage";
import Input from "../../ui/input";
import { VALIDATOR_EMAIL } from "../../../utils/validators";
import useForm from "../form-hook";
import { resetEmail } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function ResetEmail() {
  const navigate = useNavigate();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resetEmailData = { email: formState.inputs.email.value };
      await resetEmail(resetEmailData);

      navigate("/reset-password");
    } catch (err) {
      navigate("/error");
    }
  };
  return (
    <div className="bg-[#c4c4c4] h-screen flex justify-center items-center">
      <div className="flex flex-col w-[24rem] row-span-5 ">
        <form method="post" onSubmit={handleSubmit}>
          <h2 className="font-bold text-[1.5rem] leading-[1.8rem]">
            Reset password
          </h2>
          <Input
            id="email"
            type="text"
            element="input"
            placeholder="Email"
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
            errorText="Please enter a valid email."
            className={`w-full relative bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[2rem] border-0 focus:ring-0 ml-auto `}
          />
          <Button
            type="submit"
            className="mt-[2rem]"
            disabled={!formState.isValid}
          >
            Send mail
          </Button>
        </form>
        <div className="mt-5">
          <SuccessMessage content={"Email has been sent"} />
        </div>
      </div>
    </div>
  );
}

export default ResetEmail;

// ${
//   !formState.isValid
//     ? "focus:ring-1 focus:ring-[#F42929] focus:placeholder:text-[#F42929] ring-1 ring-[#F42929] placeholder:text-[#F42929]"
//     : "focus:ring-0"
// }
// ${!formState.isValid ? "Invalid Email" : "Email"}
