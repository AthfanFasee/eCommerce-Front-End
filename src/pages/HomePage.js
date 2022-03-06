import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../api/HomePageAPIs/Products';
import Product from '../Components/Product/Product';


function HomePage() {

  const dispatch = useDispatch();


  const Products = useSelector((state) => state.Products.value);

  useEffect(() => {
    dispatch(getProducts());
}, [dispatch]);



  return (
    <div>
    <div>HomePage</div>

    {Products.products.map((product) => {
      return( 
        <div key={product._id}>
        <Product product={product}/>
        </div> 
       )
    })}
   </div>
  )
}

export default HomePage