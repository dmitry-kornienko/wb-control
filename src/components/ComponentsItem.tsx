import React from 'react';
import { IComponent } from '../redux/componentsSlice';

export const ComponentsItem: React.FC<IComponent> = (props) => {
    const {article, count, name} = props;
  return (
    <div className='flex justify-center gap-3 hover:bg-slate-300 border-b-2 text-[16px] max-w-[350px] rounded mx-auto'>
        <div className='w-[190px]'>{name}</div>
        <div className='w-[60px] text-center'>{article}</div>
        <div className='w-[60px] text-center'>{Math.round(count)}</div>
    </div>
  )
}
