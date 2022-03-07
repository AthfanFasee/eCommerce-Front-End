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
import './DeleteButton.css';
import {useDispatch, useSelector} from 'react-redux';


function DeleteButton({product}) {

  
    const dispatch = useDispatch();

    //for delete confirmation
    const [open, setOpen] = useState(false);

    const SearchInputValue = useSelector((state) => state.SearchInput.value);
  
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const confirmDelete = async () => {
        await dispatch(deleteProduct({ProductID: product._id}));
        dispatch(getProducts({SearchInputValue}));
        setOpen(false);
      }

      
      
    return (
        <div className="deletediv">

            {/* Delete Confirmation */} 
             <DeleteIcon className="deleteIcon" variant="outlined" onClick={handleClickOpen}></DeleteIcon>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">

                    <DialogTitle id="alert-dialog-title">
                    {"ARE YOU SURE?"}
                    </DialogTitle>

                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      You will not be able to undo this action if you proceed!
                    </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>

                    <Button onClick={confirmDelete} autoFocus>
                        Delete
                    </Button>

                    </DialogActions>
                </Dialog>
                        
        </div>
    )
}

export default DeleteButton;
