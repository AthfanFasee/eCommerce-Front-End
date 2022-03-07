import React, { useState } from 'react'
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import './Product.css';


function Product({product}) {

  //to prevent bug which says array is not literable

  const likedArray = JSON.parse(localStorage.getItem("Liked"));
  let isFavrtValue = false;
  if(!likedArray || !likedArray.includes(product._id)) {
    isFavrtValue = false
  } else isFavrtValue = true;


  const [isFavrt, setIsFavrt] = useState(isFavrtValue);

  const starIconOnClick = () => {
    const Array = JSON.parse(localStorage.getItem("Liked"));
    const LikeRemovedArray = Array.filter(id => id !== product._id)
    localStorage.setItem("Liked", JSON.stringify(LikeRemovedArray))
    setIsFavrt(false) 
  }

  const starOutlineIconOnClick = () => {
    setIsFavrt(true)
    const Array = JSON.parse(localStorage.getItem("Liked"));
    localStorage.setItem("Liked", JSON.stringify([...Array, product._id]))
  }
   

  return (
    <div>
            <div className="ProductMainContainer">
              <div className="Product">
              <p className="Title">{product.SKU}</p>
              <p className="Title">Image</p>
              <p className="Title">{product.name}</p>
              <p className="Price">$24.00</p>
              </div>
              <div className="Icons">
                  <div className="DeleteIcon">
                      <DeleteButton  product={product}/>
                  </div>
                  <EditButton className="EditIcon" product={product}/>
                  {isFavrt ? <StarIcon className="StarIcon"  onClick ={starIconOnClick} /> : <StarOutlineIcon className="StarIcon" onClick ={starOutlineIconOnClick}/>}            
              </div>             
            </div>
    </div>
  )
}

export default Product