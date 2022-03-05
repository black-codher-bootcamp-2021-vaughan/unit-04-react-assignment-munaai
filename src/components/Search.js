// import React from "react";
// import { useState } from "react";




// const Search = ({placeholder, data}) => {
//     const [filteredData, setfilteredData] = useState([]);

//     const handleFilter = (event) => {
//         const searchWord = event.target.value;
//         const newFilter = data.filter((value) => {
//             return value.trackName.toLowerCase().includes(searchWord);
//         });
//         if (searchWord === "") {
//             setfilteredData([]);
//         }   else {
//             setfilteredData(newFilter);
//         }
       
//     };
    

//     return(
//         <div id="search">
//             <form id="searchAPI" onSubmit={Search}>
//                 <div className= "Searchinput">
//                     <input id="term" type="text" placeholder={placeholder} onChange={handleFilter}/>
//                     <button id="searchButton">Search</button>

//                 </div>
//                 {filteredData.length != 0 && (
//                 <div className= "dataResult">
//                     {filteredData.slice(0 , 5).map((value, key) => {
//                         return (
//                             <a> {value.trackName} 
//                                 <p>{value.trackName}</p>
//                             </a>

//                         )
//                     })}

//                 </div>
//                 )}

//             </form>
//         </div>
//     )


    
    
// }



// export default Search;

const Search = ({ search, term, setTerm }) => {
    const handleChange = (event) => {
      setTerm(event.target.value);
    };
  
    return (
      <div id="search">
        <form
          id="searchAPI"
          onSubmit={(e) => {
            e.preventDefault();
            search(term);
          }}
        >
          <label>
            <input
              type="text"
              placeholder="Enter search term..."
              id="term"
              name="term"
              value={term}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Search"></input>
        </form>
        {term && <h1 className="search_term">Searching for terms:{term}</h1>}
      </div>
    );
  };
  
  export default Search;
