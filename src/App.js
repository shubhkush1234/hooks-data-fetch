import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    getResults();
    },[]);


  const getResults = async () => {
     const response = await axios.get("http://hn.algolia.com/api/v1/search?query=reacthooks")
      .then(response => {
        console.log(response.data);
        setResults(response.data.hits);
  })
}


  return (
    <div className="App">
      <input type="text"></input>
      {results.map(result => (
        <li>
         <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </div>
  );
}

export default App;
