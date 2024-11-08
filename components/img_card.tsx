export default function ImageCard({
  NormalflexDirection,
  MDflexDirection,
}: {
  MDflexDirection: string;
  NormalflexDirection?: string;
}) {
  return (
    <div
      className={`bg-yellow-500 border  flex flex-col    md:${MDflexDirection}`}
    >
      <div className="bg-red-300 h-[35vh] w-[100%] md:w-[50%]">Image</div>
      <div className="justify-center h-[35vh] bg-red-500 flex flex-row pt-4 pb-4 items-center w-[100%]   md:w-[50%] ">
        <div className="bg-red-700 w-[80%] h-[90%] flex flex-col mt-4 ">
          <span className="text-3xl font-semibold ">Heading</span>
          <span className="mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            veritatis unde repellat exercitationem, quasi tempora sunt nihil
            fuga iure expedita quisquam tempore et pariatur, quibusdam quo totam
            consequatur illo earum alias dicta.
          </span>
        </div>
      </div>
    </div>
  );
}
