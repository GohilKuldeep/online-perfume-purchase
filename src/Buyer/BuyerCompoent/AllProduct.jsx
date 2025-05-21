import React, { useState }  from 'react'
import "../Css/DashboardBuyer.css";
import "./css/AllProduct.css";

const AllProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample product data
  const products = [
    { id: 1, name: "Rose Perfume", brand: "FloraScents", category: "Floral", price: "$40", image: "https://via.placeholder.com/120x120?text=Rose" },
    { id: 2, name: "Jasmine Scent", brand: "AromaLux", category: "Floral", price: "$35", image: "https://via.placeholder.com/120x120?text=Jasmine" },
    { id: 3, name: "Citrus Fresh", brand: "CitrusCo", category: "Citrus", price: "$30", image: "https://via.placeholder.com/120x120?text=Citrus" },
    { id: 4, name: "Ocean Breeze", brand: "BlueWave", category: "Aquatic", price: "$45", image: "https://via.placeholder.com/120x120?text=Ocean" },
    { id: 5, name: "Spice Night", brand: "SpiceArt", category: "Spicy", price: "$55", image: "https://via.placeholder.com/120x120?text=Spice" },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar-buyer"
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <div className="product-meta">
                <span className="product-brand">{product.brand}</span>
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-bottom-row">
                <span className="product-price">{product.price}</span>
                <button className="buy-now-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllProduct
