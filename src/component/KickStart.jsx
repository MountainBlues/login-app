import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { initiateLoginSuccess } from '../containers/login/ducks/action'

const KickStart = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        const userString = sessionStorage.getItem("user")
        if (userString && typeof JSON.parse(userString) === 'object') {
            dispatch(initiateLoginSuccess(JSON.parse(userString)))
            history.push('/dashboard')
        } else {
            history.push('/login')
        }
    }, [])

    return null
}

export default KickStart