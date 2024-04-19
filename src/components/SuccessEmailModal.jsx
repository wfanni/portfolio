import { useRef } from "react"

export default function SuccessEmailModal({isSuccess, setIsSuccess}) {
    const modal = useRef()
    if(isSuccess && modal.current) {
        modal.current.showModal();
    }
    return (
        <dialog ref={modal} className={`${!isSuccess ? "hidden" : "flex"} xs:w-4/5 lg:w-1/2 min-h-[300px] text-center p-6 rounded-[25px] bg-white flex-col items-center justify-between`}>
            <h2 className="text-[2rem]">Thank you for reaching out!</h2>
            <h3>I will be in touch as soon as possible!</h3>
            <form method="dialog">
                <button type="submit" className="py-2 px-6 pt-[0.7rem] bg-orange text-white rounded-full" onClick={() => setIsSuccess(false)}>Close</button>
            </form>
        </dialog>
    )
}