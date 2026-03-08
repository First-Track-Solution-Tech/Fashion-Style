import { useParams } from "react-router-dom";
import { products } from "../data/product";

const CategoryPage = () => {

  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-8">
        {categoryName}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-3">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="mt-2 font-semibold">
              {product.name}
            </h3>

            <p className="text-pink-600 font-bold">
              ${product.price}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CategoryPage;