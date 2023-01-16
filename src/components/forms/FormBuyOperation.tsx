import { IconButton } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useState } from 'react';
import { MyInput } from '../UI/MyInput';
import { MySelect } from '../UI/MySelect';
import { IComponent } from '../../redux/componentsSlice';
import { useAppSelector } from '../../hooks';
import Button from '@mui/material/Button';

interface FormBuyOperationProps {
    setActive: any,
}

export const FormBuyOperation: React.FC<FormBuyOperationProps> = ({setActive}) => {
    const components = useAppSelector(state => state.components.list)
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('');
    const [newComponents, setNewComponents] = useState<IComponent[]>([]);

    const [countError, setCountError] = useState(false)
    const [priceError, setPriceError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [dateError, setDateError] = useState(false)

    const addNewComponent = () => {
        if (name && count > 0 && price > 0) {
            const newComponent = {
                id: Date.now(),
                name,
                count,
                price,
            }
            setNewComponents([...newComponents, newComponent])
            setName('');
            setCount(0);
            setPrice(0);
            setCountError(false);
            setPriceError(false);
            setNameError(false)
        } else {
            setCountError(true);
            setPriceError(true);
            setNameError(true)
            // const emptiFields: string[] = []
            // !name && emptiFields.push('Наименование компонента')
            // !count && emptiFields.push('Количество')
            // !price && emptiFields.push('Цена')
            // // alert(`Не заполнены поля: ${emptiFields.join(', ')}`)
        }
    }
    const deleteNewComponent = (id: number) => {
        setNewComponents(newComponents.filter(component => component.id !== id))
    }
    const addNewBuyOperation = () => {
        if (date && newComponents.length > 0) {
            const newBuyOperation = {
                id: Date.now(),
                date,
                components: newComponents,
            }
            setActive(false);
        } else {
            setDateError(true)
            newComponents.length < 1 && alert('Список товаров пуст')
        }
    }
    
  return (
    <>
        <div className='flex justify-center items-end gap-5'>
            <div>
                <MySelect items={components} name={name} setName={setName}  />
                {!name && <div className={nameError ? 'text-[10px] absolute text-red-500' : 'hidden'}>Укажите наименование</div>}
            </div>
            <div>
                <MyInput value={count} setValue={setCount} width='70px' type='number' label='Кол-во' />
                {!count && <div className={countError ? 'text-[10px] absolute text-red-500' : 'hidden'}>Укажите кол-во</div>}
            </div>
            <div>
                <MyInput value={price} setValue={setPrice} width='70px' type='number' label='Цена' />
                {!price && <div className={priceError ? 'text-[10px] absolute text-red-500' : 'hidden'}>Укажите цену</div>}
            </div>
            <IconButton onClick={addNewComponent} color="primary" aria-label="add to shopping cart">
                <AddBoxOutlinedIcon fontSize='small' color='success' />
            </IconButton>
        </div>
        <div className='flex flex-col my-5'>
            {newComponents.map(component => 
                <div className='flex justify-center items-center hover:bg-slate-200 rounded-md border-b-2 border-b-slate-300' key={component.id}>
                    <div className='w-[220px]'>{component.name}</div>
                    <div className='w-[80px]'>{component.count} {component.name.length > 16 || component.name === 'Слепая лента' ? 'м.' : 'шт.'}</div>
                    <div className='w-[80px]'>{component.price} руб.</div>
                    <IconButton onClick={() => deleteNewComponent(component.id)}>
                        <DeleteForeverIcon fontSize='small' color='error' />
                    </IconButton>
                </div>
            )}
            {newComponents.length > 0 &&
                <div className='mx-auto mt-5'>Итого: <span className='font-medium border-b-2 text-lg border-b-black'>{newComponents.reduce((sum, item) => sum + (item.count * item.price), 0).toFixed(2)} руб.</span>
                </div>
            }
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div>
                <MyInput type='date' value={date} setValue={setDate} width='120px' />
                {!date && <div className={dateError ? 'text-[10px] absolute text-red-500' : 'hidden'}>Укажите дату</div>}
            </div>
            <div className='flex justify-center gap-3 mt-5'>
                <Button
                    size='small' 
                    variant="contained"
                    onClick={addNewBuyOperation}
                >
                    Провести операцию
                </Button>
                <Button
                    color='secondary'
                    size='small' 
                    variant="contained"
                    onClick={() => setActive(false)}
                >
                    Отмена
                </Button>
            </div>
        </div>
    </>
  )
}