"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface DeleteDialogProps {
  open: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
}

const CommonDeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  title = "Delete Confirmation",
  message = "Are you sure you want to delete this item?",
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          minHeight: 100,
          borderRadius: 2,
          p: 1,
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "18px" }}>
        {title}
      </DialogTitle>
      <DialogContent sx={{ mt: 1 }}>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}
      >
        <Button
          sx={{
            color: "white",
            backgroundColor: "gray",
            textTransform: "none",
            width: "100px",
            height: "38px",
            borderRadius: "6px",
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          sx={{
            color: "white",
            backgroundColor: "red",
            textTransform: "none",
            width: "100px",
            height: "38px",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "#b71c1c" },
          }}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDeleteDialog;
