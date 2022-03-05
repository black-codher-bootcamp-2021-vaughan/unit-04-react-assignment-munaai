import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Basket from "../components/Basket";

function About() {
    return (
        <Switch>
            <Router path="/">
            </Router>

            <Router path="/basket">
                <Basket />
            </Router>

            <Router path="/about">
                <Basket />
            </Router>
        </Switch>
        

    )
}

export default About;
