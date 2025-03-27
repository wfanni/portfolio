import { useTranslation } from "react-i18next";

export default function Footer ({ pathname }) {
    return (
        <div className="w-full h-fit font-normal text-gray-500 text-[1rem] absolute bottom-0 z-10 flex justify-between">
            <p>2025 | developed by wfanni</p>
            <p>illustrations from <a className="font-[500] underline" href="https://storyset.com/online">Storyset</a> | <a className="font-[500] underline" href="https://mockupbee.com/">MockupBee</a> | <a className="font-[500] underline" href="https://www.freepik.com/">Freepik</a></p>
        </div>
    );
};

