import Feature from "@/Feature";
import {
  FaCode,
  FaStar,
  FaOutdent,
  FaCrosshairs,
  FaCrown,
} from "react-icons/fa";

export default function Strengths() {
  return (
    <div className="flex flex-col sm:w-2/3 lg:w-2/3 mx-auto text-center py-20 px-4">
      <p className="text-lg font-bold text-accent">Developer</p>
      <h1 className="text-4xl font-bold pb-8"> My Strengths</h1>
      <p className="text-lg font-thin pb-16">
        Unique strengths, a strategic approach, and a strong commitment to
        development, I create reliable and innovative solutions that.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 pb-4">
        <Feature
          icon={<FaStar color={"#6366F1"} size={20} />}
          title="Experience"
          description="with years of practice and learning, I possess a wealth of experience in development, ensuring top-notch solutions for every project."
        />
        <Feature
          icon={<FaOutdent color={"#6366F1"} size={20} />}
          title="Attention to Detail, "
          description="I have a meticulous eye for detail that guarantees a flawless and polished final product, leaving no stone unturned in the development process."
        />
        <Feature
          icon={<FaCode color={"#6366F1"} size={20} />}
          title="Passion for Coding"
          description="driven by results, I focus on achieving tangible outcomes in all my projects, ensuring success and exceeding expectations."
        />
        <Feature
          icon={<FaCrosshairs color={"#6366F1"} size={20} />}
          title="Results-Driven Approach, "
          description="I focus on achieving tangible outcomes in all my projects, ensuring success and exceeding expectations."
        />
        <Feature
          icon={<FaCrown color={"#6366F1"} size={20} />}
          title="Commitment to Excellence"
          description="is not just a goal, it's a minimum for me. Every project is executed with precision and a relentless pursuit of perfection."
        />
        <Feature
          icon={<FaCode color={"#6366F1"} size={20} />}
          title="Dedication to Success,"
          description="I'm dedicated to delivering exceptional results, ensuring satisfaction and success for everything that I do."
        />
      </div>
    </div>
  );
}
