import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useContextAll } from '../../context/Context';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { increaseComplectCount } from '../../redux/complectsSlice';
import { decreaseComponentCount } from '../../redux/componentsSlice';
import { addPackedOperation, IPackedOperation } from '../../redux/packedOperationSlice';
import { MyInput } from '../UI/MyInput';
import { MySelect } from '../UI/MySelect';

export const FormPackedOperation = () => {

    const complects = useAppSelector(state => state.complects.list);
    const components = useAppSelector(state => state.components.list);
    const dispatch = useAppDispatch();

    const [complectName, setComplectName] = useState('');
    const [count, setCount] = useState(0);
    const [date, setDate] = useState('');

    const [countError, setCountError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const {changeDateFormat} = useContextAll();

    const addOperation: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (complectName && count && date) {
            const currentComplect = complects.find(complect => complect.name === complectName);
            const newPackedOperation: IPackedOperation = {
                id: Date.now(),
                date: changeDateFormat(date),
                complectName,
                article: currentComplect?.article,
                count: Number(count),
            }
            
            dispatch(addPackedOperation(newPackedOperation));
            dispatch(increaseComplectCount({count, id: currentComplect?.id}));

            currentComplect?.components.forEach(component => {
                const currentComponent: any = components.find(item => item.name === component.name);
                dispatch(decreaseComponentCount({...currentComponent, count: component.count * count}));
            });

            if (components.some(component => component.count < 0)) {
                const negativeCountComponents = components.filter(component => component.count < 0);
                alert(`Остатки компонентов на складе ушли в отрицательное значение. Проверьте фактический остаток следующих комплектующих на складе: ${negativeCountComponents.map(component => component.name)}`)
            }

            setCount(0);
            setDate('');
            setComplectName('');
            setNameError(false);
            setCountError(false);
            setDateError(false);
        } else {
            setNameError(true);
            setDateError(true);
            setCountError(true);
        }
    }

  return (
    <form className='flex justify-center items-end gap-5 mt-2'>
        <div>
            <MySelect label='Комплект' items={complects} value={complectName} setValue={setComplectName} />
            {!complectName && <div className={nameError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>Укажите наименование</div>}
        </div>
        <div>
            <MyInput value={count} setValue={setCount} width='50px' type='number' />
            {!count && <div className={countError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>Кол-во</div>}
        </div>
        <div>
            <MyInput value={date} setValue={setDate} width='110px' type='date' />
            {!date && <div className={dateError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>Укажите дату</div>}
        </div>
        <Button
            size='small'
            variant='contained'
            onClick={addOperation}
        >
            Упаковать
        </Button>
    </form>
  )
}
