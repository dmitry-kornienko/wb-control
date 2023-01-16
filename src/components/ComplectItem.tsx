import React from 'react'
import { IComplect } from '../redux/complectsSlice';

export const ComplectItem: React.FC<IComplect> = (props) => {
    const {article, count, name} = props;
  return (
    <div className='flex justify-center gap-3 hover:bg-slate-300 border-b-2 text-[16px] max-w-[410px] rounded mx-auto'>
        <div className='w-[210px]'>{name}</div>
        <div className='w-[100px] text-start'>{article}</div>
        <div className='w-[60px] text-center'>{count}</div>
    </div>
  )
}