import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';
import {deleteProduct} from '../../api/HomePageAPIs/Delete';
import {getProducts} from '../../api/HomePageAPIs/Products';

import {useDispatch} from 'react-redux';


function DeleteButton({product}) {

  
  const dispatch = useDispatch();

    //for delete confirmation
    const [open, setOpen] = useState(false);

    
  
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const confirmDelete = async () => {
        await dispatch(deleteProduct({ProductID: product._id}));
        dispatch(getProducts());
        setOpen(false);
      }

      
      
    return (
        <div className="deletediv">

            {/* Delete Confirmation */} 
             <DeleteIcon variant="outlined" data-testid="deleteIcon" onClick={handleClickOpen}></DeleteIcon>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">

                    <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this post?"}
                    </DialogTitle>

                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Note That Once Deleted, This Post cannot be RESTORED!!!
                    </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                    <Button onClick={handleClose}>Close</Button>

                    <Button onClick={confirmDelete} autoFocus>
                        Confirm
                    </Button>

                    </DialogActions>
                </Dialog>
                        
        </div>
    )
}

export default DeleteButton;
