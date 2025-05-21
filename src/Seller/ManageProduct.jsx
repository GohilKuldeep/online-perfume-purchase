import React, { useState } from 'react';
import "./Css/ManageProduct.css";

const initialProducts = [
  { id: 1, name: "Dior Sauvage", brand: "Dior", price: 4500, stock: 20, category: "Woody", image: "https://via.placeholder.com/120x120?text=Dior" },
  { id: 2, name: "Gucci Bloom", brand: "Gucci", price: 3800, stock: 15, category: "Floral", image: "https://via.placeholder.com/120x120?text=Gucci" },
  { id: 3, name: "Chanel Bleu", brand: "Chanel", price: 5200, stock: 10, category: "Fresh", image: "https://via.placeholder.com/120x120?text=Chanel" },
  { id: 4, name: "Versace Eros", brand: "Versace", price: 4700, stock: 8, category: "Aromatic", image: "https://via.placeholder.com/120x120?text=Versace" },
];

const ManageProduct = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for product #${id} coming soon!`);
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h2 className="manage-products-title">Manage Products</h2>
      <input
        type="text"
        className="manage-products-search"
        placeholder="Search by name, brand, or category..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="manage-products-table-wrapper">
        <table className="manage-products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price (₹)</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr><td colSpan="7" style={{textAlign:'center',color:'#c44536'}}>No products found.</td></tr>
            ) : (
              filteredProducts.map(product => (
                <tr key={product.id}>
                  <td><img src={product.image} alt={product.name} className="manage-product-image" /></td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.category || '-'}</td>
                  <td>₹{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button className="manage-edit-btn" onClick={() => handleEdit(product.id)}>Edit</button>
                    <button className="manage-delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageProduct;
