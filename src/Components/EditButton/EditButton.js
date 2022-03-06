import {EditInputValue} from '../../features/EditInputElements';
import {updateProductID} from '../../features/ProductID';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';


function EditButton({product}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <div>
            <button 
                  title="Update"
                  onClick={() => { 
                  dispatch(updateProductID( product._id))                          
                  navigate("/edit")       
                  
              }}>&#128394;</button>
        </div>
    )
}

export default EditButton;
