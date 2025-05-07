// src/app/page.tsx
import Link from 'next/link'

export default async function Page() {
  return (
   
      <div className="flex items-center gap-4">
          <h1 className='text-3xl font-bold underline'>Home</h1>

          <Link href={`/login`} className='text-3xl font-bold underline'>Login</Link>
      </div>

  );
}