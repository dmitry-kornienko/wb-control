import React from 'react'

export const PackedOperationHeader = () => {
  return (
    <div className='flex justify-center items-center gap-5 font-medium text-[18px] border-b-2 border-b-black w-[600px] mt-5 mb-1 mx-auto'>
        <div className='w-[85px] text-center'>Дата</div>
        <div className='w-[190px]'>Комплект</div>
        <div className='w-[100px]'>Артикул</div>
        <div className='w-[70px]'>Кол-во</div>
        <div className='w-[36px]'></div>
    </div>
  )
}
