import React from 'react'
import Product from './Product'

const productData = [
    {
        img: "/product-1.jpg",
        name: "Organic Bartlett Pear",
        price: "$35.99",
    },
    {
        img: "/product-7.jpg",
        name: "Organic Broccoli, 1 lb",
        price: "$79.50",
    },
    {
        img: "/product-8.jpg",
        name: "Organic Fruit Basket",
        price: "$35.99",
    },
    {
        img: "/product-9.jpg",
        name: "Dried Pineapple Fruit Bar",
        price: "$729.50",
    },
]

const Discount = () => {
  return (
    <div className="discount-section">
        <div className="container">
            <h2 className="discount-title">Discount Product</h2>

            {/* Grid Layout */}
            <div className="discount-grid">
                <div className="product-card">
                    <img src="discount-bg.jpg" alt="discount_bg" />
                    <div className="product-card-overlay">
                        <div className="product-card-text">
                            <h2 className="product-card-title">$20</h2>
                            <div>
                                <p className='text-1'>Under Products</p>
                                <p className='text-2'>Limited Time Only</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {productData.map((product) => (
                    <Product
                        key={product.name}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Discount
