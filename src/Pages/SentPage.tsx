import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { FormSentOperation } from '../components/forms/FormSentOperation';
import { SentOperationList } from '../components/SentOperationList';
import { MyModal } from '../components/UI/MyModal';
import { useAppSelector } from '../hooks';


export const SentPage = () => {const [isActiveModal, setActiveModal] = useState(false);
  const sentOperations = useAppSelector(state => state.sentOperations.list);

  const activedModal = () => {
    setActiveModal(true);
  }
  
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Button
          sx={{marginTop: '10px', width:'300px'}}
          size='small' 
          variant="contained"
          onClick={activedModal}
        >
          Запланировать новую поставку
        </Button>
        {sentOperations.length > 0 && <SentOperationList />}
      </div>
      {isActiveModal &&
        <MyModal>
          <FormSentOperation setActive={setActiveModal} />
        </MyModal>
      }
    </>
  )
}
