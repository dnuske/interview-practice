import React from 'react';

const OrderList = ({ orders, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.symbol} - {order.type} {order.quantity} at {order.price}$
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
