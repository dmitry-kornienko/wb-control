import { TextField } from '@mui/material';
import React from 'react';

interface MyInputProps {
    value: number | string,
    label?: string,
    type?: string,
    width?: string,
    setValue: (e: any) => void,
}

export const MyInput: React.FC<MyInputProps> = ({value, setValue, label, type, width}) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

  return (
    <TextField
        type={type}
        sx={{width, fontSize: '14px'}}
        id="outlined-name"
        label={label}
        value={value}
        onChange={handleChange}
        variant='standard'
    />
  )
}
