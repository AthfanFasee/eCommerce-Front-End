import {editProduct} from '../api/EditProductAPI/Edit';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import EditPageElements from '../Components/EditPageElements/EditPageElements';



function EditProduct() {


    const dispatch = useDispatch();
    const navigate = useNavigate();

 
    const EditInputValues = useSelector((state) => state.EditInputElements.value)
    

    const EditProductButtonClick = async (ProductID) => {
        await dispatch(editProduct({ProductID, EditInputValues}));    
        navigate("/") 
    }

    
    return (
      <div className="App">  
          <EditPageElements EditProductButtonClick={EditProductButtonClick}/>
      </div>
    );
  }
  
  export default EditProduct;
  