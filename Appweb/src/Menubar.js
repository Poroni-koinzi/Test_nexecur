import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'react-bootstrap/Image'
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import './App.css';






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 20),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));



function Barmenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink to={{
        pathname: `/Connexion`,
      }}>
        <MenuItem onClick={handleMenuClose}>connexion</MenuItem>
      </NavLink>
      <NavLink to={{
        pathname: `/Inscription`,
      }}>
        <MenuItem onClick={handleMenuClose}>inscription</MenuItem>
      </NavLink>
    </Menu>
  );


  return (
    <div className="App">
          <div className={classes.root}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <Image src={require('./images/logo.png')} rounded />
              </Typography>
              <Button >A Propos</Button>
              <Button >Contact</Button>
              <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            
              <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            style={{
              marginRight: 10,
            }}
          >
            <AccountCircle />
          </IconButton>
            
            </Toolbar>
          </div>
    </div>
  );
}

export default Barmenu;
