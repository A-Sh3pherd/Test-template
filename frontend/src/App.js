import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Logout from "./components/Logout/Logout";
import NotFound from './pages/NotFound/NotFound'
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";

function App() {

    return (
        <div className='App'>
            <Switch>
                {/* This route is responsible for all the auth-redirections, if user is not authenticated he cannot enter. */}
                <ProtectedRoute exact path='/' component={Home}/>

                {/* Routes */}
                <Route path='/login' exact>
                    <Login/>
                </Route>

                <Route path='/signup'>
                    <Signup/>
                </Route>

                <Route path='/logout'>
                    <Logout/>
                </Route>

                <Route path="*" component={NotFound}/>
            </Switch>
        </div>

    );
}

export default App;
