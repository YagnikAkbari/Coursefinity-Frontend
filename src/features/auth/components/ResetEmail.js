import Button from "../../ui/Button";
import SuccessMessage from "../../ui/SuccessMessage";
import Input from "../../ui/input";
import { VALIDATOR_EMAIL } from "../../../utils/validators";
import useForm from "../form-hook";
import { resetEmail } from "../../../services/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { toasterConfig } from "../../../utils/config";
import Spinner from "../../ui/Spinner";

function ResetEmail() {
  const [searchParams] = useSearchParams();
  const [sendResetMail, setSendResetMail] = useState(false);

  const roleParams = searchParams.get("role");
  const [isTouched, setIsTouched] = useState(false);
  const [displayPop, setDisplayPop] = useState(false);
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
    setIsTouched(true);
    if (!formState.isValid) {
      return;
    }
    try {
      setSendResetMail(true);
      const resetEmailData = { email: formState.inputs.email.value };
      const response = await resetEmail(roleParams, resetEmailData);
      if (response?.code === 200) {
        setDisplayPop(true);
      }
      setSendResetMail(false);
    } catch (err) {
      setSendResetMail(false);
      if (err?.response?.status === 404) {
        toast.error(err?.response?.data?.message ?? "Exception", toasterConfig);
      }
      if (err?.response?.status === 500) {
        navigate("/error");
      }
    }
  };

  useEffect(() => {
    let timeoutId;

    if (displayPop) {
      timeoutId = setTimeout(() => {
        setDisplayPop(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayPop]);
  return (
    <div className="bg-[#c4c4c4] h-screen flex justify-center items-center">
      <div className="relative flex flex-col w-[24rem] row-span-5 ">
        <form method="post" onSubmit={handleSubmit}>
          <h2 className="font-bold text-[1.5rem] leading-[1.8rem]">
            Reset password
          </h2>
          <Input
            id="email"
            type="text"
            element="input"
            isTouched={isTouched}
            placeholder="Email"
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
            errorText="Please enter a valid email."
            className={`w-full relative bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[2rem] border-0 focus:ring-0 ml-auto `}
          />
          <Button type="submit" className="flex mt-[2rem] justify-center">
            {sendResetMail && (
              <Spinner parent={true} className="me-4" type="small" />
            )}
            Send mail
          </Button>
        </form>
        {displayPop && (
          <div className="w-full absolute -bottom-[5rem] animate-slideupanime">
            <SuccessMessage
              content={"Email has been sent. ( Check your mail✌️)"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetEmail;
