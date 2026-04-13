# Takeaway Restaurant Finder

A React application that lets users discover restaurants in their area by searching based on a postcode

## Design & Architecture

### Component structure
- **App.jsx** - Main component managing search state and the API call
- **SearchBar.jsx** - Input component for postcode searches
- **RestaurantList.jsx** - Displays list of restaurants
- **RestaurantCard.jsx** - Individual restaurant display card

### Main data transformation logic
The data transformation logic is extracted into a utility function (`src/utils/restaurantDataTransform.js`) for:
- **Testability** - Pure JS function, easy to unit test
- **Reusability** - Can be used across different parts of the app
- **Maintainability** - Centralized data transformation rules

### Features
- Displays 4 restaurant data points: name, rating, address, cuisines
- Limits results to first 10 restaurants from the API result
- Error handling for invalid postcodes or no results found
- Handles missing/null API fields

## How to run it

### First time installation
```bash
npm install
```

### Start development server
```bash
npm run dev
```
The app will start at `http://localhost:5173`

### Production build
```bash
npm run build
```

### How to run the tests
```bash
npm test
```
This runs all unit tests for the data transformation logic using Vitest.
No tests have been written for the React components, since the assumption was only the core logic will be assessed.

## Tradeoffs and challenges

### Challenge: API response data structure
**Issue**: The API returns nested objects (e.g. `rating.starRating`, `address.firstLine`), but the program displays only need flat fields.

**Solution**: Created `transformRestaurantData()` utility function that:
- Extracts only needed fields
- Handles null/missing values with defaults
- Transforms nested arrays into flat arrays

### Challenge: Error handling
**Issue**: Users need feedback when postcodes are invalid or no results exist.

**Solution**: Added error state and error displays on the page:
- "Invalid postcode or area not covered" - for bad API responses
- "No restaurants found for this postcode" - for empty results

## Testing

Unit tests cover the transformation function with 7 core test cases:
- Valid data transformation
- Limiting to first 10 restaurants
- Handling null rating
- Handling null address
- Handling missing cuisines
- Handling null input
- Handling empty arrays


## Assumptions
- The API returns data with:
   - A `restaurants` array at `result.restaurants`
   - Each restaurant has the following fields: `uniqueName`, `name`, `rating.starRating`, `address.firstLine`, `cuisines[].name`
- Missing data fields should show user-friendly defaults
- Program uses `uniqueName` as React key and assumes this is unique across results
- Displays results without filtering by e.g. delivery type, opening hours, or ratings
