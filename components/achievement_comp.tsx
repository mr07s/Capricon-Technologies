import { User } from "lucide-react";

export default function AchievementComp() {
  return (
    <div className="flex justify-center ">
      <div className="w-[95%]  bg-green-300  justify-center items-center grid grid-cols-1 md:grid-cols-3 md:h-[60vh]">
        <div className="bg-red-300  h-[30vh] flex justify-center items-center flex-col  m-4">
          <User className=" w-[20vw] h-[20vh]" />
          <span className="text-4xl font-bold ">300+ Clients</span>
        </div>
        <div className="bg-red-300 h-[30vh] flex justify-center items-center flex-col m-4">
          <User className=" w-[20vw] h-[20vh]" />
          <span className="text-4xl font-bold ">300+ Clients</span>
        </div>
        <div className="bg-red-300  h-[30vh] flex justify-center items-center flex-col  m-4">
          <User className=" w-[20vw] h-[20vh]" />
          <span className="text-4xl font-bold ">300+ Clients</span>
        </div>
      </div>
    </div>
  );
}
