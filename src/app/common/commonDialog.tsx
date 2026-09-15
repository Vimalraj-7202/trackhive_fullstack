"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Slide,
  Box,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

// Slide from bottom
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CommonDialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  content: React.ReactNode;
  submitLabel?: string;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
  title,
  open,
  onClose,
  onSubmit,
  content,
  submitLabel = "Submit",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="sm"
      PaperProps={{
        sx: {
          width: "460px",
          borderRadius: "16px",
          border: "1px solid #e0e0e0",
          p: 2,
        },
      }}
    >
      <DialogTitle>
        <Typography fontWeight="bold" fontSize={18}>
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {content}
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", gap: 1.5, mt: 1.5 }}>
        <Button
          sx={{
            color: "white",
            background: "linear-gradient(45deg, #FF6B6B, #FF4757)",
            textTransform: "none",
            borderRadius: "12px",
            width: "110px",
            py: 1,
            fontWeight: "bold",
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          sx={{
            color: "white",
            background: "linear-gradient(45deg, #1DD1A1, #10AC84)",
            textTransform: "none",
            borderRadius: "12px",
            width: "110px",
            py: 1,
            fontWeight: "bold",
          }}
          onClick={onSubmit}
        >
          {submitLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
