import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import SuccessEmailModal from "./SuccessEmailModal";

export default function EmailForm() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleEmailSubmmit(e) {
    e.preventDefault();

    const serviceID = "service_cvin473";
    const templateID = "template_9sq63vf";
    const publicKey = "WK_mSWr-jo0b-aJwL";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Fanni",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }
  return (
    <>
      <h2 className="mb-4 ml-4">{t("contactFormComment")}</h2>
      <form
        onSubmit={(e) => handleEmailSubmmit(e)}
        className="h-full flex flex-col gap-4 justify-center xs:items-center lg:items-end"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder={t("formPlaceholderName")}
          required
          className="w-full p-2 pt-[0.7rem] rounded-full indent-3 leading-6 outline-0 border-4 border-transparent transition-all duration-200 hover:border-green active:border-green focus:border-green"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder={t("formPlaceholderEmail")}
          required
          className="w-full p-2 pt-[0.7rem] rounded-full indent-3 leading-6 outline-0 border-4 border-transparent transition-all duration-200 hover:border-green active:border-green focus:border-green"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={t("formPlaceholderMessage")}
          rows="4"
          required
          className="w-full p-2 pt-[0.7rem] rounded-[25px] indent-3 leading-6 outline-0 border-4 rounded-ee-none border-transparent transition-all duration-200 hover:border-green active:border-green focus:border-green"
        />
        <button
          className="w-fit lg:mr-6 py-2 px-12 pt-[0.7rem] bg-green text-dark uppercase rounded-full shadow-xl transition-all duration-200 hover:scale-[1.1] hover:bg-[#7ffa93] focus:scale-[1.1] focus:bg-[#7ffa93]"
          type="submit"
        >
          {t("formSubmit")}
        </button>
      </form>
      <SuccessEmailModal isSuccess={success} setIsSuccess={setSuccess} />
    </>
  );
}
