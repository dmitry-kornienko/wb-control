import React from 'react'
import { useAppSelector } from '../hooks'
import { IPackedOperation } from '../redux/packedOperationSlice'
import List from './List'
import { PackedOperationHeader } from './PackedOperationHeader'
import { PackedOperationItem } from './PackedOperationItem'

export const PackedOperationList = () => {
    const operations = useAppSelector(state => state.packedOperaions.list)
    return (
        <div>
            <PackedOperationHeader />
            <List items={operations} renderItem={(operation: IPackedOperation) => <PackedOperationItem {...operation} key={operation.id} />} />
        </div>
    )
}
