import { IconButton } from '@mui/material';
import React from 'react';
import { deletePackedOperation, IPackedOperation } from '../redux/packedOperationSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAppDispatch, useAppSelector } from '../hooks';
import { decreaseComplectCount } from '../redux/complectsSlice';

export const PackedOperationItem: React.FC<IPackedOperation> = (props) => {
    const {id, date, complectName, count, article} = props;
    const dispatch = useAppDispatch();
    const complects = useAppSelector(state => state.complects.list)

    const currentComplect = complects.find(complect => complect.name === complectName);

    const deleteOperation = (id: number) => {
        dispatch(deletePackedOperation(id));
        dispatch(decreaseComplectCount({count, id: currentComplect?.id}))
    }

    return (
        <div className='flex justify-center items-center gap-5 border-b-2 w-[550px] mx-auto hover:bg-slate-200 rounded'>
            <div className='w-[85px]'>{date}</div>
            <div className='w-[190px]'>{complectName}</div>
            <div className='w-[100px]'>{article}</div>
            <div className='w-[70px]'>{count} шт.</div>
            <IconButton
                onClick={() => deleteOperation(id)}
            >
                <DeleteForeverIcon fontSize='small' color='error' />
            </IconButton>
        </div>
    )
}
