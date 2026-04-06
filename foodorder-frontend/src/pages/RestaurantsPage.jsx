import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/api/restaurants').then(r => setRestaurants(r.data));
  }, []);

  return (
    <div className="page">
      <h1>Restaurants</h1>
      <div className="grid">
        {restaurants.map(r => (
          <div key={r.id} className="card" onClick={() => navigate(`/menu/${r.id}`)}>
            <img src={r.imageUrl} alt={r.name} />
            <h3>{r.name}</h3>
            <p>{r.cuisineType} · ⭐ {r.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}