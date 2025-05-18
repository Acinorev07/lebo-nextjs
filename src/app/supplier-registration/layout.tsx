// src/app/supplier-registration/layout.tsx
import Header from "./components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {

  title: "Supplier Registration | Lebo"
};

export default function SupplierRegistrationLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (

    <div 
    className="min-h-screen grid grid-rows-[8rem_1fr] grid-cols-[1fr] lg:grid-cols-[20%_80%] p-4 gap-4"
    >
      <Header />
      {children}
    </div>
  );
    
   

}