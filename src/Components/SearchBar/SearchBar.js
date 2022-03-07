import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import {useDispatch} from 'react-redux';
import {UpdateSearchInput} from '../../features/SearchInput';
import {updateIsLiked} from '../../features/isLiked';

function SearchBar() {

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(UpdateSearchInput(event.target.value))
    dispatch(updateIsLiked("")); //Making sure Search functionality works properly after user requested for favrt products
  }

  return (
    <div className="SearchMainContainer">
        <input onChange={handleChange} className="search-input" placeholder="Search for products"></input>
        <div className="SearchIconContainer">
            <SearchIcon className="SearchIcon" />
            <p className="searchText">Search</p>
        </div>
        
    </div>
  )
}

export default SearchBar