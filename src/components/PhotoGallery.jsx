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
          gutter: 2,
          rowHeightTolerance: 0.1,
          calculateItemsHeight: false,
        });
      }, []);
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="w-full">
            <LightGallery
                plugins={[lgZoom, lgVideo, lgThumbnail]}
                mode="lg-fade"
                pager={false}
                thumbnail={true}
                galleryId={'nature'}
                autoplayFirstVideo={false}
                elementClassNames={'gallery w-full'}
                mobileSettings={{
                    controls: false,
                    showCloseIcon: false,
                    download: false,
                    rotate: false,
                }}
                
            >
                <a href="src/assets/portugal2.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img1" src="src/assets/portugal2.png" className=" h-fit img-responsive"/>
                </a>
                <a href="src/assets/portugal3.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/portugal3.png" className=" h-fit img-responsive" />
                </a>
                <a href="src/assets/spain.JPG"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/spain.JPG" className="" />
                </a>
                <a href="src/assets/portugal7.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/portugal7.png" className=" h-fit img-responsive" />
                </a>
                <a href="src/assets/switzerland2.JPG"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/switzerland2.JPG" className=" h-fit img-responsive" />
                </a>
                <a href="src/assets/portugal6.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/portugal6.png" className=" h-fit img-responsive" />
                </a>
                <a href="src/assets/switzerland.JPG"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/switzerland.JPG" className="" />
                </a>
                <a href="src/assets/portugal8.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/portugal8.png" className=" h-fit img-responsive" />
                </a>
                <a href="src/assets/switzerland7.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/switzerland7.png" className="h-fit img-responsive" />
                </a>
                <a href="src/assets/spain5.JPG"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/spain5.JPG" className="h-fit img-responsive" />
                </a>
                <a href="src/assets/switzerland8.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/switzerland8.png" className="h-fit img-responsive" />
                </a>
                <a href="src/assets/dolomiti.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/dolomiti.png" className="h-fit img-responsive" />
                </a>
                <a href="src/assets/spain6.JPG"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/spain6.JPG" className="" />
                </a>
                <a href="src/assets/dolimiti3.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/dolomiti3.png" className="" />
                </a>
                <a href="src/assets/switzerland3.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/switzerland3.png" className="" />
                </a>
                <a href="src/assets/portugal10.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/portugal10.png" className=" h-fit img-responsive" />
                </a>
                <a href="src/assets/tatry.jpg"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/tatry.jpg" className="" />
                </a>
                <a href="src/assets/switzerland6.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/switzerland6.png" className="" />
                </a>
                <a href="src/assets/dolimiti7.jpg"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/dolomiti7.jpg" className="" />
                </a>
                <a href="src/assets/portugal11.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/portugal11.png" className="" />
                </a>
                <a href="src/assets/dolimiti2.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/dolomiti2.png" className="" />
                </a>
                <a href="src/assets/dolimiti6.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/dolomiti6.png" className="" />
                </a>
                <a href="src/assets/portugal9.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/portugal9.png" className=" h-fit img-responsive" />
                </a>
                <a href="src/assets/dolimiti8.jpg"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/dolomiti8.jpg" className="" />
                </a>
                <a href="src/assets/portugal5.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/portugal5.png" className=" h-fit img-responsive" />
                </a>
                <a href="src/assets/dolimiti4.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/dolomiti4.png" className="" />
                </a>
                <a href="src/assets/tatry3.jpg"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/tatry3.jpg" className="" />
                </a>
                <a href="src/assets/tatry4.jpg"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/tatry4.jpg" className="" />
                </a>
                <a href="src/assets/dolimiti5.png"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/dolomiti5.png" className="" />
                </a>
                <a href="src/assets/tatry2.jpg"
                    data-lg-size="1600-2400"
                    className="gallery__item">
                    <img alt="img2" src="src/assets/tatry2.jpg" className="" />
                </a>
            </LightGallery>
        </div>
    );
}
