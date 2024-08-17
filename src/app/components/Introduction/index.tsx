import Button from "../Button";

export default function Introduction() {
  return (
    <div className="flex flex-col sm:w-2/3 lg:w-1/3 mx-auto text-center gap-8 pt-16 pb-8 px-10">
      <h1 className="text-4xl font-bold"> Hello! I'm Gabriel Dias!</h1>
      <p className="text-lg font-thin">
        Gabriel Dias, a full-stack developer, welcomes you to explore his
        expertise in modern web technologies through a clean and responsive
        design. Discover his projects, skills, and experiences as you navigate
        through the portfolio.
      </p>
      <Button btnText="Explore Now" reference="techs" />
    </div>
  );
}
