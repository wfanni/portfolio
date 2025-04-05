import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function SuccessEmailModal({ isSuccess, setIsSuccess, isLoading, setIsLoading }) {
  const { t } = useTranslation();

  const modal = useRef();
  if (isSuccess && modal.current) {
    modal.current.showModal();
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }

  return (
    <dialog
      ref={modal}
      className={`${
        !isSuccess ? "hidden" : "flex"
      } success-popup lg:w-1/2 min-h-[300px] text-dark text-center p-6 rounded-xl bg-white flex-col items-center justify-center gap-4`}
    >
      <i className="text-orange text-[4rem] -mb-4 fa-regular fa-heart"></i>
      <h2 className="text-[2rem]">{t("thankYouModalTitle")}</h2>
      <h3>{t("thankYouModalContent")}</h3>
      <form method="dialog">
        <button
          type="submit"
          className="mt-1 py-2 px-6 pt-[0.7rem] bg-orange-secondary text-dark shadow-xl rounded-xl hover:bg-orange hover:text-white hover:shadow-md transition-all duration-200"
          onClick={() => setIsSuccess(false)}
        >
          {t("thankYouModalClose")}
        </button>
      </form>
    </dialog>
  );
}
