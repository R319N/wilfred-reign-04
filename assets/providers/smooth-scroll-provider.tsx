// 'use client';

// import React from 'react';
// import { usePathname } from 'next/navigation';
// import Lenis from 'lenis';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';

// declare global {
//   interface Window {
//     lenis?: Lenis;
//   }
// }

// interface Props {
//   children: React.ReactNode;
// }

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const SmoothScrollProvider: React.FC<Props> = ({ children }) => {
//   const pathname = usePathname();

//   useGSAP(
//     () => {
//       const lenis = new Lenis({
//         duration: 1.1,
//         smoothWheel: true,
//         easing: (t) => 1 - Math.pow(1 - t, 3),
//       });

//       // Sync Lenis with ScrollTrigger
//       lenis.on('scroll', ScrollTrigger.update);

//       const raf = (time: number) => {
//         lenis.raf(time * 1000);
//       };

//       gsap.ticker.add(raf);
//       gsap.ticker.lagSmoothing(0);

//       // Optional: expose globally
//       window.lenis = lenis;

//       return () => {
//         gsap.ticker.remove(raf);
//         lenis.destroy();
//         ScrollTrigger.killAll();
//       };
//     },
//     {
//       dependencies: [pathname], // 🔑 re-init on route change
//       revertOnUpdate: true,
//     }
//   );

//   return <>{children}</>;
// };

// export default SmoothScrollProvider;
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const lenis = new Lenis({
      duration: isMobile ? 1.2 : 1.1,
      smoothWheel: true,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
