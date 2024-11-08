export default function BlogCard() {
  return (
    <div className="w-[95%] h-[100vh]   ">
      <div className="h-[30vh] bg-black rounded-md">Img</div>
      <div className="h-[35vh] flex flex-col mt-6 rounded-md">
        <span className="px-4">Date and time</span>
        <span className="text-2xl font-bold mt-6 px-4">heading</span>
        <span className="text-xl mt-6 px-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          voluptates facilis illo? Optio incidunt doloribus nisi id tenetur. Eum
          voluptate velit corporis cumque voluptates. Velit totam quis quasi
          tempora rem ullam doloribus?
        </span>
        <button className="bg-green-400 w-[30%] h-16 rounded-md ml-4 mt-6 mb-2">
          Read More
        </button>
      </div>
    </div>
  );
}
