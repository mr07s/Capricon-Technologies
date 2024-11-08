export default function LandinComp() {
  return (
    <div className="bg-black  grid  grid-cols-1  animate-appear  lg:h-[100vh] lg:grid-cols-2 ">
      <div className="bg-white  w-[95%]  h-[56vh]  mt-4 flex justify-center items-center pt-4 flex-col rounded-lg border animate-slide-in-left pb-4 ml-auto mr-auto lg:h-[65vh] lg:mt-20 lg:ml-6 ">
        <h1 className="text-3xl font-semibold w-[80%] text-center">
          Enlarge Your Buisness & Grow With us
        </h1>
        <h1 className="text-3xl font-semibold mt-4">Company Type</h1>
        <h1 className="text-3xl font-semibold mt-4">Company Name</h1>
        <p className="flex items-center justify-center  bg-white mt-4 w-[65%] text-center">
          We help companies build great software products. We are a team of
          senior software engineers who love to build great products.{" "}
        </p>
        <button className=" w-72 mt-4 bg-black text-white rounded-lg h-8">
          Augment my software team
        </button>
      </div>
      <div className="bg-white w-[95%] m-auto ml-auto flex justify-center items-center mt-4 mb-4 flex-col rounded-lg border animate-slide-in-right  h-[60vh] lg:mt-40 lg:ml-6 lg:mr-10 lg:h-[65vh]">
        <img></img>
      </div>
    </div>
  );
}
