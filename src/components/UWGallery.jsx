import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Images from "./Images";
import slides from "../json/uwSlides";

export default function UWGallery({ openPanel }) {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <Images data={slides} onClick={(currentIndex) => setIndex(currentIndex)} openPanel={openPanel} />
            <Lightbox
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                captions={{
                    descriptionTextAlign: 'center'
                }}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
            />
        </>
    )
}