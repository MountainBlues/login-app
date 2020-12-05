import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from '../containers/login/Login'
import Registration from '../containers/registration/Registration'

const Routes = () => (
    <Router>
        <Switch >
            <Route path="/" component={Login} />
            <Route path="/register" component={Registration} />
        </Switch>
    </Router>
)

export default Routes