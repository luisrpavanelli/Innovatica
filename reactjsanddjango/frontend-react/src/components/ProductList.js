import React, { useEffect, useState } from 'react';
import './styles.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // HTTP find products of backend
        const response = await fetch('/api/produtos/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          // Show message error find of products
          console.error('Falha ao buscar produtos');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.nome}</h3>
            <p>Status: {product.status}</p>
            {/* Show details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
