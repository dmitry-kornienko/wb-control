import React from 'react';

export const ComponentsListHeader: React.FC = () => {
  return (
    <div className='flex justify-center gap-3 border-b-2 max-w-[400px] mx-auto'>
        <div className='w-[190px] font-semibold'>Наименование</div>
        <div className='w-[60px] font-semibold'>Артикул</div>
        <div className='w-[60px] font-semibold'>Кол-во</div>
    </div>
  )
}
