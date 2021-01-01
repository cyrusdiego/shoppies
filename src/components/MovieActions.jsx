import { useDispatch } from 'react-redux';
import { CardActions, Button } from "@material-ui/core";
import { addNomination } from "../redux/actions";

export const MovieActions = ({ movie, actions }) => {
    return (
        <CardActions>
            <Button size="small" color="primary" onClick={ _ => actions.button.onClick(movie)}>
                {actions.button.text}
            </Button>
        </CardActions>
    );
}