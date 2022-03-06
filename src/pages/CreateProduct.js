import { useContext } from 'react';
import {CreatePageContext} from '../helper/CreatePageProvider';
import {createProduct} from '../api/CreateProductAPIS/Create';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import CreatePageElements from '../Components/CreatePageElements/CreatePageElements';



function CreateProduct() {

    const {setError, SKU, name, description, Quantity } =
    useContext(CreatePageContext)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CreateProductButtonClick = async () => {
        console.log('bew')
        try{
            await dispatch(createProduct({SKU, name, description, Quantity}));    
            navigate("/")
         
        } catch(err){
            setError(err);
    
        }                  
    }

    
    return (
      <div className="App">  
          <CreatePageElements CreateProductButtonClick={CreateProductButtonClick}/>
      </div>
    );
  }
  
  export default CreateProduct;
  