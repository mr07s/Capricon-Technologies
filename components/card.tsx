export default function Card({
  heading,
  description,
  width,
}: {
  heading: string;
  description: string;
  width: string;
}) {
  return (
    <div className={`h-[18rem] border ${width} rounded-lg m-4`}>
      <span className="text-2xl  font-bold flex justify-center mb-4">
        Applicaton Renovation
      </span>
      <span className="flex text-center ">
        Our Mobile App Development Lab is perfect for clients who need a
        dedicated team for mobile app projects without the hassle of setting up
        an internal division. This service offers a virtual extension of your
        company, providing specialized development at competitive rates with
        minimal overhead, focused solely on delivering your mobile app
        solutions.
      </span>
      ;
    </div>
  );
}
