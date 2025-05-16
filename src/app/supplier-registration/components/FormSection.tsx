//src/app/supplier-registration/components/FormSection.tsx
'use client';

import section from '@/app/supplier-registration/stylesModule/section.module.css'
import { ReactNode } from 'react';

type FormSectionProps = {
  id: string;
  title: string;
  legend?: string;
  children: ReactNode;
};

export default function FormSection({ id, title, legend, children }: FormSectionProps) {
  return (
    <section id={id} className={section.section} data-scroll-spy>
      <h2>{title}</h2>
      <div className="register-form">
        <form className="identification-form">
          {legend && <legend>{legend}</legend>}
          {children}
        </form>
      </div>
    </section>
  );
}