import './RestaurantList.css'
// pass the list of restaurant as a prop from App
function RestaurantList({list}) {

    return (
        <>
            <div>
                {/* Return a detailed card for each restaurant in the list */}
                {list.map((item) => (
                    // use unique name as a key
                    <RestaurantCard key={item.uniqueName}
                    // pass the other details as one object
                        restaurantDetails={{
                            name: item.name,
                            rating: item.rating,
                            address: item.address,
                            cuisines: item.cuisines
                        }}>
                    </RestaurantCard>
                ))}
            </div>
        </>
    )
}

export default RestaurantList
