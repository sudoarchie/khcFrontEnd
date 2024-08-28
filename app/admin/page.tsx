import Image from "next/image";
import { NavbarSec } from "../components/NavbarSecoundary";
import graphicsLogin from "@/public/8ff238e5b5acb1cf34f2dd1e1e2bcbea.png";
import Link from "next/link";
import { InputField } from "../components/Inputfield";
import { PrimaryButton } from "../components/PrimaryButton";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <NavbarSec></NavbarSec>
      <div className="flex h-screen items-center">
        <div className="hidden sm:block w-1/2">
          <h1 className="text-4xl text-center ">Hi, Welcome back</h1>
          <h2 className="font-light text-center">
            More effectively with optimized workflows.
          </h2>
          <Image
            src={graphicsLogin}
            alt={"Signin and Signup"}
            className="mt-4"
          ></Image>
        </div>
        <div className=" w-full sm:w-1/2">
          <div className="mx-10 mb-5">
            <h1 className="text-2xl">Sign in to your account</h1>
            <div className=" flex gap-1">
              Don't have an account?
              <Link href="/signup" className="text-primary">
                Get started
              </Link>
            </div>
            <div className="mt-20">
              <InputField
                label="Email Address"
                className="w-full sm:w-[80%] mx-auto sm:mx-0"
                placeholder={"admin@gmail.com"}
                type="text"
              ></InputField>
              <InputField
                label="Password"
                className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
                placeholder={"8+ characters"}
                type="password"
              ></InputField>
              <PrimaryButton
                Name={"SIGN IN"}
                className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
              ></PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
