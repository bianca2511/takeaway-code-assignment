import { useState } from 'react'
import './App.css'
import RestaurantList from './RestaurantList'
import SearchBar from './SearchBar'
import { transformRestaurantData } from './utils/restaurantDataTransform'

function App() {
  // state for storing the restaurant list that is fetched
  const [restaurantList, setRestaurantList] = useState([]);
  const [error, setError] = useState('');

  // handle querying the API when the search button is pressed
  const handleSearch = async (postcode) => {
    setError(''); // clear previous errors
    console.log("Searching for:", postcode);
    const APIURL = `/just-eat/discovery/uk/restaurants/enriched/bypostcode/${encodeURIComponent(postcode)}`;

    try {
      const response = await fetch(APIURL); //fetch 
      if (!response.ok) {
        throw new Error('Invalid postcode or area not covered');
      }

      const result = await response.json(); // get the query result data
      
      // check if restaurants array is empty or doesn't exist
      if (!result.restaurants || result.restaurants.length === 0) {
        setError('No restaurants found for this postcode');
        setRestaurantList([]);
        return;
      }

      // use the external transformation function to slice the first 10 results 
      // and extract the desired fields
      const selectedRestaurants = transformRestaurantData(result.restaurants);

      console.log("The first 10 restaurants are: ");
      console.log(selectedRestaurants);
      setRestaurantList(selectedRestaurants);
    } catch (error) {
      setError(error.message || 'Failed to fetch restaurants');
      console.log(error.message);
    }
  }
    return (
      <>
        <div className='main-frame'>
          <h3>Restaurant Finder</h3>
          <SearchBar onSearch={handleSearch}></SearchBar>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <RestaurantList list={restaurantList}></RestaurantList>
        </div>
      </>
    )
  }
  export default App
