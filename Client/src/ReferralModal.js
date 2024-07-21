import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ReferralModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/referrals', formData);
      alert('Referral submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting referral:', error.response.data);
      alert('Error submitting referral: ' + error.response.data.error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Your Name"
            name="referrerName"
            value={formData.referrerName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Email"
            name="referrerEmail"
            value={formData.referrerEmail}
            onChange={handleChange}
            required
            type="email"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Friend's Name"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Friend's Email"
            name="refereeEmail"
            value={formData.refereeEmail}
            onChange={handleChange}
            required
            type="email"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
