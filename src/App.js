import React from 'react';
import data from "./data.json";
import Products from "./components/Products.js";
// App.js

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products
    };
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
              <Products products={this.state.products}/>
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
