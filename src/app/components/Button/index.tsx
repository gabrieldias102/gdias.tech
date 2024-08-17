import { MouseEvent } from "react";

interface ButtonProps {
  btnText: string;
  reference: string;
}

export default function Button({ btnText, reference }: ButtonProps) {
  const handleScroll = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(reference);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button
        onClick={handleScroll}
        className="bg-accent hover:bg-accent-hover text-white font-bold py-3 p-4 rounded-3xl"
      >
        {btnText}
      </button>
    </div>
  );
}
