import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../api/HomePageAPIs/Products';
import Product from '../../Components/Product/Product';
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResult from "../../Components/SearchResult/SearchResult";
import './HomePage.css';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";
import {updateIsLiked} from '../../features/isLiked';


function HomePage() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const Products = useSelector((state) => state.Products.value);
  const SearchInputValue = useSelector((state) => state.SearchInput.value);
  const IsLiked = useSelector((state) => state.IsLiked.value);

  //Rendering Product list from DB 
  useEffect(() => {
    dispatch(getProducts({SearchInputValue, IsLiked}));
}, [dispatch, SearchInputValue, IsLiked]);


  return (
    <div>
        <h1 className="Main-Heading">PRODUCTS</h1>
        <div className="SearchBarAndButtonsContainer">
            <SearchBar />
            <div className="Button-Container">
              <button onClick={() => Navigate("/create")} className='NewProduct'>New Product</button>
              <div onClick={() => dispatch(updateIsLiked("yes"))} className='favrt'><StarIcon fontSize="large"  className='StarIcon'/></div>           
            </div>
        </div>
                
        {!SearchInputValue.length > 0 && 
        <div className="SubHeadings">
            <p className="SKU-Heading">SKU</p>
            <p className="Image-Heading">IMAGE</p>
            <p className="Name-Heading">PRODUCT NAME</p>
            <p className="Price-Heading">PRICE</p>
        </div>   
        }
        {Products.products.map((product) => {
          return( 
            <div className="AllProductsContainer" key={product._id}>
            {SearchInputValue.length > 0 ? <SearchResult noOfProducts={Products.noOfProducts}  product={product}/> 
            : <Product product={product}/>}
            </div> 
          )
        })}
        
   </div>
  )
}

export default HomePage