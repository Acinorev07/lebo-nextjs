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
    <section id={id} className={`flex flex-col space-x-4 ${section.section}` } data-scroll-spy>
      <h2 className='mb-4'>{title}</h2>
      <div className="border border-gray-300 rounded-md bg-[var(--verdeCardenal-1)] p-4 register-form">
        <form className="flex flex-col gap-4 identification-form">
          {legend && <legend className='mb-6'>{legend}</legend>}
          {children}
        </form>
      </div>
    </section>
  );
}