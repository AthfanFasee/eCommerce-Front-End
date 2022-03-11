import {EditInputValue} from '../../features/EditInputElements';
import {useDispatch, useSelector} from 'react-redux';
import './EditPageElements.css';


function EditPageElements({EditProductButtonClick}) {

    const dispatch = useDispatch();
    const ProductID = useSelector((state) => state.ProductID.value);
    const EditInput = useSelector((state) => state.EditInputElements.value);
    

    return (
        <div>
            <div className="Headings">
                <h1 className="MainHead">Products</h1>
                <h2 className="SubHead">Edit Product</h2>
            </div>    
                <div className="Container">
                    <label className="Label">SKU</label>
                    <input className="Input" value={EditInput.SKU} onChange={(event) => dispatch(EditInputValue({...EditInput, SKU: event.target.value}))} />
                </div>
                <div className="Container">
                    <label className="Label">Name</label>
                    <input className="Input" value={EditInput.name} onChange={(event) => dispatch(EditInputValue({...EditInput, name: event.target.value}))}/>
                </div>
                <div className="Container">
                    <label className="Label">QTY</label>
                    <input className="Input" value={EditInput.Quantity}  onChange={(event) => dispatch(EditInputValue({...EditInput, Quantity: event.target.value}))}/>
                </div>
                <div className="DescribeContainer">
                    <label className="Label">Product Description</label>
                    <p>A small description about the product</p>
                    <textarea className="TextArea" value={EditInput.description} onChange={(event) => dispatch(EditInputValue({...EditInput, description: event.target.value}))}/>
                </div>

                <div className="ImgContainer">
                        <div className="ImageHead">
                            <div className="titlendInput">
                                <h3 className="title">Product Images</h3>
                                <label for="files" class="input">Add Images</label>
                                <input id="files" style={{visibility: "hidden"}} type="file" name="image" />    
                            </div>
                            <p className="ImageDetails">JPEG, PNG, SVG or GIF (Maximum file size 50MB)</p>
                        </div>
                        
                </div>
                <button className="AddButton" onClick={() => EditProductButtonClick(ProductID)}  disabled={!EditInput.SKU & !EditInput.name & !EditInput.description & !EditInput.Quantity}>Edit product</button>
     
            
    
                
        </div>
    )
}

export default EditPageElements