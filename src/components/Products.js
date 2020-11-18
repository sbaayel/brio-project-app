import React, { Component } from 'react';
import currency from "../utility";

export default class Products extends Component {

  render() {
    return (
      <div>
        <ul className="main-products">
          {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a href={"#" + product._id}>
                    <img src={product.image} alt={product.title}></img>

                    <p>
                      {product.title}
                    </p>
                  </a>

                  <div className="price">
                  <div>{currency(product.price)}</div>

                    <button className="button">Add To Cart</button>
                  </div>
                </div>
              </li>
            
          ))};

        </ul>
      </div>
    )
  }
}
