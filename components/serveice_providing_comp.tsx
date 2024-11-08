import Card from "./card";
import softwaredev from "../assets/software_dev.avif";
import ImageCard from "./img_card";
export default function ServeiceComp() {
  return (
    <div className="flex flex-col justify-center items-center p-2 ">
      <div className="h-[20%]  w-[95%] mt-8 rounded-lg bg-green-500 p-2">
        <ImageCard MDflexDirection="flex-row" />
        <ImageCard MDflexDirection="flex-row-reverse" />
        <ImageCard MDflexDirection="flex-row" />
        <ImageCard MDflexDirection="flex-row-reverse" />
      </div>
    </div>
  );
}
