"use client";

import { useSession, signIn } from "next-auth/react";
import React from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import Loader from "../../components/Loader";
import { useRouter } from "next/navigation";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="relative flex justify-center items-center mt-14 ">
      {/* {status === "loading" && <Loader />} */}
      <div className="p-[100px] max-sm:p-[70px] max-[440px]:p-[40px] bg-LsoftBg dark:bg-DsoftBg flex flex-col items-center justify-center gap-6 rounded-xl">
        <div
          className="flex gap-3 p-4 rounded-[10px] border-none text-white font-bold cursor-pointer bg-[#ff5555]"
          onClick={() => signIn("google")}
        >
          <FaGoogle className="mt-1" color="#4285F4" size={18} />
          Sign in With Google
        </div>
        <div
          onClick={() => signIn("github")}
          className="flex gap-3 p-4 rounded-[10px] border-none text-white font-bold cursor-pointer bg-[#111]"
        >
          <FaGithub className="mt-1" size={18} />
          Sign in With Github
        </div>
      </div>
    </div>
  );
};

export default Login;
