import React from "react";




const Product = (props) => {
    
    const {
        trackName,
        trackPrice,
        artistId,
        artistName,
        trackViewUrl
        }
     = props.product;

    return(
        <section>
            <h2>{trackName}</h2>
            <h3>{trackPrice}</h3>
            <h4>{artistName}</h4>
        </section>
    )
}

//  const Product = (props) => {
//     const {title, price } = props;
//     return(
//         <section>
//             <p>{title}</p>
//             <p>{price}</p>
          
//         </section>
//     );

// };

export default Product;