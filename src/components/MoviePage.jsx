import { MovieList } from './MovieList';
import { useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieAsync } from '../redux/actions';
import { useEffect } from 'react';

export const MoviePage = ({ movies, actions }) => {
  const [page, setPage] = useState(1);
  const searchString = useSelector((state) => state.searchString);
  const totalPage = useSelector((state) => Math.ceil(state.total / 10));
  const dispatch = useDispatch();

  const onPageChange = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(searchMovieAsync(searchString, page));
  }, [page]);

  return (
    <div>
      <MovieList movies={movies} actions={actions} />
      <Pagination count={totalPage} page={page} onChange={onPageChange} />
    </div>
  );
};
