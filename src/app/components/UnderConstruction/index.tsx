import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col w-full h-screen text-center justify-center gap-8 p-4">
      <h1 className="text-4xl md:text-6xl font-bold uppercase">
        Under Construction
      </h1>
      <p className="w-full md:w-1/2 lg:w-1/3 mx-auto text-base md:text-lg">
        🚧 Pardon the dust! I'm busy coding like mad scientists 🧪🔧 to bring
        this site to life. Check back soon for something awesome! In the
        meantime, feel free to imagine a website so cool, it blows your socks
        off 🧦💨!
      </p>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto pt-16">
        <p className="text-base">
          While this feature isn't ready, check out my socials to stay updated!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/gabriel.dias102"
            className="text-blue-500 hover:underline flex items-center gap-2"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/gabrieldias102"
            className="text-blue-500 hover:underline flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.github.com/gabrieldias102"
            className="text-blue-500 hover:underline flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
