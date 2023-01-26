import React from 'react';

export const SentOperationHeader = () => {
  return (
    <div className='flex justify-center items-center gap-2 font-medium text-[16px] border-b-2 border-b-black mt-5 mb-1 mx-auto'>
        <div className='w-[36px]'></div>
        <div className='w-[70px] text-center'>Дата</div>
        <div className='w-[170px]'>Комплект</div>
        <div className='w-[80px]'>Артикул</div>
        <div className='w-[60px]'>Кол-во</div>
        <div className='w-[100px]'>Согласовано</div>
        <div className='w-[70px]'>Принято</div>
        <div className='w-[36px]'></div>
    </div>
  )
}
