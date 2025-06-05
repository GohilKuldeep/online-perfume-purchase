import React from 'react'
import './Css/ViewAllProducts.css'

const products = [
  {
    id: 1,
    name: 'Floral Essence',
    brand: 'AromaLux',
    price: 49.99,
    stock: 20,
    category: 'Floral',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Citrus Splash',
    brand: 'FreshScents',
    price: 39.99,
    stock: 15,
    category: 'Citrus',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Woody Wonder',
    brand: 'NatureNotes',
    price: 59.99,
    stock: 10,
    category: 'Woody',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Woody Wonder',
    brand: 'NatureNotes',
    price: 59.99,
    stock: 10,
    category: 'Woody',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  }
]

const ViewAllProducts = () => {
  return (
    <div>
      <div className="products-grid-admin">
        {products.map(product => (
          <div className="product-card-admin" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info-admin">
              <h3>{product.name}</h3>
              <p className="brand">{product.brand}</p>
              <div className="category-box-admin">{product.category}</div>
              <p className="seller-admin">{product.brand}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="remove-btn-admin">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewAllProducts
