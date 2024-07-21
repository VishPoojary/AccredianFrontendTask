import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import ReferralModal from './ReferralModal';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Refer your friends to our amazing course and earn rewards!
      </Typography>
      <Button variant="contained" align="center" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <ReferralModal open={open} onClose={handleClose} />
    </Container>
  );
};

export default App;
