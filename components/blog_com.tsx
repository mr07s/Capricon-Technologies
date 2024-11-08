import BlogCard from "./blod_card";
import ImageCard from "./img_card";

export default function BlogComp() {
  return (
    <div className="flex h-[70vh] items-center flex-col">
      <span className="text-center text-5xl font-semibold mt-4">
        From the Blog
      </span>
      <span className="text-2xl text-center px-4 mt-4">
        Get all the latest insights on AI, Data Science, and Machine Learning
        delivered by the team from Capricon Technologies
      </span>
      <div className="grid grid-cols-1 pl-4 pt-4 mt-8  md:grid-cols-3  bg-green-500">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
