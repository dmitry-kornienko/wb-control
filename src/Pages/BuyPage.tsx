import { Button } from '@mui/material';
import React, { useState } from 'react';
import { BuyOperationList } from '../components/BuyOperationList';
import { FormBuyOperation } from '../components/forms/FormBuyOperation';
import { MyModal } from '../components/UI/MyModal';
import { useAppSelector } from '../hooks';

export const BuyPage = () => {
  const [isActiveModal, setActiveModal] = useState(false);
  const buyOperations = useAppSelector(state => state.buyOperations.list);

  const activedModal = () => {
    setActiveModal(true);
  }
  
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Button
          sx={{marginTop: '10px', width:'200px'}}
          size='small' 
          variant="contained"
          onClick={activedModal}
        >
          Добавить операцию
        </Button>
        {buyOperations.length > 0 && <BuyOperationList />}
      </div>
      {isActiveModal &&
        <MyModal>
          <FormBuyOperation setActive={setActiveModal} />
        </MyModal>
      }
    </>
  )
}

