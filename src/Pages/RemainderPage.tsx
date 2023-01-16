import React from 'react';
import ComplectsList from '../components/ComplectsList';
import {ComponentsList} from '../components/ComponentsList';

export const RemainderPage = () => {
  return (
    <div className='flex justify-center items-start gap-10 flex-wrap'>
      <ComponentsList />
      <ComplectsList />
    </div>
  )
}
