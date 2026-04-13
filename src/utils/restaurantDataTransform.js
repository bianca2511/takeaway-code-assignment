export function transformRestaurantData(restaurants) {
    // Check if restaurants is actually an array
    if (!Array.isArray(restaurants)) {
        return [];
    }

    // Take only first 10 restaurants and transform each one
    // to only extract the relevant fields
    return restaurants.slice(0, 10).map((item) => {
        return {
            uniqueName: item.uniqueName || 'unknown',
            name: item.name || 'Unnamed Restaurant',
            rating: item.rating?.starRating || 0,
            address: item.address?.firstLine || 'Address not available',
            cuisines: item.cuisines ? item.cuisines.map((c) => c.name) : []
        };
    });
}
