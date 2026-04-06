import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosConfig";
import { useCart } from "../context/CartContext";

export default function MenuPage() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    api.get(`/api/menu/restaurant/${id}`).then(res => setItems(res.data));
  }, [id]);

  return (
    <div>
      <h2>Menu</h2>
      {items.map(i => (
        <div key={i.id}>
          <h4>{i.name}</h4>
          <button onClick={() => addItem(i)}>Add</button>
        </div>
      ))}
    </div>
  );
}