import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';

export default function CartPage() {
  const { items, removeItem, clearCart, total } = useCart();
  const navigate = useNavigate();

  const placeOrder = async () => {
    try {
      const { data } = await api.post('/api/orders/place');
      clearCart();
      navigate(`/orders`, { state: { newOrder: data } });
    } catch (e) {
      alert(e.response?.data?.error || 'Order failed');
    }
  };

  if (!items.length) return <div className="page"><p>Your cart is empty.</p></div>;

  return (
    <div className="page">
      <h1>Your Cart</h1>
      {items.map(i => (
        <div key={i.id} className="cart-row">
          <span>{i.name} × {i.qty}</span>
          <span>₹{(i.price * i.qty).toFixed(2)}</span>
          <button onClick={() => removeItem(i.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">Total: ₹{total.toFixed(2)}</div>
      <button className="btn-primary" onClick={placeOrder}>Place Order</button>
    </div>
  );
}