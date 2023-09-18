import React, { useEffect } from 'react';
import axios from 'axios';

const DatabaseClear = () => {
  useEffect(() => {
    // Make an API request to the backend route when the component mounts
    axios.get(`${URL}/api/tasks/clear-database`)
      .then((response) => {
        console.log(response.data.message); // Log the response message
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Database Clear Request Sent</h1>
      <p>This component triggers the API request to clear the database when loaded.</p>
    </div>
  );
}

export default DatabaseClear;
