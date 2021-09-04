import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("react hooks")

  useEffect(() => {
    getResults();
    },[]);


  const getResults = async () => {
     const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then(response => {
        console.log(response.data);
        setResults(response.data.hits);
  })
}

const handleSubmit = (event) => {
  alert("submitted")
  event.preventDefault();
  getResults();
}


  return (
    <div className="App" >
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" onChange={(event) => setQuery(event.target.value)} value={query}></input>
        <button type="submit">search</button>
      </form>
      
      {results.map(result => (
        <li>
         <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </div>
  );
}

export default App;
