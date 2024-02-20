import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Location = () => {
  const [townName, setTownName] = useState('');

  //search result location
  const [coordinates, setCoordinates] = useState(null);

  //search result: geotagged name
  const [resultName, setResultName] = useState('');

  const handleInputChange = (event) => {
    setTownName(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          townName
        )}&key=c5bf905a37154ab79398510f969d8f54`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch coordinates');
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;

        //assign results variable
        const searchedLocation = data.results[0].formatted;

        //correct search results
        setCoordinates({ latitude: lat, longitude: lng });

        //variable for location that was searched
        setResultName({ name: searchedLocation });
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error(error.message);
      setCoordinates(null);
    }
  };

  //linking to calendar page
  let history = useHistory();

  function handleNext() {
    history.push('/calendar');
  }

  return (
    <div>
      <h1>Please enter your destination:</h1>
      <input
        type="text"
        value={townName}
        onChange={handleInputChange}
        placeholder="Enter town name"
      />
      <button onClick={handleSearch}>Search</button>

      {coordinates && (
        <p>
          Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
        </p>
      )}

      <p>Location is: {resultName.name}</p>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Location;
