import { Paper, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";

const SearchBar = props => {
    const dispatch = useDispatch();
    return (
        <Paper>
            <TextField id="standard-basic" label="Search Movies..." onChange={e => {
                dispatch(props.search(e.target.value.trim(), 1));
            }}/>
        </Paper>
    )
}

export default SearchBar;