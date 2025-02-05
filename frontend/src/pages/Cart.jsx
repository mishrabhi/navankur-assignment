import { useCart } from "../context/cartContext";

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useCart();

  return (
    <div className="p-6">
      {cart.map((item) => {
        <div key={item.id} className="border p-4 mb-4">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>;
      })}
    </div>
  );
};

export default Cart;
