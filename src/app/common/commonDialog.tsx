'use client';
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

const CommonDialog = ({ title, open, onClose, content, onSubmit }: any) => {
  return (
    <Dialog
      open={open}
      onClose={onClose} // fixed: was `close`
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          width: '500px',
          height: '50vh',
          borderRadius: '8px',
          p: 1,
        },
      }}
    >
      <DialogTitle>
        <Typography fontWeight="bold">{title}</Typography>
      </DialogTitle>

      <DialogContent>{content}</DialogContent>

      <DialogActions sx={{ justifyContent: 'center', gap: 2 }}>
        <Button
          sx={{
            color: 'white',
            backgroundColor: 'red',
            textTransform: 'none',
            borderRadius: '6px',
            width:'100px',
            px: 3,
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          sx={{
            color: 'white',
            backgroundColor: 'green',
            textTransform: 'none',
            borderRadius: '6px',
            px: 3,
          }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
