import React, { useState } from 'react';
import './App.css';
import Products from '../Products/Products';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Layout from "../Layout/Layout";
import SingleProduct from "../SingleProduct/SingleProduct";
import PRODUCTS from "./PRODUCTS.json";
import ThemeContext from '../../contexts/ThemeContext'
import themeConfig from '../../configs/theme'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => {
  const [activeTheme, setActiveTheme] = useState('green')
  return (
    <ThemeContext.Provider
      value={{
        theme: themeConfig[activeTheme],
        setActiveTheme,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Products data={PRODUCTS} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/product/:id">
                <SingleProduct />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
