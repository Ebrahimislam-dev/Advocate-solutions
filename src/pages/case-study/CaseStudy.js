import React from "react";
import StudentAnimation from "./../../Animations/StudentAnimation";

const CaseStudy = () => {
  return (
    <div className=" m-16">
      <div className=" py-7">
        <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
          For Law Students
        </h1>
      </div>
      <div className=" grid grid-cols-2  px-5 xl:px-20">
        <div className=" border border-sky-400 hover:border-indigo-500 rounded-xl shadow-lg w-full h-full px-5 xl:px-10 py-20 ">
          <h1 className=" text-xl font-bold text-center">
            Basically, this feature is for the only law student's .
          </h1>
          <h3 className=" text-sm text-slate-800 text-center font-semibold font-serif py-10">
            Currently we are not working here, in future we can develop this
            feature
          </h3>
        </div>
        <div>
          <StudentAnimation />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
