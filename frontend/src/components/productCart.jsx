import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">Price: ${product.price}</p>
      <Link
        to={`/product/${product._id}`}
        className="block mt-2 text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
