import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => {
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="border p-4"
        >
          <h3 className="text-lg">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
        </Link>;
      })}
    </div>
  );
};

export default Products;
