import React, { useState } from 'react';
import { TextField, Button, Box, Typography,Stack } from '@mui/material';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    // e.g., send data to backend API
    console.log({ username, password, email, phone, role });
  };

  return (
    
    <div style={{ display: 'flex', justifyContent:"center", alignItems: 'center', }}>
        
    <Stack>
    <Typography variant="h6" gutterBottom style={{marginRight:"200px"}}>
        Register Page
      </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px',}}>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Phone No."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Role"
          select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          margin="normal"
          fullWidth
        >
          {/* Replace with actual role options */}
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </TextField>
       
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '100px' }}>
          <Button variant="contained" type="submit">
            Register
          </Button>
          <Button variant="contained" href="/login" sx={{ ml: 2 }}>
            Login
          </Button>
          </div>
        
      </form>
    </Box>
    </Stack>
    </div>
  );
};

export default RegisterPage;