import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import {Link, useHistory, useLocation} from "react-router-dom"
import {AppBar, Typography, Avatar, Button, Toolbar} from "@material-ui/core";

import blog from "../../Images/blog.png"
import useStyles from "./styles";
import {LOGOUT} from "../../constants/actionTypes"

function Navbar() {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
        dispatch({ type: LOGOUT })
        history.push("/auth")
        setUser(null)
    }

    useEffect(() => {
        // const token = user?.token

        // JWT token checking
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>    
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Blog</Typography>
                <img className={classes.image} src={blog} alt="memories" height="60"/>
            </div>
            <Toolbar class={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondaty" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
