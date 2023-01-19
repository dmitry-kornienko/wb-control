import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IComponent } from '../../redux/componentsSlice';
import { IComplect } from '../../redux/complectsSlice';

interface MySelectProps {
  value: string,
  items: IComponent[] | IComplect[],
  setValue: (event: string) => void,
  label: string,
}

export const MySelect:React.FC<MySelectProps> = ({items, value, setValue, label}) => {
  

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box sx={{ width: 220 }}>
      <FormControl variant='standard' size='small' fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Компонент"
          onChange={handleChange}
        >
            {items.map(component =>
                <MenuItem key={component.id} value={component.name}>{component.name}</MenuItem>   
            )}

        </Select>
      </FormControl>
    </Box>
    </>
  );
}