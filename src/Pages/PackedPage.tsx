import React from 'react'
import { FormPackedOperation } from '../components/forms/FormPackedOperation'
import { PackedOperationList } from '../components/PackedOperationList'
import { useAppSelector } from '../hooks'

export const PackedPage = () => {
  const packedOperations = useAppSelector(state => state.packedOperaions.list);
  return (
    <div>
      <FormPackedOperation />
      {packedOperations.length > 0 && <PackedOperationList />}
    </div>
  )
}
