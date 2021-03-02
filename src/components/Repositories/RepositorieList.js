import { List } from "@material-ui/core";
import Repositorie from "./Repositorie";
import useStyles from "./RepositorieList.style";

const RepositorieList = (props) => {
  const classes = useStyles();

  const { repositories, callbackReadme, fetchMD } = props;
  if (repositories.data === []) {
    return <div></div>;
  } else {
    return (
      <List className={classes.root}>
        {repositories.data.map((repo) => (
          <Repositorie repo={repo} key={repo.name} fetchMD={fetchMD} callbackReadme={callbackReadme}></Repositorie>
        ))}
      </List>
    );
  }
};

export default RepositorieList;
