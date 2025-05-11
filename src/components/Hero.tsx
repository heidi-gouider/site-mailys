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
import TypewriterText from './Typewritertext';

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

      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn" />

      {/* <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn delay-100">
          Maïlys Gouider
        </h1>
        <p className="text-lg md:text-xl mb-2 animate-fadeIn delay-200">
          06 00 00 00 00 · mail@example.com
        </p>
        <p className="text-md md:text-lg italic animate-fadeIn delay-300">
          Montage · Étalonnage · Motion Design
        </p>
        <p className="text-md md:text-lg italic animate-fadeIn delay-400 mt-4">
          “Le montage, c’est l’écriture finale du film.” <br />
          <span className="text-sm">— Agnès Varda</span>
        </p>
      </div> */}

      <div className="absolute bottom-5 right-5 text-sm text-white z-20">
        {/* <TypewriterText /> */}
      </div>
    </>
  );
}
