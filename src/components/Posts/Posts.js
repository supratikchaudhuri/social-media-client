import React from 'react'
import { useSelector } from 'react-redux';
import Post from "./Post/Post"
import useStyles from "./styles";
import {Grid, CircularProgress} from "@material-ui/core";

function Posts() {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts)
    console.log(posts);
    return (
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container spacing={3} alignItems="stretch">
                {posts.map(post => (
                    <Grid item key = {post._id} xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
