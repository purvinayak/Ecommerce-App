import React from 'react'
// import Myfemily from './Myfemily';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
// import BasicSpeedDial from './components/BasicSpeedDial';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { styled } from '@mui/material/styles';
// import BasicSpeedDial from 'BasicSpeedDial';

const Ecomm = () => {

const [open, setOpen] = React.useState(true);
const [anchorEl, setAnchorEl] = React.useState(null);

const toggleDrawer = (newOpen) => () => {
    (setOpen(newOpen));
  

  };
  const myopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  
  
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
 


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Courses', 'About student', 'Admission', 'Fees'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    
  );
  

  return (
    <>
    <div>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            // onClick={()=>{handleclick()}}
          onClick={toggleDrawer(true)}
          >
            {/* <MenuIcon /> */}


            {/* <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3}} >
            About    
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
            Contect
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 20 }}>
            service
          </Typography>
          <Button color="inherit"  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       >Login</Button>
        </Toolbar>
  
      </AppBar>
    </Box>    


  
    <div>
     
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={myopen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      {/* <BasicSpeedDial/> */}
   {/* <Myfemily/> */}
   {/* <BasicSpeedDial/> */}
</div>
</>
);
}   
 
 export default Ecomm;  