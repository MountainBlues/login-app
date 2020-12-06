import { Button, Container, Snackbar, TextField, Typography, Al } from '@material-ui/core'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { initiateRegistration } from './ducks/action'
import { Link, useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles({
    containerStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    formContainerStyle: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        border: "1px solid grey",
        borderRadius: 5,
    },
    textFieldStyle: {
        marginLeft: 10,
        marginRight: 10
    },
    rowStyle: {
        marginBottom: 20
    },
    dateOfBirthStyle: {
        width: "45%",
        marginLeft: 10,
        marginRight: 10
    },
    registerBtn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 10
    },
    btnContainerStyle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    }
})

const Registration = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { control, handleSubmit, errors } = useForm();

    const onRegistrationSuccess = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const submitHandler = values => dispatch(initiateRegistration(values, onRegistrationSuccess))

    return (
        <Container className={classes.containerStyle}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success">
                    Success! You are now registered member. Please log in
                </Alert>
            </Snackbar>
            <form className={classes.formContainerStyle} onSubmit={handleSubmit(submitHandler)}>
                <div className={classes.rowStyle}>
                    <Controller
                        as={TextField}
                        name="username"
                        control={control}
                        defaultValue=""
                        id="username"
                        label="User name"
                        className={classes.textFieldStyle}
                        rules={{ required: true }}
                        error={errors && errors.username ? true : false}
                        helperText={errors && errors.username && "User name is required."}
                    />
                    <Controller
                        as={TextField}
                        name="password"
                        control={control}
                        defaultValue=""
                        id="password"
                        label="Password"
                        className={classes.textFieldStyle}
                        rules={{ required: true }}
                        error={errors && errors.password ? true : false}
                        helperText={errors && errors.password && "Password is required."}
                    />
                </div>
                <div className={classes.rowStyle}>
                    <Controller
                        as={TextField}
                        name="firstname"
                        control={control}
                        defaultValue=""
                        id="firstname"
                        label="First name"
                        className={classes.textFieldStyle}
                        rules={{ required: true }}
                        error={errors && errors.firstname ? true : false}
                        helperText={errors && errors.firstname && "First name is required."}
                    />
                    <Controller
                        as={TextField}
                        name="lastname"
                        control={control}
                        defaultValue=""
                        id="lastname"
                        label="Last name"
                        className={classes.textFieldStyle}
                        rules={{ required: true }}
                        error={errors && errors.lastname ? true : false}
                        helperText={errors && errors.lastname && "Last name is required."}
                    />
                </div>
                <div className={classes.rowStyle}>
                    <Controller
                        as={TextField}
                        name="dob"
                        control={control}
                        id="dob"
                        label="Date Of Birth"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="date"
                        className={classes.dateOfBirthStyle}
                        rules={{ required: true }}
                        error={errors && errors.dob ? true : false}
                        helperText={errors && errors.dob && "Date of birth is required."}
                    />
                    <Controller
                        as={TextField}
                        name="city"
                        control={control}
                        defaultValue=""
                        id="city"
                        label="Place of birth"
                        className={classes.textFieldStyle}
                        rules={{ required: true }}
                        error={errors && errors.city ? true : false}
                        helperText={errors && errors.city && "Place of birth is required."}
                    />
                </div>
                <div className={classes.btnContainerStyle}>
                    <Typography>
                        <Link href="#" onClick={() => history.push('/login')}>
                            Already registered? Please log in
                        </Link>
                    </Typography>
                    <Button type="submit" className={classes.registerBtn}>Register</Button>
                </div>
            </form>
        </Container>
    )
}

export default Registration