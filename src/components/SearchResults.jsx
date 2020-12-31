import { useSelector } from "react-redux";
import { SearchResult } from './SearchResult';

export const SearchResults = () => {
    const searchResults = useSelector(state => state.searchResults);
    return (
        <div>
            {
                searchResults.length === 0 ? <p>No Results</p> :
                searchResults.map(item => (
                    <SearchResult Poster={item.Poster} Title={item.Title} Year={item.Year}/>
                ))
            }
        </div>        
    )
}