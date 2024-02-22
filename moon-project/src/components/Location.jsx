import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Location.css';

//MUI dependencies
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

//geocode information
//https://opencagedata.com/api

const Location = () => {
  const [townName, setTownName] = useState('');

  const dispatch = useDispatch();

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

        //dispatch results to reducer
        dispatch({
          type: 'COORDINATES_VALUE',
          payload: {
            lat: lat,
            lng: lng,
            searchedLocation: searchedLocation,
          },
        });

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
      <h1></h1>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter Location"
          variant="outlined"
          type="text"
          value={townName}
          onChange={handleInputChange}
          color="success"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSearch}
                  aria-label="search"
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></div>

      {coordinates && (
        <p>
          Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
        </p>
      )}

      <p>{resultName.name}</p>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onClick={handleNext} variant="outlined">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Location;
