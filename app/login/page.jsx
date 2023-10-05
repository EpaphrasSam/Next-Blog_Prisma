import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-14 ">
      <div className="p-[100px] max-sm:p-[70px] max-[440px]:p-[40px] bg-LsoftBg dark:bg-DsoftBg flex flex-col items-center justify-center gap-6 rounded-xl">
        <div className="p-4 rounded-[10px] border-none text-white font-bold cursor-pointer bg-[#ff5555]">
          Sign in With Google
        </div>
        <div className="p-4 rounded-[10px] border-none text-white font-bold cursor-pointer bg-[#111]">
          Sign in With Github
        </div>
        <div className="p-4 rounded-[10px] border-none text-white font-bold cursor-pointer bg-[#087BEA]">
          Sign in With Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
