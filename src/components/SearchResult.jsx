import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

export const SearchResult = props => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={props.Poster}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {props.Title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {props.Year}
                </Typography>
            </CardContent>
        </Card>
    )
}