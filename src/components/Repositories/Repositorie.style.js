import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    paddingBottom: 10,
    '&:hover': {
      borderRadius: "0.5rem",
      paddingLeft: "0.5rem",
      borderLeft: "0.5rem solid #000"
    }
  },
  goTo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
  }));