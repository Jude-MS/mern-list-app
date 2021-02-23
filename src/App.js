import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import './App.css';

function App() {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/products');

      const responseData = await response.json();

      setLoadedProducts(responseData.products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <React.Fragment>
            <main>
              {isLoading && <p className="loader">Loading...</p>}
              {!isLoading && <ProductList items={loadedProducts} />}
            </main>
          </React.Fragment>
        </Route>
        <Route path="/detail/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
