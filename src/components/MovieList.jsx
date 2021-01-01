import { Movie } from './Movie';
import { Box } from '@material-ui/core';

export const MovieList = ({ movies, actions }) => {
    return (
        <Box width='25%'>
            {
                movies === undefined || movies.length === 0 ? <p>No Results</p> :
                movies.map(item => (
                    <Movie movie={item} actions={actions} />
                ))
            }
        </Box>        
    )
}