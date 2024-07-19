import React from 'react';
import { TextField, Button, Typography, Stack } from '@mui/material';

const LoginPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack>
         <Typography variant="h6" gutterBottom style={{marginRight:"200px"}}>
          Login Page
        </Typography>
    

        
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
       
        <TextField label="Username" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" variant="outlined" margin="normal" fullWidth type="password" />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '100px' }}>
          <Button variant="contained" color="primary">
            Login
          </Button>
          <Button variant="outlined">
            Register
          </Button>
        </div>
      </div>
      </Stack>
    </div>
    
  );
};

export default LoginPage;
