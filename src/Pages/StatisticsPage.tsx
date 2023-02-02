import React from 'react';
import { OrdersList } from '../components/OrdersList';
import { SalesList } from '../components/SalesList';
import { useContextAll } from '../context/Context';

export const StatisticsPage = () => {

  const { key } = useContextAll();
  
  return (
    <div className='flex justify-center items-start flex-wrap gap-7'>
      <OrdersList />
      <SalesList />
    </div>
  )
}
