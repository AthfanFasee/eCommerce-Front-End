import React from 'react'
import {useSelector} from 'react-redux';
import './SearchResult.css';

function SearchResult({product, noOfProducts}) {

  const SearchInputValue = useSelector((state) => state.SearchInput.value);
  return (
    <div>
      <p className="Result-Text">{noOfProducts} results found for {SearchInputValue}</p>

      <div className="ProductsSearchContainer">
         <p className="SearchSKU">{product.SKU}</p>
         <p className="SearchName">{product.name}</p>
         <p className="SearchDescription">{product.description}</p>
      </div>
    </div>
  )
}

export default SearchResult