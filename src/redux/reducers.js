import { MOVIE_RESULTS } from "./actions";

export const reducer = (state = {searchString: '', searchResults: []}, action) => {
    switch (action.type) {
        case MOVIE_RESULTS:
            return { ...state, searchResults: action.payload }
        default:
            return state
    }
}

