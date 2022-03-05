import { useState } from "react";
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import productData from './models/data.json';
import Product from "./components/Product";
import PropTypes from "prop-types";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import BasketCount from "./components/BasketCount";
import Home from "./pages/Home";


function App () {

  const [products, setProducts] = useState(productData);
  // const [basketItems, setBasketItems] = useState([]);
  const [term, setTerm] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  let currentProducts = [];
  const start = (currentPageNumber - 1) * 30 + 1;
  const end = start + 29;
  for (let i = start - 1; i < end; i++) {
    if (products.length > i) {
      currentProducts.push(products[i]);
    }
  }

  // const products = productList;
  // console.log("here are all the products", products);


  products.map(productItem => <Product product={productItem} />)

  return(
    <Router>
      <section className="App">
        <Header />
        {/* <Search placeholder= "Search for Media.." data={productData}/> */}
      <switch>
      <Route path="/">
            <Home
              products={currentProducts}
              // addToBasket={addToBasket}
              // search={search}
              term={term}
              setTerm={setTerm}
              setCurrentPageNumber={setCurrentPageNumber}
              currentPageNumber={currentPageNumber}
              // hasMoreProducts={hasMoreProducts}
            />
          </Route>

      </switch>

        <ProductList>
              {products.map(productItem => <Product product={productItem} />)}
        </ProductList>
      </section>
  
    </Router>
  )

}


export default App;