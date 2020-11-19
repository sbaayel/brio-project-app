import React from 'react';
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter.js";
// App.js

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

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
          a.price > b.price ? 1 : -1:
          
        sort === "highest" ?
          a.price < b.price ? 1 : -1 :
            
          a._id < b._id ? 1: -1
      )
    }))
  }

  

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
              <Products products={this.state.products}></Products>
            </div>

            <div className="sidebar">
               cart items
            </div>

          </div>
        </main>
        <footer>All rights reserved </footer>
      </div>
    );
  }
}

export default App;
