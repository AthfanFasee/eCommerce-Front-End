import { useContext } from 'react';
import {CreatePageContext} from '../helper/CreatePageProvider';
import {createProduct} from '../api/CreateProductAPIS/Create';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import CreatePageElements from '../Components/CreatePageElements/CreatePageElements';



function CreateProduct() {

    const {setError} =
    useContext(CreatePageContext)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CreateProductButtonClick = async (data , config) => {
        try{
            await dispatch(createProduct(data, config));    
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
  