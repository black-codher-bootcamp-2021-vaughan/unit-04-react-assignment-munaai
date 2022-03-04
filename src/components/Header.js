import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function Header() {
    return (
        <Router>
            <section className="Header">
               <ul>
                   <li>
                       <Link to="/home" > HOME </Link>
                   </li>
                   <li>
                       <Link to="/about" > ABOUT </Link>
                   </li>
                   <li>
                       <Link to="/basket" > BASKET </Link>
                   </li>
               </ul>
            </section>
        </Router>
    )
}

export default Header;