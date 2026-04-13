import './RestaurantList.css'
// pass the list of restaurant as a prop from App
function RestaurantList(list) {

    return (
        <>
            <div>
                {/* Return a detailed card for each restaurant in the list */}
                {list.map((item) => (
                    <RestaurantCard key={item.uniqueName}></RestaurantCard>
                ))}
            </div>
        </>
    )
}

export default RestaurantList
