import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement, ReactNode } from 'react';

interface IProjectCardDialogProps {
  open: boolean;
  title: string;
  closeDialog: () => void;
  table: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
    borderBottom: '1px solid white',
  },
  dialogContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 24px !important',
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid white',
  },
  closeButton: {
    position: 'absolute',
    right: 4,
    top: 4,
  },
}));

export const ProjectCardDialog = (
  props: IProjectCardDialogProps,
): ReactElement => {
  const { open, title, closeDialog, table } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      PaperProps={{
        style: { backgroundColor: 'rgb(30, 30, 30)', borderRadius: '10px' },
      }}
      fullWidth
      className={classes.dialog}
    >
      <DialogTitle className={classes.dialogTitle}>
        {title}
        <IconButton className={classes.closeButton} onClick={closeDialog}>
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>{table}</DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button onClick={closeDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
