import { Container, TextField } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { initiateLogin } from './ducks/action';

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
    loginBtn: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: 10
    },
    userNameStyle: {
        marginTop: 10,
        marginBottom: 10,
        width: 250
    },
    passwordStyle: {
        width: 250,
        marginTop: 10,
        marginBottom: 10
    }
  });
  

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { control, handleSubmit, errors } = useForm();

    const submitHandler = val => dispatch(initiateLogin(val))

    return (
        <Container className={classes.containerStyle}>
            <form className={classes.formContainerStyle} onSubmit={handleSubmit(submitHandler)}>
                <Controller
                    as={TextField}
                    name="username"
                    control={control}
                    defaultValue=""
                    id="username"
                    className={classes.userNameStyle}
                    label="Please enter your user name"
                    rules={{ required: true }}
                    error={errors && errors.username ? true : false}
                    helperText={errors && errors.username && "Username is required."}
                />
                <Controller
                    as={TextField}
                    name="password"
                    control={control}
                    defaultValue=""
                    id="password"
                    className={classes.passwordStyle}
                    label="Please enter your password"
                    rules={{ required: true }}
                    error={errors && errors.password ? true : false}
                    helperText={errors && errors.password && "Password is required."}
                />
                <Button type="submit" className={classes.loginBtn}>Login</Button>
            </form>
        </Container>
    )
}

export default Login