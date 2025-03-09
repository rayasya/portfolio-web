// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// const SplitTextJS = require("split-text-js");

// export default function SplashScreen({
//   onComplete,
// }: {
//   onComplete: () => void;
// }) {
//   useEffect(() => {
//     const titles = gsap.utils.toArray(".text-splash");
//     if (!titles.length) return;

//     const tl = gsap.timeline({ repeat: -1 });
//     titles.forEach((title) => {
//       const splitTitle = new SplitTextJS(title);
//       tl.from(
//         splitTitle.chars,
//         {
//           opacity: 0,
//           y: 80,
//           rotateX: 90,
//           stagger: 0.01,
//         },
//         "<"
//       ).to(
//         splitTitle.chars,
//         {
//           opacity: 0,
//           y: -80,
//           rotateX: -90,
//           stagger: 0.01,
//         },
//         "<1"
//       );
//     });

//     const timer = setTimeout(() => {
//       onComplete();
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   return (
//     <div className="h-screen flex justify-center items-center bg-white text-black">
//       <div className="text-wrapper text-[5rem] text-center m-0 leading-0">
//         <p className="text-splash">Booting Up Creativity...</p>
//         <p className="text-splash">Initializing Portfolio...</p>
//         <p className="text-splash">Executing Innovative Ideas...</p>
//       </div>
//     </div>
//   );
// }
