const Footer = () => {
  return (
    <footer className="flex text-white justify-around bottom-0 left-0 pt-24 pb-16 bg-slate-800">
      <div className="flex flex-col pl-4 pr-4 md:px-12">
        <p className="text-3xl md:text-5xl mb-4 font-bold">Get in touch</p>
        <p className="text-md">
          Have questions or requests? Send me an email and lets talk!
        </p>
        <div className="flex mt-12 flex-row gap-6 items-center">
          <a href="https://github.com/Kevinoo5" target="_blank" rel="noopener noreferrer">
            <img src="github-mark-white.svg" alt="GitHub" className="w-12 md:w-full" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-noormets-1905a4253/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="LinkedIn"
              className="w-12 md:w-full"
            />
          </a>
        </div>
      </div>
      <form className="flex flex-col gap-4 w-1/2">
        <input
          type="text"
          placeholder="Full Name"
          className="bg-slate-700 text-white w-11/12 md:w-4/5 p-2 h-12 rounded-md"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-slate-700 text-white w-11/12 md:w-4/5 p-2 h-12 rounded-md"
        />
        <textarea
          type="text"
          placeholder="Message"
          className="bg-slate-700 text-white w-11/12 md:w-4/5 p-2 h-20 rounded-md"
        />
        <button
          type="submit"
          className="bg-purple-950 text-white w-3/5 md:w-1/5 mt-1 p-2 rounded-md"
        >
          Send
        </button>
      </form>
    </footer>
  );
};

export default Footer;
