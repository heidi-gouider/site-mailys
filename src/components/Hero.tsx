// "use client";

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import Nav from './Navbar'
// import TypewriterText from './Typewritertext' 

// export default function Hero() {
//   const [showNav, setShowNav] = useState(false);


//   useEffect(() => {
//     const timer = setTimeout(() => setShowNav(true), 2500);
//     return () => clearTimeout(timer);
//   }, [])

//   return (

//       <>
// <Nav visible={showNav} />
//  <video
//       className="absolute inset-0 w-full h-full object-cover"
//       autoPlay
//       loop
//       muted
//       playsInline
//       preload="auto"
//     >
//       <source src="/test.mp4" type="video/mp4" />
//       <track
//         src="/test.vtt"
//         kind="subtitles"
//         srcLang="en"
//         label="English"
//       />
//       Your browser does not support the video tag.
//     </video>
//      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn" />

// <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
//   <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn delay-100">Maïlys Gouider</h1>
//   <p className="text-lg md:text-xl mb-2 animate-fadeIn delay-200">06 00 00 00 00 · mail@example.com</p>
//   <p className="text-md md:text-lg italic animate-fadeIn delay-300">Montage · Étalonnage · Motion Design</p>
// </div>


//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute bottom-20 left-10 text-white z-20"
//         >
//             <TypewriterText />

//           <p className="text-xl md:text-2xl">Agnès Varda</p>
//         </motion.div>

//       </>

//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Nav from './Navbar';

export default function Hero() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav visible={showNav} />

      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/test.mp4" type="video/mp4" />
        <track src="/test.vtt" kind="subtitles" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay flouté */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Bloc centré avec fond partiel */}
      <div className="relative z-10 h-screen flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-1xl px-8 py-10 max-w-3xl w-full bg-[#E4E2DD]/40 mx-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mt-5 mb-4">
            MAILYS GOUIDER
          </h1>
          {/* <p className="text-md md:text-lg  mb-5"> */}
          {/* <p className="text-sm sm:text-base md:text-lg mb-5 whitespace-nowrap tracking-wide"> */}
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap tracking-wide mb-4">
            MONTAGE · ETALONNAGE · MOTION DESIGN
          </p>
          {/* <div className="w-1/2 h-0.5 bg-[#202020] mx-auto mt-5" /> */}
        </motion.div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-[#E4E2DD] to-transparent pointer-events-none" /> */}
    </>
  );
}
