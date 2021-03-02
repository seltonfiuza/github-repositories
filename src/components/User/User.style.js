import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    paddingTop: 10
  },
  md: {
    maxHeight: 400,
    overflow: 'scroll'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    paddingLeft: theme.spacing(2),
  },
  }));