import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/api/orders/history").then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map(o => (
        <div key={o.id}>
          Order #{o.id} - {o.status}
        </div>
      ))}
    </div>
  );
}