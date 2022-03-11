import React, { useContext } from 'react'
import { CreatePageContext } from '../../helper/CreatePageProvider'
import './CreatePageElements.css';


function CreatePageElements({CreateProductButtonClick}) {

    const { createFormData, setCreateFormData} = useContext(CreatePageContext);

    const fileChangeHandler = (event) => {
        setCreateFormData(prevState => {
            return {
                ...prevState,
                [event.target.name] : event.target.files[0]
                }
            })
    }

    const handleChange = (event) => {
        setCreateFormData(prevState => {
            return {
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const data = new FormData()
        data.append('images',createFormData.images)
        data.append('SKU',createFormData.SKU)
        data.append('name',createFormData.name)
        data.append('Quantity',createFormData.Quantity)
        data.append('description',createFormData.description)
        console.log(data)
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        CreateProductButtonClick(data, config)
    }

    return (
        <div>
            <div className="Headings">
                <h1 className="MainHead">PRODUCTS</h1>
                <h2 className="SubHead">Add New Product</h2>
            </div>
                <form onSubmit={onSubmitHandler}>
                    <div className="Container">
                            <label className="Label">SKU</label>
                            <input name="SKU" className="Input" value={createFormData.SKU} onChange={handleChange}/>
                        </div>
                        <div className="NamendQTYContainer">
                            <div className="Container">
                                <label className="Label">Name</label>
                                <input name="name" className="Input" value={createFormData.name} onChange={handleChange}/>
                            </div>
                            <div className="Container">
                                <label className="Label">QTY</label>
                                <input name="Quantity" className="Input" value={createFormData.Quantity}  onChange={handleChange}/>
                            </div>            
                        </div>
                        <div className="DescribeContainer">
                            <label className="Label">Product Description</label>
                            <p>A small description about the product</p>
                            <textarea name="description"  className="TextArea" value={createFormData.description} onChange={handleChange}/>
                        </div>


                        <div className="ImgContainer">
                            <div className="ImageHead">
                                <div className="titlendInput">
                                    <h3 className="title">Product Images</h3>
                                    <label for="files" class="input">Add Images</label>
                                    <input onChange={fileChangeHandler} id="files" style={{visibility: "hidden"}} type="file" name="images" />    
                                </div>
                                <p className="ImageDetails">JPEG, PNG, SVG or GIF (Maximum file size 50MB)</p>
                            </div>
                            
                        </div>
                        <button className="AddButton" type="submit"  disabled={!createFormData.SKU || !createFormData.name || !createFormData.description || !createFormData.Quantity}>Add product</button>              
                </form>
       
                   
        </div>
    )
}

export default CreatePageElements