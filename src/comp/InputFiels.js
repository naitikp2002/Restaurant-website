import React from 'react'
import { TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function BasicTextFields({label,size}) {
  return (
    <ThemeProvider theme={darkTheme}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: `${size}ch` },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={label} variant="standard" />
    </Box>
    </ThemeProvider>
  );
}
