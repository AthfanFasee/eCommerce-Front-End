import {EditInputValue} from '../../features/EditInputElements';
import {updateProductID} from '../../features/ProductID';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import './EditButton.css';


function EditButton({product}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <div>
            <EditIcon 
                className="EditIcon"
                  title="Update"
                  onClick={() => { 
                  dispatch(updateProductID( product._id))                          
                  navigate("/edit")       
                  
              }}>&#128394;</EditIcon>
        </div>
    )
}

export default EditButton;
