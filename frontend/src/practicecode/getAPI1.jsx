// 
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [monument, setMonument] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/')
      .then((response) => {
        console.log('API data:', response.data);
        setMonument(response.data);
      })
      .catch((error) => {
        console.log('API error:', error);
      });
  }, []);
  

  return (
    <div>
      <h1>Monuments</h1>
        <center>
          <table style={{ color: "white", fontSize: "20px", }}>
            <tr style={{ border:"3px solid"}}>
              <th style={{ border:"3px solid"}}>id</th>
              <th style={{ border:"3px solid"}}>name</th>
              <th style={{ border:"3px solid"}}>about</th>
            </tr>
            
      {monument.map((item) => (
        <tr style={{ border:"2px solid"}}>
          <td style={{ border:"2px solid"}}><h2>{item.id}</h2></td>
          <td style={{ border:"2px solid"}}><h3>{item.name}</h3></td>
          <td style={{ border:"2px solid"}}><p>{item.about}</p></td>          
      </tr>
              
            )
            
            )}
            
            
          </table>
          </center>
    </div>
  );
            
}

export default App;