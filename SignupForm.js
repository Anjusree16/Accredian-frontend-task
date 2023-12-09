// SignupForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signing up with:', { username, email, password, confirmPassword });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <TextField
          label="Confirm Password"
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
