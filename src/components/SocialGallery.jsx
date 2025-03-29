// import { useEffect } from 'react';
// import { FC, useCallback, useRef, useState } from 'react';
// // import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';
// import LightGallery from 'lightgallery/react';
// import lgVideo from 'lightgallery/plugins/video';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import 'lightgallery/css/lg-video.css';

// export default function Gallery() {

//     // const lightGalleryRef = useRef < ILightGallery > null;
//     const containerRef = useRef(null);
//     const [galleryContainer, setGalleryContainer] = useState(null);

//     const onInit = () => {
//         console.log('lightGallery has been initialized');
//     };

//     useEffect(() => {
//         if (containerRef.current) {
//             setGalleryContainer(containerRef.current);
//         }
//     }, []);

//     const videos = [
//         {
//             src: 'https://youtu.be/IUN664s7N-c',
//             subHtml: `<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>`,
//         },
//         {
//             src: 'https://www.youtube.com/watch?v=ttLu7ygaN6I',
//             subHtml: `<h4>Forest Path - Unreal Engine 5 Cinematic by Sharkyy</h4>`,
//         },
//         {
//             src: 'https://www.youtube.com/watch?v=C3vyugaBhSs',
//             subHtml: `<h4>UE5 | In The Heart Of The Forest by Anastasia Gorban</h4>`,
//         },
//         // Add more video objects as needed
//     ];
//     return (
//         <>
//             <div ref={containerRef} />
//             <LightGallery
//                 container={galleryContainer}
//                 onInit={onInit}
//                 plugins={[lgThumbnail, lgVideo]}
//                 closable={false}
//                 showMaximizeIcon={true}
//                 slideDelay={400}
//                 thumbWidth={130}
//                 thumbHeight={'100px'}
//                 thumbMargin={6}
//                 appendSubHtmlTo={'.lg-item'}
//                 dynamic={true}
//                 dynamicEl={videos}
//                 // videojs
//                 // videojsOptions={{ muted: false }}
//                 hash={false}
//                 elementClassNames={'inline-gallery-container'}
//             />
//         </>
//     );
// }
