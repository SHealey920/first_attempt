import * as React from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import BakeryRouters from "../../Routes/BakeryRouters";

export default function DrawerNavigation() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ left: open });
  };

  const list = () => (
    <List>
      {[
        { text: 'Home', link: '/'},
        { text:'By The Dozen', sublist: ['Cookies', 'Brownies', 'Cupcakes', 'Blondies'], link: '/byTheDozen'}, 
        { text: 'Cake Goodness',sublist: ['Cheesecakes', 'Cakes', 'Pies'], link: '/cakeGoodness',},
        { text: 'Delicious Breads', sublist:['Bread Loaves', 'Muffins'], link: '/deliciousBreads',},
        { text: 'Misc', sublist:['Candies', 'Fudge', 'Cinnamon Rolls', 'Strudel', 'Bars'], link: '/marvelousMiscellaneous',},
      ].map((item) => (
        <ListItem key={item.text} onClick={toggleDrawer(false)} component={Link} to={item.link}>
          <ListItemButton>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className="navBar_drawer">
      <div className="navBar_button">
        <Button onClick={toggleDrawer(true)}>Menu</Button>
      </div>
      <Drawer
        anchor='left'
        open={state.left}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}