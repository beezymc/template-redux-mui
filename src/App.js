import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Paper';
import AbcIcon from '@mui/icons-material/Abc';

const App = ({ count, incrementCount, decrementCount, resetCount }) => {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: '400px', margin: 'auto', alignItems: 'center', marginTop: '10%' }}>
      <AbcIcon />
      <Box sx={{ fontSize: '40px', border: 'none' }}>
        {count}
      </Box>
      <Button sx={{ width: '200px', margin: 'auto' }} variant='contained' onClick={() => (incrementCount(count))}>+</Button>
      <Button sx={{ width: '200px', margin: 'auto' }} variant='contained' onClick={() => (decrementCount(count))}>-</Button>
      <Button sx={{ width: '200px', margin: 'auto' }} variant='contained' onClick={resetCount}>Reset</Button>
    </Paper>
  );
}

export default App;
