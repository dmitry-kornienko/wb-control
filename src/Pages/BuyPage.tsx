import { Button } from '@mui/material';
import React, { useState } from 'react';
import { FormBuyOperation } from '../components/forms/FormBuyOperation';
import { MyModal } from '../components/UI/MyModal';

export const BuyPage = () => {
  const [isActiveModal, setActiveModal] = useState(false);

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
        <div>список операций закупок</div>
      </div>
      {isActiveModal &&
        <MyModal>
          <FormBuyOperation setActive={setActiveModal} />
        </MyModal>
      }
    </>
  )
}

