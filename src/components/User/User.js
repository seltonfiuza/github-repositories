import React from "react";
import useStyles from "./User.style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Paper, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import PublicIcon from '@material-ui/icons/Public';
import PeopleIcon from '@material-ui/icons/People';
import { useTheme } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";

const User = (props) => {
  const classes = useStyles();
  const { user, readme } = props;

  if (user === undefined || !("avatar_url" in user)) {
    return <div className={classes.root}></div>;
  } else {
    return (
      <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={user.avatar_url}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.html_url}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <PublicIcon aria-label="Public Repos">
            </PublicIcon>
            <Typography variant="subtitle1" color="textSecondary">
              {user.public_repos}
            </Typography>
            <PeopleIcon aria-label="Followers">
            </PeopleIcon>
            <Typography variant="subtitle1" color="textSecondary">
              {user.followers}
            </Typography>
          </div>
        </div>
        
      </Card>
       {/* Disabled for having bug  */}
      {/* <Paper className={classes.paper}>
        <ReactMarkdown unwrapDisallowed={true} skipHtml={true} className={classes.md}>
          {readme}
        </ReactMarkdown>
      </Paper> */}
      </>
    );
  }
};

export default User;
