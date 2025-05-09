// app/hooks/useScrollSpy.ts
'use client';

import { useEffect } from 'react';

export default function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section[data-scroll-spy]');
    
    const cb: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`a[href="#${id}"]`);
        
        if (entry.isIntersecting) {
          link?.classList.add('active');
        } else {
          link?.classList.remove('active');
        }
      });
    };

    const observer = new IntersectionObserver(cb, {
      threshold: [0.5, 0.75]
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
}