import { Form } from "react-router-dom";
import Button from "../../ui/Button";
import SuccessMessage from "../../ui/SuccessMessage";

function ResetEmail() {
  const isValid = false;
  return (
    <div className="bg-[#c4c4c4] h-screen flex justify-center items-center">
      <div className="flex flex-col w-[24rem] row-span-5 ">
        <Form method="post">
          <h2 className="font-bold text-[1.5rem] leading-[1.8rem]">
            Reset password
          </h2>
          <input
            type="email"
            name="email"
            className={`w-full bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[2rem] border-0 ${
              isValid
                ? "focus:ring-1 focus:ring-[#F42929] focus:placeholder:text-[#F42929]"
                : "focus:ring-0"
            } `}
            placeholder={`${isValid ? "Invalid Password" : "Email"}`}
            required
          />
          <Button type="submit" className="mt-[2rem]">
            Send mail
          </Button>
        </Form>
        <div className="mt-5">
          <SuccessMessage content={"Email has been sent"} />
        </div>
      </div>
    </div>
  );
}

export default ResetEmail;

export async function action({ request, params }) {
  const data = await request.formData();
  const resetEmailData = {
    email: data.get("email"),
  };
  console.log(resetEmailData);
  return null;
}
