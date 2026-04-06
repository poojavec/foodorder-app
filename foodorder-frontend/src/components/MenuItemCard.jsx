import { useCart } from "../context/CartContext";

function MenuItemCard({ item }) {
  const { addItem } = useCart();

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px" }}>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>₹{item.price}</p>
      <button onClick={() => addItem(item)}>Add to Cart</button>
    </div>
  );
}

export default MenuItemCard;