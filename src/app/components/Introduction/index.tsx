import Button from "../Button";

export default function Introduction() {
  return (
    <div className="flex flex-col sm:w-2/3 lg:w-1/3 mx-auto text-center gap-8 pt-16 pb-8 px-10">
      <h1 className="text-4xl font-bold"> Hello! I'm Gabriel Dias!</h1>
      <p className="text-lg font-thin">
        I'm a full-stack developer, be welcome to explore my expertise in modern
        web technologies through a clean and responsive design. Discover my
        projects, skills, and experiences as you navigate here.
      </p>
      <Button btnText="Explore Now" reference="techs" type="scroll" />
    </div>
  );
}
