import Product from "./Product";






 const ProductList = (props) => {
     return(
         <section className={"productlist productlist-" + props.color}>
             {props.children} 
             {/* props.children shows everything between the productlist tag i the app.js */}
         </section>
     )
 }



export default ProductList;