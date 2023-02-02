import React from 'react'
import { useContextAll } from '../../context/Context'
import { MyInput } from '../UI/MyInput'

export const FormChangeApiKey: React.FC = () => {

    const { key, setKey } = useContextAll();

    return (
        <div>
            <div>Для работы с данным разделом необходимо указать <span className='font-semibold'>API ключ статистики</span> поставщика Wildberries</div>
            <MyInput type='text' value={key} setValue={setKey} label='Api ключ статистики' width='300px' />
        </div>
    )
}

