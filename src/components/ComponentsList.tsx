import React from 'react';
import { useAppSelector } from '../hooks';
import { IComponent } from '../redux/componentsSlice';
import { ComponentsItem } from './ComponentsItem';
import { ComponentsListHeader } from './ComponentsListHeader';
import List from './List';

export const ComponentsList: React.FC = () => {
    const components = useAppSelector(state => state.components.list);

    return (
      <div className='mt-5 border-2 rounded-md py-2 px-5'>
        <div className='text-center font-bold text-xl mb-1 rounded-md bg-sky-400'>Комплектующие</div>
        <ComponentsListHeader />
        <List items={components} renderItem={(component: IComponent) => <ComponentsItem key={component.id} {...component} /> } />
      </div>
    )
}
