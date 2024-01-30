import React, {useState, useEffect} from 'react';
import OrderForm from './OrderForm';
import OrderList from './OrderList';

// quick and dirty function to guarantee immutability
function deepClone(element) {
  return JSON.parse(JSON.stringify(element))
}

const App = () => {
  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);
  const [bestBuy, setBestBuy] = useState(null);
  const [bestSell, setBestSell] = useState(null);

  const updateBestOffer = () => {
    const highestBuyPrice = buyOrders.length > 0 ? buyOrders[0].price : null;
    const lowestSellPrice = sellOrders.length > 0 ? sellOrders[0].price : null;

    setBestBuy(highestBuyPrice);
    setBestSell(lowestSellPrice);
  };

  const addOrUpdateOrder = (newOrder, orders, setOrders) => {
    const existingOrderIndex = orders.findIndex(
      order => order.price === newOrder.price
    );

    if (existingOrderIndex !== -1) {
      orders[existingOrderIndex].quantity += newOrder.quantity;
    } else {
      orders.push(newOrder);
      orders.sort((a, b) => (newOrder.type === 'BUY' ? b.price - a.price : a.price - b.price));
    }

    setOrders([...orders]);
  };

  const matchOrders = () => {
    let updatedBuyOrders = deepClone(buyOrders);
    let updatedSellOrders = deepClone(sellOrders);

    let isOrderMatched = false;

    for (let i = 0; i < updatedBuyOrders.length; i++) {
      for (let j = 0; j < updatedSellOrders.length; j++) {
        let buyOrder = updatedBuyOrders[i];
        let sellOrder = updatedSellOrders[j];

        if (buyOrder.price >= sellOrder.price) {
          let minQuantity = Math.min(buyOrder.quantity, sellOrder.quantity);
          buyOrder.quantity -= minQuantity;
          sellOrder.quantity -= minQuantity;
          isOrderMatched = true;

          // Remove the order if its quantity is zero
          if (buyOrder.quantity <= 0) {
            updatedBuyOrders.splice(i, 1);
            i--;
          }
          if (sellOrder.quantity <= 0) {
            updatedSellOrders.splice(j, 1);
            j--;
          }

          if (isOrderMatched) {
            break;
          }
        }
      }

      if (isOrderMatched) {
        isOrderMatched = false;
        continue;
      }
    }

    setBuyOrders(updatedBuyOrders);
    setSellOrders(updatedSellOrders);
  };


  const addOrder = (newOrder) => {
    if (newOrder.type === 'BUY') {
      addOrUpdateOrder(newOrder, buyOrders, setBuyOrders);
    } else {
      addOrUpdateOrder(newOrder, sellOrders, setSellOrders);
    }
    matchOrders();
    updateBestOffer();
  };

  useEffect(() => {
    updateBestOffer();
  }, [buyOrders, sellOrders]);

  return (
    <div>
      <OrderForm onSubmitOrder={addOrder}/>
      <OrderList orders={buyOrders} title="Buy Orders"/>
      <OrderList orders={sellOrders} title="Sell Orders"/>
      <div>
        <h2>Best prices</h2>
        <p>Best buy order: {bestBuy}</p>
        <p>Best sell order: {bestSell}</p>
      </div>
    </div>
  );
};

export default App;
