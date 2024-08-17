import { MouseEvent } from "react";

interface ButtonProps {
  type: string;
  btnText: string;
  reference: string;
}

export default function Button({ btnText, reference, type }: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (type === "scroll") {
      handleScroll(event);
    }

    if (type === "link") {
      window.location.href = reference;
    }
  };

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
        onClick={handleClick}
        className="bg-accent hover:bg-accent-hover text-white font-bold py-3 p-4 rounded-3xl"
      >
        {btnText}
      </button>
    </div>
  );
}
