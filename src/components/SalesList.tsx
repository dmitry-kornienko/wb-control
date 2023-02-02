import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import { useContextAll } from '../context/Context';
import { useGetSalesQuery } from '../redux/statistics.api'
import List from './List';
import { ISale, SaleItem } from './SaleItem';
import { SalesListHeader } from './SalesListHeader';

export const SalesList = () => {

    const date = new Date();

    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const yesterday = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 1}`

    
    const [dateFrom, setDateFrom] = useState(today);

    const {key} = useContextAll();

    const { data=[], isLoading, isError } = useGetSalesQuery({dateFrom, key});

    const summSales = data.reduce(function(sum: number, item: ISale) {
        if (item.forPay < 0) return sum;
        return sum + item.forPay;
    }, 0);

    if (isLoading) return (
        <div className='flex justify-center mt-7'>
            <CircularProgress />
        </div>
    );

  return (
    <div className='mt-2 border-2 rounded-md py-2 px-5 w-[530px]'>
        <div className='flex justify-center items-center gap-3 bg-sky-400 rounded'>
            <div className='text-center text-[18px]'>Выкупы за:</div>
            <select className='bg-blue-200 rounded' value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}>
                <option value={today}>Сегодня</option>
                <option value={yesterday}>Вчера</option>
            </select>
        </div>
        {isError
            ?
            <div className='flex justify-center mt-2 text-red-500 text-lg'>
                Не удалось получить информацию о выкупах, повторите запрос позже
            </div>
            :
            data.length > 0
                ?
                <div className='flex flex-col items-center w-[470px] mx-auto'>
                    <SalesListHeader />
                    <List items={data} renderItem={(sale: ISale) => <SaleItem key={sale.odid} {...sale} />} />
                    <div className='mt-2'>Итого {data.length + 1} шт. на <span className='font-semibold'>{summSales.toFixed(2)} руб.</span></div>
                </div>
                :
                <div>Продаж не было</div>
        }
    </div>
  )
}
