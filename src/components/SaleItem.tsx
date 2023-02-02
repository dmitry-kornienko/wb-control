import React from 'react';

export interface ISale {
    date: string;
    lastChangeDate: string;
    supplierArticle: string;
    techSize: string;
    barcode: string;
    totalPrice: number;
    discountPercent: number;
    isSupply: boolean;
    isRealization: boolean;
    promoCodeDiscount: number;
    warehouseName: string;
    countryName: string;
    oblastOkrugName: string;
    regionName: string;
    incomeID: number;
    saleID: string;
    odid: number;
    spp: number;
    forPay: number;
    finishedPrice: number;
    priceWithDisc: number;
    nmId: number;
    subject: string;
    category: string;
    brand: string;
    IsStorno: number;
    gNumber: string;
    sticker: string;
}

export const SaleItem: React.FC<ISale> = (props) => {
    const { date, supplierArticle, regionName, forPay } = props;

    return (
        <div className='flex justify-center items-center gap-5 text-[14px] border-b-2 hover:bg-slate-200 rounded'>
            <div className='w-[50px] text-center'>{date.slice(11, 16)}</div>
            <div className='w-[160px]'>{supplierArticle}</div>
            <div className='w-[130px]'>{regionName ? regionName : 'Не определенно'}</div>
            <div className={forPay < 0 ? 'w-[70px] text-red-400 bg-orange-200 font-semibold' : 'w-[70px]'}>{forPay}</div>
        </div>
    )
}
