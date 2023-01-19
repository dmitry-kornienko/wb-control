import React from 'react'

export const BuyOperationHeader = () => {
  return (
    <div className='flex justify-center items-center gap-3 border-b-2 border-black'>
        <div className='w-[85px] font-medium text-lg text-center'>Дата</div>
        <div className='w-[190px] text-start font-medium text-lg'>Наименование</div>    
        <div className='w-[75px] font-medium text-lg'>Кол-во</div>
        <div className='w-[70px] font-medium text-lg'>Цена</div>
        <div className='w-[100px] font-medium text-lg'>Сумма</div>
    </div>
  )
}
