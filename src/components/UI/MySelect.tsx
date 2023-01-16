import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IComponent } from '../../redux/componentsSlice';

interface MySelectProps {
  name: string,
  items: IComponent[],
  setName: (event: string) => void,
}

export const MySelect:React.FC<MySelectProps> = ({items, name, setName}) => {
  

  const handleChange = (event: SelectChangeEvent<string>) => {
    setName(event.target.value);
  };

  return (
    <>
      <Box sx={{ width: 220 }}>
      <FormControl variant='standard' size='small' fullWidth>
        <InputLabel id="demo-simple-select-label">Компонент</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
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