import React, { useState } from "react";
import api from "../../services/api";
import MuiAlert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import { Snackbar } from "@material-ui/core";
import useStyles from "./Home.style";
import Repositories from "../Repositories/RepositorieList";
import User from '../User/User';
import Navbar from "../Navbar/Navbar";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Home() {
  const initialReposState = { data: [] };
  const [repos, setRepos] = useState(initialReposState);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [user, setUser] = useState({});
  const [readmeContent, setReadmeContent] = useState('');

  const vertical = "bottom";
  const horizontal = "right";

  const classes = useStyles();

  const callbackReadme = (content) => {
    setReadmeContent(content)
  }

  const fetchData = (username) => {
    if (username !== "") {
      api(`/users/${username}/repos`).then((res) => {
        setRepos(res);
        if (res.data.length === 0){
          setMessage(`The user ${username} doesn't have any repositories`);
          setSeverity("alert");
          setUser(res.data[0]?.owner);
          setOpen(true);  
        }else{
          setMessage(`Repositories of ${username} fetched`);
          setSeverity("success");
          api(`/users/${username}`).then((res) => {
            setUser(res.data);
          })
          setOpen(true);  
        }
      });
    } else {
      setMessage("Empty Github user");
      setSeverity("error");
      setRepos(initialReposState);
      setUser({});
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Navbar fetchData={fetchData}></Navbar>
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={6}>
          <Repositories repositories={repos} callbackReadme={callbackReadme}></Repositories>
        </Grid>
        <Grid item xs={6}>
          <User user={user} readme={readmeContent}></User>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
    </>
  );
}
