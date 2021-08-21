import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
export default function Cart({open,toggleDrawer}) {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.cartItems);

  const toggleDrawerProp = () => {
    toggleDrawer(false)
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawerProp}
      onKeyDown={toggleDrawerProp}
    >
      <List>
        {cart.map((item,index,array) => (
          cart.findIndex(e=>e.name === item.name) === index &&
          <ListItem button key={item.name}>
            <ListItemIcon>
                <Avatar variant="rounded" alt={item.name} src={item.image} className={classes.large} />
            </ListItemIcon>
            <Typography variant="inherit">{item.name}</Typography>              
          </ListItem>
        ))}
      </List>
    </div>
  );

  const emptyList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawerProp}
      onKeyDown={toggleDrawerProp}
    >
      <List>
        <ListItem>
            <ListItemIcon>
                <AddShoppingCartIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Cart is empty</Typography>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <Drawer anchor="right" open={open} onClose={toggleDrawerProp}>
            {cart.length > 0 ? list() : emptyList()}
        </Drawer>
    </div>
  );
}
