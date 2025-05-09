'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image 
          src="/logoLeBo.png" 
          alt="logo lebo" 
          width={75}
          height={75}
        />
      </div>
      <h1>Supplier Registration</h1>
      <Link href="/" className="btn-back">
        volver
      </Link>
    </header>
  );
}