import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useContextAll } from '../../context/Context';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { decreaseComplectCount } from '../../redux/complectsSlice';
import { addSentOperation } from '../../redux/sentOperationSlice';
import { MyInput } from '../UI/MyInput';
import { MySelect } from '../UI/MySelect';

interface FormSentOperationProps {
    setActive: any,
}

export const FormSentOperation: React.FC<FormSentOperationProps> = ({setActive}) => {

    const complects = useAppSelector(state => state.complects.list);
    const dispatch = useAppDispatch();

    const [complectName, setComplectName] = useState('');
    const [count, setCount] = useState(0);
    const [date, setDate] = useState('');
    const [warehouse, setWarehouse] = useState('');
    const [boxCount, setBoxCount] = useState(0);
    const [weight, setWeight] = useState(0);
    const [documentNumber, setDocumentNumber] = useState('');
    const [plannedDate, setPlannedDate] = useState('');
    const [deliveryPrice, setDeliveryPrice] = useState(0);

    const [warehouseError, setWarehouseError] = useState(false);
    const [boxCountError, setBoxCountError] = useState(false);
    const [weightError, setWeightError] = useState(false);
    const [documentNumberError, setDocumentNumberError] = useState(false);
    const [plannedDateError, setPlannedDateError] = useState(false);
    const [deliveryPriceError, setDeliveryPriceError] = useState(false);

    const [countError, setCountError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const {changeDateFormat} = useContextAll();

    const addOperation: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (complectName && count && date) {
            const currentComplect = complects.find(complect => complect.name === complectName);
            const newSentOperation = {
                id: Date.now(),
                date: changeDateFormat(date),
                complectName,
                article: currentComplect?.article,
                count: Number(count),
                warehouse,
                boxCount,
                weight,
                documentNumber,
                plannedDate: changeDateFormat(plannedDate),
                deliveryPrice,
                isAgreed: false,
                isAccepted: false,
            }
            
            dispatch(addSentOperation(newSentOperation));
            dispatch(decreaseComplectCount({count, id: currentComplect?.id}));

            setActive(false);

            setCount(0);
            setDate('');
            setComplectName('');
            setWarehouse('');
            setBoxCount(0);
            setWeight(0);
            setDocumentNumber('');
            setPlannedDate('');
            setDeliveryPrice(0);

            setWarehouseError(false);
            setDeliveryPriceError(false);
            setPlannedDateError(false);
            setDocumentNumberError(false);
            setWeightError(false);
            setBoxCountError(false);
            setNameError(false);
            setCountError(false);
            setDateError(false);
        } else {
            setNameError(true);
            setDateError(true);
            setCountError(true);
            setWarehouseError(true);
            setBoxCountError(true);
            setWeightError(true);
            setDocumentNumberError(true);
            setPlannedDateError(true);
            setDeliveryPriceError(true);
        }
    }

  return (
    <form className='flex flex-col items-center justify-center'>
        <div className='flex justify-center items-center gap-5'>
            <div>
                <MySelect label='????????????????' items={complects} value={complectName} setValue={setComplectName} />
                {!complectName && <div className={nameError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>?????????????? ????????????????????????</div>}
            </div>
            <div>
                <MyInput label='??????-????' value={count} setValue={setCount} width='50px' type='number' />
                {!count && <div className={countError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>??????-????</div>}
            </div>
        </div>
        <div className='flex justify-center items-end gap-5 mt-3 mb-5 flex-wrap'>
            <div>
                <div className='text-[13px] text-[#00000099]'>???????? ????????????????</div>
                <MyInput value={date} setValue={setDate} width='110px' type='date' />
                {!date && <div className={dateError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>?????????????? ????????</div>}
            </div>
            <div>
                <div className='text-[13px] text-[#00000099]'>?????????? ??????????????????</div>
                <MyInput value={documentNumber} setValue={setDocumentNumber} width='150px' />
                {!documentNumber && <div className={documentNumberError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>?????????????? ?????????? ??????????????????</div>}
            </div>
            <div>
                <div className='text-[13px] text-[#00000099]'>??????????</div>
                <MyInput value={warehouse} setValue={setWarehouse} width='120px' />
                {!warehouse && <div className={warehouseError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>?????????????? ??????????</div>}
            </div>
            <div>
                <MyInput label='??????????????????' value={deliveryPrice} setValue={setDeliveryPrice} width='80px' type='number' />
                {!deliveryPrice && <div className={deliveryPriceError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>??????????????????</div>}
            </div>
            <div>
                <div className='text-[13px] text-[#00000099]'>???????? ??????????????</div>
                <MyInput value={plannedDate} setValue={setPlannedDate} width='110px' type='date' />
                {!plannedDate && <div className={plannedDateError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>?????????????? ????????</div>}
            </div>
        </div>
        <div className='flex justify-center items-center gap-5 mb-7'>
            <div>
                <div className='text-[13px] text-[#00000099]'>????????</div>
                <MyInput value={boxCount} setValue={setBoxCount} width='50px' type='number' />
                {!boxCount && <div className={boxCountError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>????????</div>}
            </div>
            <div>
                <div className='text-[13px] text-[#00000099]'>??????</div>
                <MyInput value={weight} setValue={setWeight} width='50px' type='number' />
                {!weight && <div className={weightError ? 'text-[10px] absolute text-red-500 font-bold' : 'hidden'}>??????</div>}
            </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <Button
                size='small'
                variant='contained'
                onClick={addOperation}
            >
                ??????????????????
            </Button>
            <Button
                size='small'
                variant='contained'
                color='secondary'
                onClick={() => setActive(false)}
            >
                ????????????
            </Button>
        </div>
    </form>
  )
}
