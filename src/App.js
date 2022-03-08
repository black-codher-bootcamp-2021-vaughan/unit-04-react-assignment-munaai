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
import About from "./pages/About";
import Basket from "./pages/Basket";
 


function App () {

  const [products, setProducts] = useState(productData);
  const [basketItems, setBasketItems] = useState([]);
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
  const hasMoreProducts = end < products.length;

  const addToBasket = (id) => {
    // get product object
    // store product pbject in basketItems
    // mark item as hidden in the products list

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.trackId === id) {
        setBasketItems([...basketItems, product]);
        product.hidden = true;
        break;
      }
    }
  };

  const removeFromBasket = (id) => {
    let newBasketItems = [];
    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i].trackId !== id) {
        newBasketItems.push(basketItems[i]);
      }
    }
    setBasketItems(newBasketItems);

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.trackId === id) {
        product.hidden = false;
        break;
      }
    }
  };

  const search = (value) => {
    fetch(`https://itunes.apple.com/search?term=${value}&explicit=no`)
      .then((res) => res.json())
      .then(
        (result) => {
          setProducts(result.results);
        },
        (error) => {}
      );
  };
  // const products = productList;
  // console.log("here are all the products", products);


  // products.map(productItem => <Product product={productItem} />)

  return(
    <Router>
      <Header itemCount={basketItems.length} />
      <div className="container content_container">
        <Switch>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/basket">
              <Basket basket={basketItems} removeFromBasket={removeFromBasket} />
          </Route>
          <Route path="/">
              <Home
                products={currentProducts}
                addToBasket={addToBasket}
                search={search}
                term={term}
                setTerm={setTerm}
                setCurrentPageNumber={setCurrentPageNumber}
                currentPageNumber={currentPageNumber}
                hasMoreProducts={hasMoreProducts}
              />
            </Route>
        </Switch>
      </div>
    </Router>
  );

}


export default App;