'use client';

import React from 'react';
// import Link from 'next/link';
// import { useTranslation } from '@/hooks/useTranslation';

export default function Partners() {


    // const { t } = useTranslation();
  
  

  return (
    <section className='bg-[#E4E2DD]'>
    <div className=" max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Nous avons crée ensemble</h2>
<p>- Betavita
- Gonzaï
- MG Prod
- Les studios Niquet</p>
    </div>
    <img src="/images/logoPartner.png" alt='logo des partenaires'></img>
    {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-[0.5px] border-cyan-400"></div> */}
    </section>
    
  );

}

