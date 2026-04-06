function CartItem({ item, removeItem }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{item.name} × {item.qty}</span>
      <span>₹{item.price * item.qty}</span>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;