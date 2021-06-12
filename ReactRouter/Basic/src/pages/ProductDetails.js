import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()
  return (
    <section>
      <h2>This is product details page.</h2>
      <p>{params.productID}</p>
    </section>
  );
};

export default ProductDetails;
