import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const EmailForm = ({ displayClasses }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_SERVICE,
        import.meta.env.VITE_MAIL_TEMPLATE,
        form.current,
        {
          publicKey: import.meta.env.VITE_MAIL_PUBLICKEY,
        }
      )
      .then(() => {
        console.log("Email sent successfully!");
        form.current.reset();
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        toast.error("Error sending email");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`flex-col gap-4 w-full md:w-1/2 ${displayClasses}`}
    >
      <input
        type="text"
        name="from_name"
        placeholder="Full Name"
        className="bg-slate-700 text-white w-full md:w-4/5 p-2 h-12 rounded-md"
        required
      />
      <input
        type="email"
        name="from_email"
        placeholder="Email"
        className="bg-slate-700 text-white w-full md:w-4/5 p-2 h-12 rounded-md"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="bg-slate-700 text-white w-full md:w-4/5 p-2 h-20 rounded-md"
        required
      />
      <button
        type="submit"
        className="bg-purple-900 text-white w-full hover:bg-purple-950 transition duration-200 md:w-1/5 mt-1 p-2 rounded-md"
      >
        Send Mail
      </button>
    </form>
  );
};

export default EmailForm;
