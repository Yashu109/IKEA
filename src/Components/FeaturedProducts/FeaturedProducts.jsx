import "./FeaturedProducts.css";

const ProductCategories = ({ products, showImages }) => {
  return (
    <div className="product-category-container">
      {showImages ? (
        <div className="horizontal-scroll">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.image}
                  alt={product.name || "Product image"}
                  className="product-image"
                  onError={(e) => (e.target.src = "/src/assets/default-placeholder.png")}
                />
                <p>{product.name}</p>
              </div>
            ))
          ) : (
            <p className="no-products">No products available for this category.</p>
          )}
        </div>
      ) : (
        <div className="text-only-list">
          {products.length > 0 ? (
            products.map((product) => (
              <p key={product.id} className="text-only-item">
                {product.name}
              </p>
            ))
          ) : (
            <p className="no-products">No items available for this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCategories;
