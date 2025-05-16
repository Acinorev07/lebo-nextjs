//src/app/supplier-registration/components/sidePanel.tsx

'use client';

import { useState } from 'react';
import styles from './SidePanel.module.css';
import HamburgerIcon from '@/app/ui/HamburguerIcon';
import useScrollSpy from '@/app/hooks/useScrollSpy';

export default function SidePanel() {

    useScrollSpy();
  const [isActive, setIsActive] = useState(true);

  const sections = [
    { id: 'seccion1', title: 'Identificación' },
    { id: 'seccion2', title: 'Dirección' },
    { id: 'seccion3', title: 'Obligaciones Tributarias' },
    { id: 'seccion4', title: 'Información de contacto' },
    { id: 'seccion5', title: 'Credenciales de acceso' }
  ];

  return (
    <>
      <button 
        className={`lg:hidden ${styles.panelBtn} hamburger hamburger--collapse`}
        onClick={() => setIsActive(!isActive)}
      >
        <HamburgerIcon />
      </button>

     <aside className={`${styles.panel} ${isActive ? styles.isActive : ''} lg:relative lg:translate-y-0`}>
        <nav className={styles.menu}>
          {sections.map((section) => (
            <a 
              key={section.id} 
              href={`#${section.id}`}
              onClick={() => setIsActive(false)}
              className={styles.menuLink}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}