import ProductCard from './ProductCard';
import { products } from '../data/products';
import { examples } from '../data/examples';
import './ProductsSection.css';

const ProductsSection = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Обзор инструментов</h2>
          <p>Выберите инструмент, который поможет оптимизировать вашу работу</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              examplesData={examples}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

