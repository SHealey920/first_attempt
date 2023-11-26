

import * as React from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import byTheDozen from "../../Pages/Bakery/byTheDozen";
import Routers from "../../Routes/routes";


export default function DrawerNavigation() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {text:'By The Dozen', sublist: ['Cookies', 'Brownies', 'Cupcakes', 'Blondies'], link: '/byTheDozen',},
          {text: 'Cake Goodness',sublist: ['Cheesecakes', 'Cakes', 'Pies'], link: '/cakeGoodness',},
          { text: 'Delicious Breads', sublist:['Bread Loaves', 'Muffins'], link: '/deliciousBreads',},
          { text: 'Misc', sublist:['Candies', 'Fudge', 'Cinnamon Rolls', 'Strudel', 'Bars'], link: '/marvelousMiscellaneous',},
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <Link to={item.link}>
                <ListItemText primary={item.text} />
              </Link>
              <List>
                {item.sublist.map((subitem) => (
                  <ListItem key={subitem}>
                    <ListItemButton>
                      <ListItemText primary={subitem} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </ListItemButton>
          </ListItem>
        ))}
      </List>  
    </Box>
  )
  return (
    <div>
      
      {['View my Crazy Creations Here'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
        </Drawer>
        </React.Fragment>
        ))}
       
    </div>
    
);
}