import React from 'react'

export const ComplectsListHeader = () => {
  return (
    <div className='flex justify-center gap-3 border-b-2 max-w-[430px] mx-auto'>
        <div className='w-[210px] font-semibold'>Наименование</div>
        <div className='w-[100px] font-semibold'>Артикул</div>
        <div className='w-[60px] font-semibold'>Кол-во</div>
    </div>
  )
}
