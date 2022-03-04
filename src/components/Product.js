import React from "react";




const Product = (props) => {
    //this part is deconstructing. This is so we can call each object by using its name//
    const {
        kind,
        trackId,
        trackName,
        artworkUrl100,
        trackPrice,
        artistName,
        shortDescription,
        
        }
     = props.product;

    return(
        <div>    
            <img src = {artworkUrl100} alt = "thumbnail"/>
            <section>
                <h2>{trackName}</h2>
                <h3>{artistName}</h3>
                <h3>{kind}</h3>
                <h3>{trackId}</h3>
                <h2>{trackPrice}</h2>
                <h3>{shortDescription}</h3>

            </section>
            <button id="addButton" >BUY</button>
            
        </div>
    )
}

//Do proptypes from here. copy from session 5. Confirms if the result should be string, boolean or whatever//
export default Product;