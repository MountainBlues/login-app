import { Button, Card, CardActions, CardContent, Container, makeStyles, Typography } from '@material-ui/core'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import usePersistantLogin from '../../component/usePersistantLogin'

const useStyles = makeStyles({
    containerStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    root: {
        minWidth: 300,
    },
    logoutBtn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
    },
    cardActionStyle: {
        display: "flex",
        justifyContent: "flex-end"
    }
})

const Dashboard = () => {
    const classes = useStyles()
    const history = useHistory()
    usePersistantLogin()
    const user = useSelector(state => state.loginReducer.userDetails) || {}
    const logoutHandler = useCallback(() => {
        sessionStorage.setItem("user", "")
        history.push("/login")
    })

    return (
        <Container className={classes.containerStyle}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {user.firstname} {user.lastname}
                    </Typography>
                    <Typography color="textSecondary">
                        DOB: {user.dob}
                    </Typography>
                    <Typography color="textSecondary">
                        City: {user.city}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActionStyle}>
                    <Button className={classes.logoutBtn} size="small" onClick={logoutHandler}>Log Out</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default Dashboard