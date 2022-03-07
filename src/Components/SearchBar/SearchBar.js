import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import {useDispatch} from 'react-redux';
import {UpdateSearchInput} from '../../features/SearchInput';

function SearchBar() {

  const dispatch = useDispatch();

  return (
    <div className="SearchMainContainer">
        <input onChange={(event) => dispatch(UpdateSearchInput(event.target.value))} className="search-input" placeholder="Search for products"></input>
        <div className="SearchIconContainer">
            <SearchIcon className="SearchIcon" />
            <p className="searchText">Search</p>
        </div>
        
    </div>
  )
}

export default SearchBar