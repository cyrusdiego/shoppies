import { Paper, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = props => {
    const dispatch = useDispatch();
    return (
        <Paper>
            <TextField id="standard-basic" label="Search Movies..." onKeyPress={e => {
                if (e.key === 'Enter') {
                    dispatch(props.search(e.target.value));
                }
            }}/>
        </Paper>
    )
}

export default SearchBar;