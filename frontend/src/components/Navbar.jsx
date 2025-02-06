import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { token, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  //Logout Fun
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Shopping App</h1>
      {token && (
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">
            Products
          </Link>
          <Link to="/cart" className="hover:underline relative">
            Cart
            {cart.length > 0 && (
              <span className="ml-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                {cart.length}
              </span>
            )}
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
