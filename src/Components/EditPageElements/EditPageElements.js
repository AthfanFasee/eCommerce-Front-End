import {EditInputValue} from '../../features/EditInputElements';
import {useDispatch, useSelector} from 'react-redux';



function EditPageElements({EditProductButtonClick}) {

    const dispatch = useDispatch();
    const ProductID = useSelector((state) => state.ProductID.value);
    const EditInput = useSelector((state) => state.EditInputElements.value)
    

    return (
        <div>
            <h1>Products</h1>
            <h2>Edit Product</h2>
                
                <div className="RegInputContainer">
                    <label>SKU</label>
                    <input value={EditInput.SKU} onChange={(event) => dispatch(EditInputValue({...EditInput, SKU: event.target.value}))}/>
                </div>
                <div className="RegInputContainer">
                    <label>Name</label>
                    <input value={EditInput.name} onChange={(event) => dispatch(EditInputValue({...EditInput, name: event.target.value}))}/>
                </div>
                <div className="RegInputContainer">
                    <label>QTY</label>
                    <input value={EditInput.Quantity}  onChange={(event) => dispatch(EditInputValue({...EditInput, Quantity: event.target.value}))}/>
                </div>
                <div className="RegInputContainer">
                    <label>Product Description</label>
                    <input value={EditInput.description} onChange={(event) => dispatch(EditInputValue({...EditInput, description: event.target.value}))}/>
                </div>
                <button onClick={() => EditProductButtonClick(ProductID)}  disabled={!EditInput.SKU & !EditInput.name & !EditInput.description & !EditInput.Quantity}>Edit product</button>
     
            
    
                
        </div>
    )
}

export default EditPageElements