// src/app/page.tsx
import Link from 'next/link'

export default async function Page() {
  return (
   
      <div className="flex items-center justify-center h-screen">
         

          <Link href={`/login`} className='text-2xl font-bold underline'>Login</Link>
      </div>

  );
}