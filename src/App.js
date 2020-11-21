import React from 'react';
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter.js";
import Cart from './components/Cart';
// App.js

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      sort: "",
      cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []
    };
  };

  createOrder = (order) => {
    alert(order.name);
  };

  removeFromCart = (product) => {
    const cartItem = this.state.cartItem.slice();
    this.setState({
      cartItem: cartItem.filter(x => x._id !== product._id)
    });
    localStorage.setItem("cartItem", JSON.stringify(cartItem.filter(x => x._id !== product._id)));
  };

  addToCart = (product) => {
    const cartItem = this.state.cartItem.slice();
    let alreadyInCart = false;
    cartItem.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      };
    });
    if (!alreadyInCart) {
      cartItem.push({ ...product, count: 1 });
      
    };
    this.setState({ cartItem });
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  };

  // Sort method
  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest" ?
            a.price > b.price ? 1 : -1 :
          
            sort === "highest" ?
              a.price < b.price ? 1 : -1 :
            
              a._id < b._id ? 1 : -1
        )
    }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/">Brio Shop</a>
        </header>

        <main>
          <div className="main-container">
            <div className="content">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                sortProducts={this.sortProducts}
              ></Filter> 
              <Products products={this.state.products} addToCart={this.addToCart}></Products>
            </div>

            <div className="sidebar">
              <Cart
                cartItem={this.state.cartItem}
                removeFromCart={this.removeFromCart}
                createOrder = {this.createOrder}
              />
            </div>

          </div>
        </main>
        <footer>All rights reserved </footer>
      </div>
    );
  };
};

export default App;
