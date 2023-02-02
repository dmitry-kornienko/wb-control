import { IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAppDispatch, useAppSelector } from '../hooks';
import { increaseComplectCount } from '../redux/complectsSlice';
import { deleteSentOperation, ISentOperation, toggleAcceptedSentOperation, toggleAgreedSentOperation } from '../redux/sentOperationSlice';

export const SentOperationItem: React.FC<ISentOperation> = (props) => {

    const {id, date, complectName, count, article, boxCount, deliveryPrice, documentNumber, plannedDate, warehouse, weight, isAccepted, isAgreed} = props;

    const dispatch = useAppDispatch();
    const complects = useAppSelector(state => state.complects.list);

    const currentComplect = complects.find(complect => complect.name === complectName);

    const [operationInfoActive, setOperationInfoActive] = useState(false);

    const toggledInfo = () => {
        setOperationInfoActive(!operationInfoActive);
    }

    const deleteOperation = (id: number) => {
        dispatch(deleteSentOperation(id));
        dispatch(increaseComplectCount({count, id: currentComplect?.id}));
    }

    return (
        <div className='flex flex-col items-center justify-start text-[14px] border-b-2 mx-auto hover:bg-slate-200 rounded'>
            <div className='flex justify-center items-center gap-2'>
                {!operationInfoActive ?
                    <IconButton onClick={toggledInfo}>
                        <ExpandMoreIcon fontSize='small' />
                    </IconButton>
                    :
                    <IconButton onClick={toggledInfo}>
                        <ExpandLessIcon fontSize='small' />
                    </IconButton>
                }
                <div className='w-[70px]'>{date}</div>
                <div className='w-[170px]'>{complectName}</div>
                <div className='w-[80px]'>{article}</div>
                <div className='w-[60px]'>{count} шт.</div>
                <input
                    className='w-[100px]'
                    checked={isAgreed}
                    onChange={() => dispatch(toggleAgreedSentOperation(id))}
                    type="checkbox"
                />
                <input
                className='w-[70px]'
                    checked={isAccepted}
                    onChange={() => dispatch(toggleAcceptedSentOperation(id))}
                    type="checkbox"
                />
                <IconButton onClick={() => deleteOperation(id)}>
                    <DeleteForeverIcon fontSize='small' color='error' />
                </IconButton>
            </div>
            {operationInfoActive &&
                <div className='flex justify-center items-center gap-2'>
                    <div className='w-[70px]'>{deliveryPrice} руб.</div>
                    <div className='w-[110px] font-semibold'>{documentNumber}</div>
                    <div className='w-[70px] font-semibold'>{plannedDate}</div>
                    <div className='w-[90px] font-semibold'>{warehouse}</div>
                    <div className='w-[50px]'>{weight} кг.</div>
                    <div className='w-[50px]'>мест: {boxCount}</div>
                </div>
            }
        </div>
    )
}
