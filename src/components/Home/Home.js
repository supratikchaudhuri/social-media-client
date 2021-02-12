import React, {useEffect} from 'react'
import {Container, Grow, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux"

import Posts from "../Posts/Posts";
import Form from "../Form/Form"
import {getPosts} from "../../actions/posts.js"

function Home() {

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts()); 
    }, [dispatch])  //[currentId] causes problem in form but not in there

    return (
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
