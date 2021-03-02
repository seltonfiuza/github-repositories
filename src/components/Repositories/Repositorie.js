import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from "./Repositorie.style";
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";

const Repositorie = (props) => {
  const { repo, callbackReadme } = props;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const getReadmeContent = (html_url) => {
    var readmeURL = "https://raw.githubusercontent.com/{}/master/README.md"
    let want = html_url.split("/")
    let whatIReallyWant = `${want[3]}/${want[4]}`
    let readmeURLFormatted = readmeURL.replace('{}', whatIReallyWant)
    // callbackReadme(readmeURL.replace('{}', whatIReallyWant))
    axios.get(readmeURLFormatted).then(res => (
      callbackReadme(res.data))
    );
    
  }

  const classes = useStyles();
    return (
      <Card className={classes.root} key={repo.name}>
          <CardContent>
            <Typography gutterBottom variant="overline" component="h1">
              {repo.name}{repo.language !== null ? ', '+ repo.language : ''}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {repo.description}
            </Typography>
          </CardContent>
        <CardActions>
        <div className={classes.goTo}>
        <IconButton aria-label="README" onClick={()=> getReadmeContent(repo.html_url)}>
            <TextFieldsIcon aria-label="">
            </TextFieldsIcon>
          </IconButton>
          <IconButton aria-label="Github" onClick={()=> openInNewTab(repo.html_url)}>
            <GitHubIcon aria-label="">
            </GitHubIcon>
          </IconButton>
        </div>
      </CardActions>
      
      </Card>
    );
}

export default Repositorie;
