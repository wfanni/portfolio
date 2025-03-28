import { useEffect } from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import fjGallery from 'flickr-justified-gallery';

export default function Gallery() {

    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
          itemSelector: '.gallery__item',
          rowHeight: 180,
          lastRow: 'start',
          gutter: 10,
          rowHeightTolerance: 0.1,
          calculateItemsHeight: false,
        });
      }, []);
    return (
        <div className="w-full flex flex-col items-center jusify-center">
            <LightGallery
                plugins={[lgZoom, lgVideo, lgThumbnail]}
                mode="lg-fade"
                pager={false}
                thumbnail={true}
                galleryId={'nature'}
                autoplayFirstVideo={false}
                elementClassNames={'gallery w-3/4 scale-125'}
                mobileSettings={{
                    controls: false,
                    showCloseIcon: false,
                    download: false,
                    rotate: false,
                }}
                
            >
                <a href="src/assets/habit1.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img1" src="src/assets/habit1.png" className="h-fit img-responsive"/>
                </a>
                <a href="src/assets/habit2.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/habit2.png" className="h-fit img-responsive" />
                </a>
                <a href="src/assets/habit2.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/habit2.png" className="h-fit img-responsive" />
                </a>
            </LightGallery>
        </div>
    );
}
