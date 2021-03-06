import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LogoutAuth } from "../../actions/LogoutActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import GavelIcon from "@material-ui/icons/Gavel";
import SportsEsports from "@material-ui/icons/SportsEsports";

//UI functions
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  typography: {
    marginLeft: theme.spacing(2),
  },
  styledLink: {
    textDecoration: "none",
    color: "black",
  },
  logo: {
    textDecoration: "none",
    color: "white",
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
  },
}));

const Navbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(LogoutAuth(history));
  };

  //UI functions
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <Link className={classes.styledLink} to="/home">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Strona G????wna" />
          </ListItem>
        </Link>
        <Link className={classes.styledLink} to="/user-page">
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profil U??ytkownika" />
          </ListItem>
        </Link>
        <Link className={classes.styledLink} to="/ranking">
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Ranking" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <Link className={classes.styledLink} to="/new-game">
          <ListItem button>
            <ListItemIcon>
              <SportsEsports />
            </ListItemIcon>
            <ListItemText primary="Dodaj Now?? Gre" />
          </ListItem>
        </Link>
        <Link className={classes.styledLink} to="/game-rules">
          <ListItem button>
            <ListItemIcon>
              <GavelIcon />
            </ListItemIcon>
            <ListItemText primary="Zasady Gry" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link className={classes.logo} to="/home">
            <LocationCityIcon className={classes.CityIcon} />
            <Typography className={classes.typography} variant="h6" noWrap>
              City Game
            </Typography>
          </Link>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link className={classes.styledLink} to="/user-page">
                <MenuItem onClick={handleClose}>Profil</MenuItem>
              </Link>
              <Link className={classes.styledLink} to="/user-settings">
                <MenuItem onClick={handleClose}>Moje konto</MenuItem>
              </Link>
              <Link className={classes.styledLink} to="/">
                <MenuItem onClick={(handleClose, logout)}>Wyloguj</MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
