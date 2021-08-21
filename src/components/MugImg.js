import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../service/cartSlice';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MugImg(props) {
  const classes = useStyles();
  const { rowData } = props;

  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={rowData.image}
          title={rowData.name}
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
            {rowData.name}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            {rowData.description}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            Rs. {parseInt(rowData.price)} | {parseInt(rowData.quantity) || 'No'} units available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
            parseInt(rowData.quantity) > 0 &&
            cart.filter(e=> e.name === rowData.name).length < parseInt(rowData.quantity) && 
                              <div>
                                <Button size="small" color="primary" onClick={() => dispatch(addToCart(rowData)) } >
                                    <AddIcon/>
                                </Button>
                                {
                                    cart.length > 0 &&
                                    cart.filter(e=> e.name === rowData.name).length > 0 && 
                                    <Button size="small" color="primary" onClick={() => dispatch(removeFromCart(rowData.name)) }>
                                        <RemoveIcon/>
                                    </Button>
                                }
                              </div>
        }  

      </CardActions>
    </Card>
  );
}
