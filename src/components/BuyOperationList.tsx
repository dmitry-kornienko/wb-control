import React from 'react';
import { useAppSelector } from '../hooks';
import { IBuyOperation } from '../redux/buyOperationsSlice';
import { BuyOperationHeader } from './BuyOperationHeader';
import { BuyOperationItem } from './BuyOperationItem';
import List from './List';

export const BuyOperationList = () => {
    const operations = useAppSelector(state => state.buyOperations.list);
    return (
      <div className='mt-2'>
          <BuyOperationHeader />
          <List items={operations} renderItem={(operation: IBuyOperation) => <BuyOperationItem {...operation} key={operation.id} />} />
      </div>
    )
}
