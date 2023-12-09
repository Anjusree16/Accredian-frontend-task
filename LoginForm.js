// LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', { usernameOrEmail, password });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          label="Username or Email"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
