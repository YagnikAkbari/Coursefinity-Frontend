import { Form, redirect } from "react-router-dom";
import Button from "../../ui/Button";
import SuccessMessage from "../../ui/SuccessMessage";

function ResetPassword() {
  return (
    <div className="bg-[#c4c4c4] h-screen flex justify-center items-center">
      <div className="flex flex-col w-[24rem] row-span-5 ">
        <Form method="post">
          <h2 className="font-bold text-[1.5rem] leading-[1.8rem]">
            Reset password
          </h2>
          <input
            type="password"
            name="password"
            className="w-full bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[2rem] border-0 focus:ring-0"
            placeholder=" New password"
          />
          <input
            type="text"
            name="cpassword"
            className="w-full bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[1.2rem] border-0 focus:ring-0"
            placeholder="Confirm password"
          />
          <Button type="submit" className="mt-[2rem]">
            Reset
          </Button>
        </Form>
        <div className="mt-5">
          <SuccessMessage content={"Password changed successful"} />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;

export async function action({ request, params }) {
  const data = await request.formData();
  const resetPasswordData = {
    pass: data.get("password"),
    cpass: data.get("cpassword"),
  };
  console.log(resetPasswordData);
  return redirect("/");
}
