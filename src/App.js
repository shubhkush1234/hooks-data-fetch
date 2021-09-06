import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("react hooks");
  const searchInputRef = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getResults();
    },[]);


  const getResults = async () => {
    setLoading(true);
     const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then(response => {
        console.log(response.data);
        setResults(response.data.hits);

        setLoading(false);
  })
}

const handleSubmit = (event) => {
  // alert("submitted");
  event.preventDefault();
  getResults();
}

const handleClearSearch = () => {
  setQuery("");
  searchInputRef.current.focus();
};
  return (
    <div className="App" >
      {loading ? (<div>Loading results...</div>):
        (<form onSubmit={e => handleSubmit(e)}>
          <input type="text" ref={searchInputRef} onChange={(event) => setQuery(event.target.value)} value={query}></input>
          <button type="submit">search</button>
          <button type="button" onClick={handleClearSearch}>Clear</button>
        </form>
        )
        
      }   
        {results.map(result => (
          <li>
            <a href={result.url}>{result.title}</a>
          </li>
        ))
      }
    </div>
  );
}

export default App;
