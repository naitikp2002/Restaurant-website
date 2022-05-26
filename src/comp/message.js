import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>    
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={3}
          defaultValue=""
        />
      </div>
    </Box>
    </ThemeProvider>
  );
}
