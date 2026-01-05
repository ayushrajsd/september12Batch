const ProductList = ({ products }) => {
  const handleAddToCart = (product) => {
    console.log("added to cart", product.name);
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Product List</h2>
      <ul style={{ listStyle: "none" }}>
        {products.map((product) => (
          <li style={{ marginBottom: "10px" }} key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
