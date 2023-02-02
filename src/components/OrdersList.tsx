import React, { useState } from 'react';
import { useGetOrdersQuery } from '../redux/statistics.api';
import List from './List';
import { IOrder, OrderItem } from './OrderItem';
import CircularProgress from '@mui/material/CircularProgress';
import { OrdersListHeader } from './OrdersListHeader';
import { useContextAll } from '../context/Context';

export const OrdersList = () => {
    
    const date = new Date();

    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const yesterday = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 1}`

    
    const [userDate, setUserDate] = useState(today);

    const {key} = useContextAll();

    const {data=[], isLoading, isError} = useGetOrdersQuery({dateFrom: userDate, key});

    const summOrders = data.reduce((sum: number, item: IOrder) => sum + (item.totalPrice * (1 - item.discountPercent/100)), 0);

    if (isLoading) return (
        <div className='flex justify-center mt-7'>
            <CircularProgress />
        </div>
    )
    
    return (
            <div className='mt-2 border-2 rounded-md py-2 px-5 w-[530px]'>
                <div className='flex justify-center items-center gap-3 bg-sky-400 rounded'>
                    <div className='text-center text-[18px]'>Заказы за:</div>
                    <select className='bg-blue-200 rounded' value={userDate} onChange={(e) => setUserDate(e.target.value)}>
                        <option value={today}>Сегодня</option>
                        <option value={yesterday}>Вчера</option>
                    </select>
                </div>
                {isError ? 
                    <div className='flex justify-center mt-2 text-red-500 text-lg'>
                        Не удалось получить информацию о заказах, повторите запрос позже
                    </div>
                    :
                    data.length > 0
                        ?
                        <div className='flex flex-col items-center w-[470px] mx-auto'>
                            <OrdersListHeader />
                            <List items={data} renderItem={(order: IOrder) => <OrderItem key={order.odid} {...order} />} />
                            <div className='mt-2'>Итого {data.length + 1} шт. на <span className='font-semibold'>{summOrders.toFixed(2)} руб.</span></div>
                        </div>
                        :
                        <div>Заказов не было</div>
                }
            </div>
        )
}
