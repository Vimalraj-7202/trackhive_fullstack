"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

// Slide transition from bottom
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      TransitionComponent={Transition} 
      keepMounted
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          width: "320px", // reduced width
          minHeight: "auto", 
          borderRadius: 2,
          p: 1.5, // reduced padding
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "16px", pb: 0 }}>
        {title}
      </DialogTitle>

      <DialogContent sx={{ mt: 0.5, mb: 1 }}>
        <Typography fontSize={13}>{message}</Typography>
      </DialogContent>

      <DialogActions
        sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 0.5 }}
      >
        <Button
          sx={{
            color: "white",
            backgroundColor: "gray",
            textTransform: "none",
            width: "80px", // smaller button
            height: "34px",
            borderRadius: "6px",
            fontSize: 13,
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
            width: "80px",
            height: "34px",
            borderRadius: "6px",
            fontSize: 13,
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
