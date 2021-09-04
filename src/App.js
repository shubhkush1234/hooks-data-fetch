import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("reacthooks")

  useEffect(() => {
    getResults();
    },[query]);


  const getResults = async () => {
     const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then(response => {
        console.log(response.data);
        setResults(response.data.hits);
  })
}


  return (
    <div className="App">
      <input type="text" onChange={(event) => setQuery(event.target.value)}></input>
      {results.map(result => (
        <li>
         <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </div>
  );
}

export default App;
