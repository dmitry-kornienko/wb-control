import React from 'react';

interface MyModalProps {
  children: React.ReactNode,
}

export const MyModal: React.FC<MyModalProps> = ({children}) => {
    
  return (
    <div className='flex justify-center items-start fixed top-0 left-0 h-screen w-screen bg-opacity-40 bg-black'>
      <div className='bg-white rounded-md p-10 mt-[50px]'>
        {children}
      </div>
    </div>
  )
}
