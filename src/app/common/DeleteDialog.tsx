'use client';
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

interface DeleteDialogProps {
  open: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
}

const CommonDeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  title = 'Delete Confirmation',
  message = 'Are you sure you want to delete this item?',
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold' }}>{title}</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button sx={{color:'white',backgroundColor:'gray',textTransform:'none',width:'100px'}} onClick={onClose}>
          Cancel
        </Button>
        <Button sx={{color:'white',backgroundColor:'red',textTransform:'none',width:'100px'}}
          onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDeleteDialog;
