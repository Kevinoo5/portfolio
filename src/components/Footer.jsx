import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_MAIL_SERVICE, VITE_MAIL_TEMPLATE, form.current, {
            publicKey: import.meta.env.VITE_MAIL_PUBLICKEY,
        })
            .then((result) => {
                console.log("Email sent successfully!");
                form.current.reset();
                toast.success('Email sent successfully!');
            })
            .catch((error) => {
                console.error("Error sending email: ", error);
                toast.error('Error sending email');
            });
    }

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
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-1/2">
        <input
          type="text"
          name="from_name"
          placeholder="Full Name"
          className="bg-slate-700 text-white w-11/12 md:w-4/5 p-2 h-12 rounded-md"
          required
        />
        <input
          type="text"
          name="from_email"
          placeholder="Email"
          className="bg-slate-700 text-white w-11/12 md:w-4/5 p-2 h-12 rounded-md"
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          className="bg-slate-700 text-white w-11/12 md:w-4/5 p-2 h-20 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-purple-950 text-white w-11/12 md:w-1/5 mt-1 p-2 rounded-md"
        >
          Send Mail
        </button>
      </form>
        <ToastContainer />
    </footer>
  );
};

export default Footer;
