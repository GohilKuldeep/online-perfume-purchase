import React, { useState } from 'react'
import "./Css/ViewAllProducts.css";

// Sample product data for seller (replace with API data in real app)
const initialProducts = [
  { id: 1, name: "Dior Sauvage", brand: "Dior", category: "Woody", price: 4500, stock: 20, image: "https://via.placeholder.com/120x120?text=Dior" },
  { id: 2, name: "Gucci Bloom", brand: "Gucci", category: "Floral", price: 3800, stock: 15, image: "https://via.placeholder.com/120x120?text=Gucci" },
  { id: 3, name: "Chanel Bleu", brand: "Chanel", category: "Fresh", price: 5200, stock: 10, image: "https://via.placeholder.com/120x120?text=Chanel" },
  { id: 4, name: "Versace Eros", brand: "Versace", category: "Aromatic", price: 4700, stock: 8, image: "https://via.placeholder.com/120x120?text=Versace" },
];

const ViewAllProducts = () => {
  const [products] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h2 className="seller-products-title">My Products</h2>
      <input
        type="text"
        className="seller-products-search"
        placeholder="Search by name, brand, or category..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="seller-products-table-wrapper">
        <table className="seller-products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price (₹)</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr><td colSpan="6" style={{textAlign:'center',color:'#c44536'}}>No products found.</td></tr>
            ) : (
              filteredProducts.map(product => (
                <tr key={product.id} >
                  <td><img src={product.image} alt={product.name} className="seller-product-image" /></td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>₹{product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewAllProducts
