// import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import Basket from "../components/Basket";

// function About() {
//     return (
//         <Switch>
//             <Router path="/">
//             </Router>

//             <Router path="/basket">
//                 <Basket />
//             </Router>

//             <Router path="/about">
//                 <About />
//             </Router>
//         </Switch>
        

//     )
// }

// export default About;

const About = () => {
    return (
      <div id="about">
        <h1>About</h1>
        <h2>Welcome to Rebecca's Media Store.</h2>
        Browse the iTunes store for media you are interested in. Add to your
        basket and keep track of costs.
      </div>
    );
  };
  
  export default About;
  
