import React from 'react'

export const OrdersListHeader = () => {
  return (
    <div className='flex justify-center items-center gap-5 font-semibold text-[16px] border-b-2 border-b-slate-400'>
        <div className='w-[50px]'>Время</div>
        <div className='w-[160px]'>Артикул</div>
        <div className='w-[100px]'>Склад</div>
        <div className='w-[60px]'>Сумма</div>
    </div>
  )
}
