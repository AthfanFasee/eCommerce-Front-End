import React, { useContext } from 'react'
import { CreatePageContext } from '../../helper/CreatePageProvider'
import './CreatePageElements.css';


function CreatePageElements({CreateProductButtonClick}) {

    const { SKU, setSKU, name, setName, description, setDescription,Quantity, setQuantity} =
    useContext(CreatePageContext);

    return (
        <div>
            <div className="Headings">
                <h1 className="MainHead">PRODUCTS</h1>
                <h2 className="SubHead">Add New Product</h2>
            </div>
           
       
                    <div className="Container">
                        <label className="Label">SKU</label>
                        <input className="Input" value={SKU} onChange={(event) => setSKU(event.target.value)}/>
                    </div>
                    <div className="NamendQTYContainer">
                        <div className="Container">
                            <label className="Label">Name</label>
                            <input className="Input" value={name} onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div className="Container">
                            <label className="Label">QTY</label>
                            <input className="Input" value={Quantity}  onChange={(event) => setQuantity(event.target.value)}/>
                        </div>            
                    </div>
                    <div className="DescribeContainer">
                        <label className="Label">Product Description</label>
                        <p>A small description about the product</p>
                        <textarea  className="TextArea" value={description} onChange={(event) => setDescription(event.target.value)}/>
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
                    <button className="AddButton" onClick={CreateProductButtonClick}  disabled={!SKU || !name || !description || !Quantity}>Add product</button>              
        </div>
    )
}

export default CreatePageElements