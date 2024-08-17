import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-full flex flex-col mx-auto text-center py-8 bg-dark-background-secondary text-white">
      <div className="mb-4">
        <p>&copy; 2024 Gabriel Dias. All rights reserved.</p>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="/about" className="hover:underline">
          About Me
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </div>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/gabrieldias102"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/gabriel.dias102"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.github.com/gabrieldias102"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
}
