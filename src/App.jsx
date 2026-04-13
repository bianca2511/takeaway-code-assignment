import { useState } from 'react'
import './App.css'
import RestaurantList from './RestaurantList'
import SearchBar from './SearchBar'

function App() {
  // state for storing the restaurant list that is fetched
  const [restaurantList, setRestaurantList] = useState([]);

  // handle querying the API when the search button is pressed
  const handleSearch = async (postcode) => {
    console.log("Searching for:", postcode);
    const APIURL = `/just-eat/discovery/uk/restaurants/enriched/bypostcode/${encodeURIComponent(postcode)}`;

    try {
      const response = await fetch(APIURL); //fetch 
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json(); // get the query result data
      const rawSelectedRestaurants = result.restaurants.slice(0, 10); // select only the first 10 restaurants
      const selectedRestaurants = rawSelectedRestaurants.map((item) => {
        return {
          uniqueName: item.uniqueName,
          name: item.name,
          rating: item.rating.starRating,
          address: item.address.firstLine,
          cuisines: item.cuisisines.map((cuisine) => cuisine.name)
        }
      });

      console.log("The first 10 restaurants are: ");
      console.log(selectedRestaurants);
      setRestaurantList(selectedRestaurants);
    } catch (error) {
      console.log(error.message);
    }
  }
    return (
      <>
        <div className='main-frame'>
          <h3>Restaurant Finder</h3>
          <SearchBar onSearch={handleSearch}></SearchBar>
          <RestaurantList list={restaurantList}></RestaurantList>
        </div>
      </>
    )
  }
  export default App
