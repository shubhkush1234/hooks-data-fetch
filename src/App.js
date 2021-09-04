import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("http://hn.algolia.com/api/v1/search?query=reacthooks")
      .then(response => {
        console.log(response.data);
        setResults(response.data.hits);
      }); 
  });



  return (
    <div className="App">
      
      App

    </div>
  );
}

export default App;
