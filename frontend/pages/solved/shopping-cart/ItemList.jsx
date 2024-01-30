import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemList = () => {
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Apples', price: 1.2 },
      { id: 2, name: 'Oranges', price: 1.5 },
      { id: 3, name: 'Bananas', price: 0.9 },
    ];

    setAvailableItems(mockData);
  }, []);

  return (
    <div>
      {availableItems?.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
