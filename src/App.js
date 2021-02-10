import { useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import {PostContextProvider} from "./context/postContext.js"
import blog from "./Images/blog.png"
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form"
import useStyles from "./styles";
import {useDispatch} from "react-redux"
import {getPosts} from "./actions/posts.js"

function App() {

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts()); 
  }, [dispatch])  //[currentId] causes problem in form but not in there

  return (
    <PostContextProvider>
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Blog</Typography>
        <img className={classes.image} src={blog} alt="memories" height="60"/>
      </AppBar>

      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
    </PostContextProvider>
  );
}

export default App;
