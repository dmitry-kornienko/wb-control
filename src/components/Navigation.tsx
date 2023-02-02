import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navigation: React.FC = () => {
  return (
    <div className='flex justify-center items-center py-2 px-7 bg-blue-300 gap-[90px]'>
        <div className='flex justify-center gap-5 text-[18px]'>
            <NavLink to='/'>Остатки</NavLink>
            <NavLink to='/buy'>Закупки</NavLink>
            <NavLink to='/packed'>Упаковано</NavLink>
            <NavLink to='/sent'>Поставки</NavLink>
            <NavLink to='/statistics'>Статистика</NavLink>
            <NavLink to='/finance'>Отчеты</NavLink>
        </div>
        <div className='text-[20px] text-gray-700 font-bold'>
            WB Control
        </div>
    </div>
  )
}