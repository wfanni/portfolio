import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function SuccessEmailModal({ isSuccess, setIsSuccess }) {
  const { t } = useTranslation();

  const modal = useRef();
  if (isSuccess && modal.current) {
    modal.current.showModal();
  }
  return (
    <dialog
      ref={modal}
      className={`${
        !isSuccess ? "hidden" : "flex"
      } xs:w-4/5 lg:w-1/2 min-h-[300px] text-center p-6 rounded-[25px] bg-white flex-col items-center justify-between`}
    >
      <h2 className="text-[2rem]">{t("thankYouModalTitle")}</h2>
      <h3>{t("thankYouModalContent")}</h3>
      <form method="dialog">
        <button
          type="submit"
          className="py-2 px-6 pt-[0.7rem] bg-orange text-white rounded-full"
          onClick={() => setIsSuccess(false)}
        >
          {t("thankYouModalClose")}
        </button>
      </form>
    </dialog>
  );
}
