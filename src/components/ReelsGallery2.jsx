import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Reels from "./Reels";
import slides from "../json/reelsSlides";

export default function ReelsGallery({ pathname }) {
    const [index, setIndex] = useState(-1);

    return (
        <div className="flex flex-col">
            <Reels data={slides} onClick={(currentIndex) => setIndex(currentIndex)}/>
            <Lightbox
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions, Video]}
                captions={{
                    descriptionTextAlign: 'center'
                }}
                autoPlay={true}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={[
                    
                ]}
                />
        </div>
    )
}