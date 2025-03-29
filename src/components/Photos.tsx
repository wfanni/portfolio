// import { Photo } from "react-photo-album";

// const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// function imageLink(path: string, width: number, height: number, size: number, extension: string) {
//   console.log("photos tsx");
//   return `src/assets/${path}.${width}x${height}.${size}w.${extension}`;
// }

// // portugal.2.3024x3024.png
// const photos = [
//   { src: "portugal.2.3024x3024.png", path: "portugal2.png", alt: "Hiking boots" },
//   { src: "src/assets/portugal3.png", alt: "Purple petaled flowers near a mountain" },
//   { src: "src/assets/spain.JPG", alt: "A person pointing at a beige map" },
//   { src: "src/assets/portugal7.png", alt: "Two hikers walking toward a snow-covered mountain" },
//   { src: "src/assets/switzerland2.JPG", alt: "A silver and black coffee mug on a brown wooden table" },
//   { src: "src/assets/portugal6.png", alt: "A worm's eye view of trees at night" },
//   { src: "src/assets/switzerland.JPG", alt: "A pine tree forest near a mountain at sunset" },
//   { src: "src/assets/portugal8.png", alt: "Silhouette photo of three hikers near tall trees" },
//   { src: "src/assets/switzerland7.png", alt: "A person sitting near a bonfire surrounded by trees" },
//   { src: "src/assets/spain5.JPG", alt: "Green moss on gray rocks in a river" },
//   { src: "src/assets/switzerland8.png", alt: "Landscape photography of mountains" },
//   { src: "src/assets/dolomiti.png", alt: "A pathway between green trees during daytime" },
//   { src: "src/assets/switzerland7.png", alt: "A man wearing a black jacket and backpack standing on a grass field during sunset" },
//   { src: "src/assets/dolimiti3.png", alt: "Green pine trees under white clouds during the daytime" },
//   { src: "src/assets/switzerland3.png", alt: "A hiker sitting near the cliff" },
//   { src: "src/assets/portugal10.png", alt: "A tall mountain with a waterfall running down its side" },
//   { src: "src/assets/tatry.jpg", alt: "Blue mountains" },
//   { src: "src/assets/switzerland6.png", alt: "Green trees on a brown mountain under a blue sky during the daytime" },
//   { src: "src/assets/dolimiti7.jpg", alt: "A red flower on a green grass field during the daytime" },
//   { src: "src/assets/portugal11.png", alt: "A sign warning people not to disturb nature" },
//   { src: "src/assets/dolimiti2.png", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/dolimiti6.png", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/portugal9.png", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/dolimiti8.jpg", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/portugal5.png", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/dolimiti4.png", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/tatry3.jpg", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/tatry4.jpg", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/dolimiti5.png", alt: "A small creek in Yosemite National Park" },
//   { src: "src/assets/tatry2.jpg", alt: "A small creek in Yosemite National Park" }
// ].map(({ src, ...rest }) => {
//   const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/)!;

//   const path = matcher[1];
//   const width = Number.parseInt(matcher[2], 10);
//   const height = Number.parseInt(matcher[3], 10);
//   const extension = matcher[4];

//   return {
//     src: imageLink(path, width, height, width, extension),
//     width,
//     height,
//     srcSet: breakpoints.map((breakpoint) => ({
//       src: imageLink(path, width, height, breakpoint, extension),
//       width: breakpoint,
//       height: Math.round((height / width) * breakpoint),
//     })),
//     ...rest,
//   } as Photo;
// });

// export default photos;
