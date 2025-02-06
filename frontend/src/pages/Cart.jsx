import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/cartContext";
import axios from "axios";

const Cart = () => {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //total price of products
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  //Handle purchase
  const handlePurchase = async () => {
    if (cart.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/purchase", {
        email: user.email,
        cart,
        totalPrice,
      });

      if (response.status === 200) {
        setMessage("Purchase Successful!");
        setTimeout(() => setMessage(""), 3000);
        clearCart();
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Purchase failed! Try Again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}
      {cart.length === 0 && !message ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
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
          ))}
          {/* Fixed Total Price */}
          <p className="mt-4 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </p>

          {/* Buy Button */}
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            onClick={handlePurchase}
            disabled={loading}
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>

          {/* Purchase Message */}
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </>
      )}
    </div>
  );
};

export default Cart;
