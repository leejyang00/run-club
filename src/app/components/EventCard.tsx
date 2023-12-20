import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];
interface CardProps {
    href: string;
    alt: string;

}

const EventCard = (props: CardProps): JSX.Element => {
    const { href, alt } = props;
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={href}
                    alt={alt}
                />
                <div className="absolute inset-0 z-10 bg-[#F8F6F0] w-14 h-14 flex flex-col justify-center items-center">
                    <Typography gutterBottom variant="body1">
                        10
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        SEP
                    </Typography>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
};
export default EventCard;