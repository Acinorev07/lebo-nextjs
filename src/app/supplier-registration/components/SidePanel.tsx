//src/app/supplier-registration/components/sidePanel.tsx

'use client';


import styles from './SidePanel.module.css';
// import HamburgerIcon from '@/app/ui/HamburguerIcon';
import useScrollSpy from '@/app/hooks/useScrollSpy';
import { Dispatch, SetStateAction } from 'react';

type SidePanelProps= {
  isActive: boolean;
  setIsActive:  Dispatch<SetStateAction<boolean>>;
}

export default function SidePanel({isActive, setIsActive}:SidePanelProps) {

    useScrollSpy();
 

  const sections = [
    { id: 'seccion1', title: 'Identificación' },
    { id: 'seccion2', title: 'Dirección' },
    { id: 'seccion3', title: 'Obligaciones Tributarias' },
    { id: 'seccion4', title: 'Información de contacto' },
    { id: 'seccion5', title: 'Credenciales de acceso' }
  ];

  return (
    <>
     <aside className={`ml-1 border rounded-md lg:top-[10rem] lg:h-[calc(100vh-10rem)] ${styles.panel} ${isActive ? styles.isActive : ''}`}>
        <nav className={styles.menu}>
          {sections.map((section) => (
            <a 
              key={section.id} 
              href={`#${section.id}`}
              onClick={()=> setIsActive(false)}
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