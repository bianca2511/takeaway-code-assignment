import './RestaurantCard.css'

function RestaurantCard({ restaurantDetails }) {

    return (
        <>
            <div className='card'>
                <div className='card-title'>
                    <div className='card-name'>{restaurantDetails.name}</div>
                    <div className='card-rating'>{restaurantDetails.rating} ★</div>
                </div>
                <div className='card-address'>{restaurantDetails.address}</div>
                <div className='card-cuisines'>{restaurantDetails.cuisines.join(', ')}</div>
            </div>
        </>
    )
}

export default RestaurantCard
