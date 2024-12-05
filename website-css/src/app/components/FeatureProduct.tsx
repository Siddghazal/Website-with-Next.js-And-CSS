import Product from "./Product";


const productDeta = [
  {
    img: "/product-1.jpg",
    name: "Organic Bartlett Pear",
    price: "$35.99",
  },
  {
    img: "/product-2.jpg",
    name: "Organic Strawberries,1 lb",
    price: "$79.99",
  },
  {
    img: "/product-3.jpg",
    name: "Blueberry Organic,6 Ounce ",
    price: "$929.00",
  },
  {
    img: "/product-4.jpg",
    name: " Kiwi Organic 1 Each",
    price: "$779.99",
  },
  {
    img: "/product-5.jpg",
    name: "Organic Banana",
    price: "$399.20",
  },
  {
    img: "/product-6.jpg",
    name: "McCormick Gourmet Orange",
    price: "$35.99",
  },
  {
    img: "/product-7.jpg",
    name: "Organic Broccoli,1 lb",
    price: "$79.50",
  },
  {
    img: "/product-8.jpg",
    name: "Organic Fruit Baskit",
    price: "$35.99",
  },
  {
    img: "/product-9.jpg",
    name: "Dried pineapple Fruit Bar",
    price: "$729.50",
  },
  {
    img: "/product-10.jpg",
    name: "Holiday Nuts Gift Basket",
    price: "$399.99",
  },
];

const FeatureProduct = () => {
  return (
    <div className="feature-product">
      <div className="feature-product-header">
        <div className="header-title">Feature Product</div>
        <div className="header-buttons">
      
          <button className="active-tab">Best Seller</button>
          <button>Most Popular</button>
        </div>
      </div>

      <div className="product-grid">
        {productDeta.map((product) => (
          <Product
            key={product.name}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
