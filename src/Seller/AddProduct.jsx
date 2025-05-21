import React from 'react'
import './Css/AddProduct.css'

const AddProduct = () => {
  return (
    <div>
      <h2>Add New Product</h2>
      <form className="add-product-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input type="text" id="productName" name="productName" placeholder="Enter product name" required />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand Name</label>
            <input type="text" id="brand" name="brand" placeholder="Enter brand name" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Enter product description" required></textarea>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="url" id="imageUrl" name="imageUrl" placeholder="Enter image URL" required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" placeholder="Enter category" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input type="number" id="price" name="price" placeholder="Enter price" min="0" step="0.01" required />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input type="number" id="stock" name="stock" placeholder="Enter stock quantity" min="0" required />
          </div>
        </div>
        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
