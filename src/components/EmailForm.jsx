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
    <div className="-mt-28 flex flex-col gap-10">
      <h2 className="font-normal w-full">{t("contactFormComment")}</h2>
      <form
        onSubmit={(e) => handleEmailSubmmit(e)}
        className="h-full min-h-[400px] w-full flex flex-col gap-8 justify-center xs:items-center lg:items-end"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder={t("formPlaceholderName")}
          required
          className="w-full min-h-[45px] border-b-2 border-orange outline-0 indent-2 py-1 hover:border-b-4 active:border-b-4 focus:border-b-4 transition-all duration-200"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder={t("formPlaceholderEmail")}
          required
          className="w-full min-h-[45px] border-b-2 border-orange outline-0 indent-2 py-1 hover:border-b-4 active:border-b-4 focus:border-b-4 transition-all duration-200"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={t("formPlaceholderMessage")}
          rows="4"
          required
          className="w-full min-h-[135px] border-2 border-orange rounded-xl outline-0 indent-2 py-1 hover:border-4 active:border-4 focus:border-4 transition-all duration-200"
        />
        <button
          className="w-full py-2 px-10 text-black bg-orange/40 shadow-xl rounded-xl hover:bg-orange hover:text-white hover:shadow-md transition-all duration-200"
          type="submit"
        >
          {t("formSubmit")}
        </button>
      </form>
      <SuccessEmailModal isSuccess={success} setIsSuccess={setSuccess} />
    </div>
  );
}
