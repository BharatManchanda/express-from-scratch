import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Popup({
    open,
    handleOpenClose,
    text,
    startIcon=null,
    endIcon=null,
    dialog,
    actionButton,
    children,
}) {
    const [scroll, setScroll] = React.useState('paper');

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <React.Fragment>
            <Button startIcon={startIcon} endIcon={endIcon} onClick={handleOpenClose} sx={{textTransform: 'capitalize'}}>{text}</Button>
            <Dialog
                open={open}
                onClose={actionButton.close.handleClick}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                sx={{
                    ".MuiPaper-root": {width: '500px'}
                }}
            >
                <DialogTitle id="scroll-dialog-title">{dialog.title}</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleOpenClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                    >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers={scroll === 'paper'}>
                    {children}    
                </DialogContent>
                <DialogActions>
                    {actionButton.close.display && <Button
                        sx={{textTransform: 'capitalize'}}
                        onClick={actionButton.close.handleClick}
                    >
                        {actionButton.close.text}
                    </Button>}
                    {actionButton.submit.display && <Button
                        sx={{textTransform: 'capitalize'}}
                        onClick={actionButton.submit.handleClick}
                    >
                        {actionButton.submit.text}
                    </Button>}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
