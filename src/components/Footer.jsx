import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import EmailForm from "./EmailForm.jsx";

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="flex text-white flex-col items-center md:items-start md:flex-row justify-around bottom-0 left-0 pt-24 pb-16 bg-slate-800">
      {isDesktop ? (
        <div className="hidden md:flex flex-col px-4 md:px-12">
          <p className="text-3xl md:text-5xl mb-4 font-bold">Get in touch</p>
          <p className="text-md">
            Have questions or requests? Send me an email and lets talk!
          </p>
          <div className="hidden md:flex mt-12 flex-row gap-6 items-center">
            <a
              href="https://github.com/Kevinoo5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="github-mark-white.svg"
                alt="GitHub"
                className="w-12 md:w-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-noormets-1905a4253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn"
                className="w-12 md:w-full"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="flex md:hidden pb-6 flex-col px-4">
          <p className="text-3xl md:text-5xl mb-2 font-bold">Get in touch</p>
          <p className="text-md pb-6">
            Have questions or requests? Send me an email and let&apos;s talk!
          </p>
          <EmailForm displayClasses={"flex md:hidden"} />
          <div className="mt-12 flex justify-center flex-row gap-6 items-center">
            <a
              href="https://github.com/Kevinoo5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="github-mark-white.svg"
                alt="GitHub"
                className="w-16 md:w-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-noormets-1905a4253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn"
                className="w-16 md:w-full"
              />
            </a>
          </div>
        </div>
      )}
      <EmailForm displayClasses={"hidden md:flex"} />
      <ToastContainer />
    </footer>
  );
};

export default Footer;
