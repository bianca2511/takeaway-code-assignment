import './App.css'
import RestaurantList from './RestaurantList'
import SearchBar from './SearchBar'

function App() {

  return (
    <>
    <div className='main-frame'>
      <h3>Restaurant Finder</h3>
      <SearchBar></SearchBar>
      <RestaurantList></RestaurantList>
    </div>
    </>
  )
}

export default App
