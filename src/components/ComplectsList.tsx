import React from 'react'
import { useAppSelector } from '../hooks'
import { IComplect } from '../redux/complectsSlice'
import {ComplectItem} from './ComplectItem'
import { ComplectsListHeader } from './ComplectsListHeader'
import List from './List'

export default function ComplectsList() {
    const complects = useAppSelector(state => state.complects.list);
    return (
      <div className='mt-5 border-2 rounded-md py-2 px-5'>
          <div className='text-center font-bold text-xl mb-1 rounded-md bg-sky-400'>Наборы</div>
          <ComplectsListHeader />
          <List items={complects} renderItem={(complect: IComplect) => <ComplectItem key={complect.id} {...complect} />} />
      </div>
    )
}
