// import { useState } from "react";
// import { MasonryPhotoAlbum } from "react-photo-album";
// import "react-photo-album/masonry.css";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

// import photos from "./Photos";

// export default function Gallery() {
//     const [index, setIndex] = useState(-1);

//     // const photos = [
//     //     { src: "src/assets/portugal2.png", alt: "Hiking boots" },
//     //     { src: "src/assets/portugal3.png", alt: "Hiking boots" },


//     // ];
//     return (
//         <div className="w-full">

//             <MasonryPhotoAlbum padding="10" photos={photos} columns={4} breakpoints={[300, 600, 1200]} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

//             <Lightbox
//             slides={photos}
//             open={index >= 0}
//             index={index}
//             close={() => setIndex(-1)}
//             // enable optional lightbox plugins
//             plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
//             />
//                 {/* <a href="src/assets/portugal2.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Silves, Portugal" src="src/assets/portugal2.png" className=" h-fit img-responsive"/>
//                 </a>
//                 <a href="src/assets/portugal3.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Algarve, Portugal" src="src/assets/portugal3.png" className=" h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/spain.JPG"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Bilbao, Spain" src="src/assets/spain.JPG" className="" />
//                 </a>
//                 <a href="src/assets/portugal7.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Algarve, Portugal" src="src/assets/portugal7.png" className=" h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/switzerland2.JPG"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Lauterbrunnen, Switzerland" src="src/assets/switzerland2.JPG" className=" h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/portugal6.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Luz / Lagos, Portugal" src="src/assets/portugal6.png" className=" h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/switzerland.JPG"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Zermatt, Switzerland" src="src/assets/switzerland.JPG" className="" />
//                 </a>
//                 <a href="src/assets/portugal8.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Algarve, Portugal" src="src/assets/portugal8.png" className=" h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/switzerland7.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Lauterbrunnen, Switzerland" src="src/assets/switzerland7.png" className="h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/spain5.JPG"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Lanzarote, Spain" src="src/assets/spain5.JPG" className="h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/switzerland8.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Matternhorn, Switzerland" src="src/assets/switzerland8.png" className="h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/dolomiti.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Lago di Braies, Italy" src="src/assets/dolomiti.png" className="h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/spain6.JPG"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Lanzarote, Spain" src="src/assets/spain6.JPG" className="" />
//                 </a>
//                 <a href="src/assets/dolimiti3.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Valle di Cadore, Italy" src="src/assets/dolomiti3.png" className="" />
//                 </a>
//                 <a href="src/assets/switzerland3.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Grindelwald, Switzerland" src="src/assets/switzerland3.png" className="" />
//                 </a>
//                 <a href="src/assets/portugal10.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Algarve, Portugal" src="src/assets/portugal10.png" className=" h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/tatry.jpg"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Vysoké Tatry, Slovakia" src="src/assets/tatry.jpg" className="" />
//                 </a>
//                 <a href="src/assets/switzerland6.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Meggenhorn, Luzern, Switzerland" src="src/assets/switzerland6.png" className="" />
//                 </a>
//                 <a href="src/assets/dolimiti7.jpg"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Dolomites, Italy" src="src/assets/dolomiti7.jpg" className="" />
//                 </a>
//                 <a href="src/assets/portugal11.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Algarve, Portugal" src="src/assets/portugal11.png" className="" />
//                 </a>
//                 <a href="src/assets/dolimiti2.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Dolomites, Italy" src="src/assets/dolomiti2.png" className="" />
//                 </a>
//                 <a href="src/assets/dolimiti6.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Grindelwald, Switzerland" src="src/assets/dolomiti6.png" className="" />
//                 </a>
//                 <a href="src/assets/portugal9.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Algarve, Portugal" src="src/assets/portugal9.png" className=" h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/dolimiti8.jpg"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Parco Naturale Regionale delle Dolomiti d'Ampezzo, Italy" src="src/assets/dolomiti8.jpg" className="" />
//                 </a>
//                 <a href="src/assets/portugal5.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Algarve, Portugal" src="src/assets/portugal5.png" className=" h-fit img-responsive" />
//                 </a>
//                 <a href="src/assets/dolimiti4.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Parco Naturale Regionale delle Dolomiti d'Ampezzo, Italy" src="src/assets/dolomiti4.png" className="" />
//                 </a>
//                 <a href="src/assets/tatry3.jpg"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Vysoké Tatry, Slovakia" src="src/assets/tatry3.jpg" className="" />
//                 </a>
//                 <a href="src/assets/tatry4.jpg"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Štrbské Pleso, Vysoké Tatry, Slovakia" src="src/assets/tatry4.jpg" className="" />
//                 </a>
//                 <a href="src/assets/dolimiti5.png"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Parco Naturale Regionale delle Dolomiti d'Ampezzo, Italy" src="src/assets/dolomiti5.png" className="" />
//                 </a>
//                 <a href="src/assets/tatry2.jpg"
//                     data-lg-size="1600-2400"
//                     className="gallery__item">
//                     <img alt="Vysoké Tatry, Slovakia" src="src/assets/tatry2.jpg" className="" />
//                 </a> */}
//         </div>
//     );
// }
