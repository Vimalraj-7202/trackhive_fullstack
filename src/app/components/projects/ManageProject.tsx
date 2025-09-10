import { Typography, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import CommonDialog from '@/app/common/commonDialog'

const ManageProject = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({name: '',description: '',duration: ''});

  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData,'@@@@@@@@@@@@');
    setFormData({ name: '', description: '', duration: '' });
    setOpenDialog(false);
  };

  const dialogContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
      <TextField
        label="Project Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        label="Duration"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        fullWidth
        placeholder="e.g., 3 weeks"
      />
    </Box>
  );

  return (
    <>
      <Typography sx={{ fontWeight: 'bold', color: 'gray', fontSize: '17px' }}>
        Manage Project
      </Typography>
      <Box mt={2}>
        <Button
          sx={{
            textTransform: 'none',
            color: 'white',
            height: '35px',
            width: '150px',
            backgroundColor: 'purple',
            borderRadius: '6px',
          }}
          onClick={handleOpen}
        >
          Add Project
        </Button>
      </Box>

      <CommonDialog 
        title="Add Project"
        content={dialogContent}
        open={openDialog}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageProject;
