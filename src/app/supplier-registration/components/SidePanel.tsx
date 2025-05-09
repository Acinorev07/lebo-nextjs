'use client';

import { useState } from 'react';
import styles from './SidePanel.module.css';
import HamburgerIcon from '@/app/ui/HamburguerIcon';
import useScrollSpy from '@/app/hooks/useScrollSpy';

export default function SidePanel() {

    useScrollSpy();
  const [isActive, setIsActive] = useState(false);

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
        className={`${styles.panelBtn} ${isActive ? styles.isActive : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        <HamburgerIcon />
      </button>

      <aside className={`${styles.panel} ${isActive ? styles.isActive : ''}`}>
        <nav className="menu">
          {sections.map((section) => (
            <a 
              key={section.id} 
              href={`#${section.id}`}
              onClick={() => setIsActive(false)}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}