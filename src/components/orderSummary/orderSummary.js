import React from "react";

function OrderSummary({ cart }) {
  const [shipping, setShipping] = React.useState(3.99);

  const getItemsCount = () => {
    let count = 0;
    cart.forEach((item) => {
      count = count + item.quantity;
    });

    return count;
  };

  const getItemsTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.quantity * item.price;
    });
    return Number(total.toFixed(2));
  };

  const handleShippingChange = (e) => {
    const selectedShipping = Number(e.target.value);
    setShipping(selectedShipping);
  };

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>

      <div className="total-items">
        <span>Items: {getItemsCount()}</span>
        <span>EUR {getItemsTotal()}</span>
      </div>

      <div className="shipping">
        <h4>Shipping</h4>
        <select onChange={handleShippingChange} name="shipping" id="shipping">
          <option value="3.99">Standard Delivery - EUR 3.99</option>
          <option value="8.99">Express Delivery - EUR 8.99</option>
        </select>
      </div>

      <div className="promo">
        <h4>Promo Code</h4>
        <div className="code-input">
          <input type="text" placeholder="Enter code here" disabled />
          <button disabled="disabled">APPLY</button>
        </div>
      </div>

      <div className="final-cost">
        <div className="final-cost-ammount">
          <span>Total</span>
          <span>
            EUR{" "}
            {cart.length ? Number((getItemsTotal() + shipping).toFixed(2)) : 0}
          </span>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default OrderSummary;
