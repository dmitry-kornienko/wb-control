import React from 'react';
import { useAppSelector } from '../hooks';
import { ISentOperation } from '../redux/sentOperationSlice';
import List from './List';
import { SentOperationHeader } from './SentOperationHeader';
import { SentOperationItem } from './SentOperationItem';

export const SentOperationList = () => {
    const operations = useAppSelector(state => state.sentOperations.list)
    return (
        <div>
          <SentOperationHeader />
            <List items={operations} renderItem={(operation: ISentOperation) => <SentOperationItem {...operation} key={operation.id} />} />
        </div>
    )
}
