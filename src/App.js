import { useState } from "react";
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import productList from './models/data.json';
import Product from "./components/Product";
import PropTypes from "prop-types";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


function App () {

  const products = productList;
  console.log("here are all the products", products);

  const [input, setInput] = useState("")
  const Search = (event) => {
    console.log(event.target.value)
    setInput(event.target.value)

}

  products.map(productItem => <Product product={productItem} />)

  return(
    <Router>
      <section className="App">
        <input id="search" name="search" type="search" placeholder="Search for media" onChange={(e) => Search(e)}/>
        <form>
          <div>
             <label>Username</label>
            <input required id="search" name="search" type="text" placeholder="Enter your Username" onChange={(e) => Search(e)}/>
          </div>
          <div>
             <label>Password</label>
            <input required id="search" name="search" type="password" placeholder="Enter your password" onChange={(e) => Search(e)}/>
          </div>
          <input type= "Submit" value= "Sign in"/>
        </form>  
          <ProductList color="orange">
              <h1>Media store {input}</h1>
              {/* <Header /> */}
              {products.map(productItem => <Product product={productItem} />)}
          </ProductList>
      </section>
      <Switch>

      </Switch>
    </Router>
  )

}

// const newSetOfProducts = [
//   {
//     volumeInfo: { title: "Dreams from my father" },
//     saleInfo: { retailPrice: { amount: "9.99" } },
//   },
//   {
//     volumeInfo: { title: "Trick Mirror" },
//     saleInfo: { retailPrice: { amount: "10" } },
//   },
//   {
//     volumeInfo: { title: "Me Myself and I" },
//     saleInfo: { retailPrice: { amount: "22.50" } },
//   },
//   {
//     volumeInfo: { title: "I know why the caged bird sings" },
//     saleInfo: { retailPrice: { amount: "15" } },
//   },
// ];


// function App() {
//   console.log("here are all the products", products);
//   const [paginationSection, setPaginationSection] = useState([
//     products[0],
//     products[1],
//     products[2],
//     products[3],
//   ]);
//   return (
//     <div className="App">
//       <h1>Media store</h1>
//       <Header />
//       <button onClick={() => setPaginationSection(newSetOfProducts)}>
//         Click Me to change the set of books
//       </button>
//       <button
//         onClick={() =>
//           setPaginationSection([
//             products[4],
//             products[5],
//             products[6],
//             products[7],
//           ])
//         }
//         >
//         Click to go to the next pagination of books
//       </button>
//       <ProductList products={paginationSection} />


//       {/* <ProductList products={products} />
//       <Product title = "queenie" price = "9.99" />
//       <Products />
//       <ProductList /> */}

      
//     </div>
//     );
// }

export default App;