import React from "react";




const Product = (props) => {
    //this part is deconstructing. This is so we can call each object by using its name//
    const {
        trackName,
        trackPrice,
        artistId,
        artistName,
        artworkUrl100
        }
     = props.product;

    return(
        <section>
            <img src = {artworkUrl100} alt = "thumbnail"/>
            <section>
                <h2>{trackName}</h2>
                <h3>{trackPrice}</h3>
                <h4>{artistName}</h4>
            </section>
            
        </section>
    )
}

//Do proptypes from here. copy from session 5. Confirms if the result should be string, boolean or whatever//
export default Product;