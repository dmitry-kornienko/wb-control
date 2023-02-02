import React from 'react';

export interface IOrder {
    date: string;
    lastChangeDate: string;
    supplierArticle: string;
    techSize: string;
    barcode: string;
    totalPrice: number;
    discountPercent: number;
    warehouseName: string;
    oblast: string;
    incomeID: number;
    odid: number;
    nmId: number;
    subject: string;
    category: string;
    brand: string;
    isCancel: boolean;
    cancel_dt: Date;
    gNumber: string;
    sticker: string;
  }

export const OrderItem: React.FC<IOrder> = (props) => {

    const { date, supplierArticle, warehouseName, totalPrice, discountPercent } = props;

    const priceWithDiscount = (totalPrice * (1 - discountPercent/100)).toFixed(2);

  return (
    <div className='flex justify-center items-center gap-5 text-[14px] border-b-2 hover:bg-slate-200 rounded'>
        <div className='w-[50px] text-center'>{date.slice(11, 16)}</div>
        <div className='w-[160px]'>{supplierArticle}</div>
        <div className='w-[100px]'>{warehouseName}</div>
        <div className='w-[60px]'>{priceWithDiscount}</div>
    </div>
  )
}
