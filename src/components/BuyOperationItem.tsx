import React from 'react';
import { useAppDispatch } from '../hooks';
import { deleteBuyOperation, IBuyOperation } from '../redux/buyOperationsSlice'
import { decreaseComponentCount } from '../redux/componentsSlice';


export const BuyOperationItem: React.FC<IBuyOperation> = (props) => {
    const dispatch = useAppDispatch();
    const { id, date, components } = props;

    const removeOperation = (id: number) => {
        dispatch(deleteBuyOperation(id));
        components.forEach(item => {
            dispatch(decreaseComponentCount({...item}))
        })
    }

  return (
    <div className='flex flex-col justify-center items-center border rounded-md py-1 px-3 mt-2 hover:bg-slate-100'>
        <div className='flex gap-3 mt-2'>
            <div className='w-[85px]'>{date}</div>
            <div>{components.map(component => 
                <div key={component.name} className='flex justify-center items-center gap-3 border-b-transparent border-b-[1px] hover:border-b-[1px] hover:border-b-slate-700'>
                    <div className='w-[190px]'>{component.name}</div>    
                    <div className='w-[75px]'>{component.count} {component.name === 'Капельная лента 20-6-1.6' || component.name === 'Капельная лента 10-6-1.6' || component.name === 'Слепая лента' ? 'м.' : 'шт.'}</div>
                    <div className='w-[70px]'>{component.price} руб.</div>
                </div>
            )}
            </div>
            <div className='font-medium text-lg w-[100px]'>
                {components.reduce((sum, item) => sum + (item.count * item.price), 0)} руб.
            </div>
        </div>
        <button onClick={() => removeOperation(id)} className='bg-red-300 border text-[12px] rounded px-3 mt-2 hover:bg-red-400 hover:text-white'>Удалить</button>
    </div>
  )
}
