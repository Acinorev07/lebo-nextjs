//src/app/supplier-registration/components/Header.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from "../stylesModule/Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header} grid-area-header fixed top-0 left-0 right-0 z-30 p-4 pt-10`}>
      <div className="flex items-start justify-between">
        <div className="w-24 self-start -mt-10">
          <Image 
            src="/logoLeBo.png" 
            alt="Logo Lebo" 
            width={100}
            height={50}
            priority
          />
        </div>
        
        <h1 className="text-2xl font-bold text-[#6ACFC7]">
          Supplier Registration
        </h1>

        <Link 
          href="/" 
          className="bg-[#6ACFC7] text-[#0C1A1A] px-4 py-2 rounded hover:bg-[#5abfaf] transition"
        >
          Volver
        </Link>
      </div>
    </header>
  );
}