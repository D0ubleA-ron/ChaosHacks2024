import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [jsonData, setJsonData] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:3001/search"); // Point to your local server
            const data = await response.json();
            console.log(data);
            setJsonData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleClick = () => {
        fetchData();
    };

    return (
        <div>
            <button onClick={handleClick}>Fetch Data</button>
        </div>
    );
}
export default App;
