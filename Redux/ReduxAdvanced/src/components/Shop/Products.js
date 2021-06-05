import ProductItem from "./ProductItem";
import classes from "./Products.module.css";


const DUMMY_PRODUCT = [
  {
    title: "First",
    price: 6,
    description: "This is first product",
  },

  {
    title: "Second",
    price: 8,
    description: "This is Second product",
  },

  {
    title: "Third",
    price: 10,
    description: "This is Third product",
  },
];


const Products = (props) => {
  const items = DUMMY_PRODUCT.map((item) => {
    return <ProductItem
      key={item.title}
      title={item.title}
      price={item.price}
      description={item.description}
    />;
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{items}</ul>
    </section>
  );
};

export default Products;
