function RestaurantCard({ restaurant, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer" }}
    >
      <img src={restaurant.imageUrl} alt={restaurant.name} width="150" />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisineType}</p>
      <p>⭐ {restaurant.rating}</p>
    </div>
  );
}

export default RestaurantCard;