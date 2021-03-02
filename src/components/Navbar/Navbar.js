import React, { useState } from 'react';
import useStyles from './Navbar.style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';

const ENTER_KEY = 13;

const Navbar = (props) => {
  const classes = useStyles();
  const { fetchData } = props;

  const [username, setUsername] = useState("");

  const handleKeypress = (e) => {
    if (e.charCode === ENTER_KEY) {
      fetchData(username);
    }
  };

  return (
    <div className={classes.grow}>
      <AppBar className={classes.navbar}>
        <Toolbar>
        <GitHubIcon>
        </GitHubIcon>
          <Typography className={classes.title} variant="h6" noWrap>
            Github Repository List
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onKeyPress={handleKeypress}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(event) => {
                const { value } = event.target;
                setUsername(value);
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;