import './App.css';
import SearchBar from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { searchMovieAsync } from './redux/actions';

export const App = () => {
  return (
    <div className="App">
      <SearchBar search={searchMovieAsync} />
      <SearchResults />
    </div>
  );
}

