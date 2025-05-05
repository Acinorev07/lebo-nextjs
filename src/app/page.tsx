// src/app/page.tsx

import Image from 'next/image'

import  SignupForm  from '@/app/ui/signup-form'

export default async function Page() {


  
  return (
    <div className="flex items-center gap-4">

      <div className="border border-gray-300 rounded-lg shadow-lg p-6">
        <Image
          src="/logoLeBo.png"
          alt="Picture of the author"
          width={1000}
          height={1000}
        />
      </div>
      
      <div className="flex flex-col items-center gap-4">
          <h1 className='text-3xl font-bold underline'>Login</h1>

          <div className="border border-gray-300 rounded-lg shadow-md p-6">
              <SignupForm />
          </div>

      </div>
      

    </div>
  );
}