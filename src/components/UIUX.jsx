import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import ui from "../assets/ui-ux-card.svg";
import social from "../assets/social-card.svg";
import photo from "../assets/photo-card.svg";


const UIUX = forwardRef(function Skills({}, ref) {
    return (
        <section 
            ref={ref}
            className="uiux bg-uiux">
            <h1>UI/UX Design & Development</h1>
        </section>
    )
});

export default UIUX