import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from '../containers/login/Login'
import Registration from '../containers/registration/Registration'
import Dashboard from '../containers/dashboard/Dashboard'
import KickStart from '../component/KickStart'

const Routes = () => (
    <Router>
        <Switch >
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={KickStart} />
        </Switch>
    </Router>
)

export default Routes