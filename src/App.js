import { useState } from "react";
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import productList from './models/data.json';
import Product from "./components/Product";

function App () {
  const products = productList;
  console.log("here are all the products", products);

  products.map(productItem => <Product product={productItem} />)

  return(
    <div className="App">
    <h1>Media store</h1>
    <Header />
    {products.map(productItem => <Product product={productItem} />)}
    </div>
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