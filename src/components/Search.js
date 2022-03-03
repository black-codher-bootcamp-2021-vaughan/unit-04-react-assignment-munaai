import React from "react";
import { useState } from "react";




const Search = ({placeholder, data}) => {
    const [filteredData, setfilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.trackName.toLowerCase().includes(searchWord);
        });
        if (searchWord === "") {
            setfilteredData([]);
        }   else {
            setfilteredData(newFilter);
        }
       
    };
    

    return(
        <form id="searchAPI" onSubmit={Search}>
            <div className= "Search input">
                <input id="term" type="text" placeholder={placeholder} onChange={handleFilter}/>
                <button>Submit</button>

            </div>
            {filteredData.length != 0 && (
            <div className= "dataResult">
                {filteredData.slice(0 , 5).map((value, key) => {
                    return (
                        <a> {value.trackName} 
                            <p>{value.trackName}</p>
                        </a>

                    )
                })}

            </div>
            )}

        </form>
    )

    

    // return(
    //     <form id="searchAPI">
    //       <div>
    //          <label>Username</label>
    //         <input required id="search" name="search" type="text" placeholder="Enter your Username" onChange={(e) => Search(e)}/>
    //       </div>
    //       <div>
    //          <label>Password</label>
    //         <input required id="search" name="search" type="password" placeholder="Enter your password" onChange={(e) => Search(e)}/>
    //       </div>
    //       <input type= "Submit" value= "Sign in"/>
    //     </form>  
        
    // )
    
    
}
{/* <h1>Media store {input}</h1> */}


export default Search;