import React, { useContext } from 'react'
import { CreatePageContext } from '../../helper/CreatePageProvider'



function CreatePageElements({CreateProductButtonClick}) {

    const { SKU, setSKU, name, setName, description, setDescription,Quantity, setQuantity} =
    useContext(CreatePageContext) 

    return (
        <div>
            <h1>Products</h1>
            <h2>Add New Product</h2>
                
                <div className="RegInputContainer">
                    <label>SKU</label>
                    <input value={SKU} onChange={(event) => setSKU(event.target.value)}/>
                </div>
                <div className="RegInputContainer">
                    <label>Name</label>
                    <input value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="RegInputContainer">
                    <label>QTY</label>
                    <input value={Quantity}  onChange={(event) => setQuantity(event.target.value)}/>
                </div>
                <div className="RegInputContainer">
                    <label>Product Description</label>
                    <input value={description} onChange={(event) => setDescription(event.target.value)}/>
                </div>
                <button onClick={CreateProductButtonClick}  disabled={!SKU || !name || !description || !Quantity}>Add product</button>
     
            
    
                
        </div>
    )
}

export default CreatePageElements