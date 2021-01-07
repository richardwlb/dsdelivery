import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Navbar from './components/Navbar';

function Routes(){
    return(
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/orders" component={Orders} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;