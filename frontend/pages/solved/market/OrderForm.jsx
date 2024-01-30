import React, { useState } from 'react';

const OrderForm = ({ onSubmitOrder }) => {
  const [order, setOrder] = useState({
    price: '',
    quantity: '',
    symbol: 'TSLA',
    type: 'BUY',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder(order);
    setOrder({ price: '', quantity: '', symbol: 'TSLA', type: 'BUY' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="price" type="number" value={order.price} onChange={(e) => setOrder({ ...order, price: parseInt(e.target.value) })} placeholder="Price" required />
      <input name="quantity" type="number" value={order.quantity} onChange={(e) => setOrder({ ...order, quantity: parseInt(e.target.value) })} placeholder="Quantity" required />
      <input name="symbol" type="text" value={order.symbol} placeholder="Symbol" required />
      <select name="type" value={order.type} onChange={(e) => setOrder({ ...order, type: e.target.value })}>
        <option value="BUY">Buy</option>
        <option value="SELL">Sell</option>
      </select>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
