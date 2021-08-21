import React from 'react';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import Cart from './Cart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';

const headerStyle = {
    width: '100%',
    color: 'white',
}

const Header = () => {
    const cart = useSelector((state) => state.cart.cartItems);

    const [open, setopen] = React.useState(false);

    const toggleDrawer = (open) => {
        setopen(open);
      };

    return (
        <div style={headerStyle}>
            <Box display="flex" justifyContent="center" alignItems="center" p={1} bgcolor="#282c34">
                <Box p={1} width="30%" >
                    <div className="float-left" >
                        <MenuIcon />
                    </div>
                </Box>
                <Box p={1} width="30%" >
                    MugShot
                </Box>
                <Box p={1} width="30%" >
                    <div className="float-right" >
                        <div style={{cursor:"pointer"}} onClick={()=>toggleDrawer(true)}>
                            <Badge badgeContent={cart.length}>
                                <ShoppingCartIcon />
                            </Badge>
                        </div>   
                        <Cart open={open} toggleDrawer={toggleDrawer} />
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default Header;