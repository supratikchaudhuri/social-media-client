import React, {useContext, useState, useEffect} from 'react'
import useStyles from "./styles";
import {Typography, Paper, TextField, Button} from "@material-ui/core"
import FileBase from "react-file-base64"
import {useDispatch} from "react-redux";
import {createPost, updatePost} from "../../actions/posts.js"
import { useSelector } from 'react-redux';
import {PostContext} from "../../context/postContext.js"

function Form() {

    const {currentId} = useContext(PostContext)
    const {idSetter} = useContext(PostContext)

    const classes = useStyles(); 
    const post = useSelector((state) => currentId ? state.posts.find(p => p._id === currentId) : null);
    
    const emptyPost = {title: '', message: '', tags: "", selectedFile: ""}
    const [postData, setPostData] = useState(emptyPost);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    // console.log(user?.result.name);

    useEffect(() => {
        if(post) setPostData(post)
    }, [post]) 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, {...postData, name : user?.result.name}))
        }  else {
            dispatch(createPost({...postData, name : user?.result.name}));
        }
        clear()
    }

    const clear = () => {
        idSetter(0)
        setPostData(emptyPost);
    }

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="centre">
                    Please Sign In to create your own post
                </Typography>
            </Paper>
        )
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" >{currentId ? "Edit" : "Create"} a post</Typography>
                <TextField name="title" variant = "outlined" label = "Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                <TextField name="message" variant = "outlined" label = "Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                <TextField name="tags" variant = "outlined" label = "Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})}/>
            
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone ={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
