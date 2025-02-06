import { useCart } from "../context/cartContext";

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useCart();

  return (
    <div className="p-6">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-4 mb-4">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
