import React, { Component } from 'react';
import currency from "../utility";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  };

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
        <ul className="main-products">
          {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                    <img src={product.image} alt={product.title}></img>

                    <p>
                      {product.title}
                    </p>
                  </a>

                  <div className="price">
                  <div>
                    {currency(product.price)}
                  </div>

                  <button
                    className="button primary"
                    onClick={() => {
                      this.props.addToCart(product)
                    }}
                    
                  >
                    Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            
          ))}

          </ul>
        </Fade>
        {
          product && (
            <Modal isOpen={true} onRequestClose={this.closeModal}>
              <Zoom>
                <button className="close-modal" onClick={this.closeModal}>x</button>
                <div>
                  Modal
                </div>
                <div className="product-details">
                  <img src={product.image} alt={product.title}></img>
                  <div className="product-description">
                    <p>
                      <strong>
                      {product.title}
                    </strong>
                    </p>
                    <p>
                      {product.description}
                    </p>
                    <div className="product-price">
                      <div>{currency(product.price)}</div>
                      <button className="button primary"
                        onClick={() => {
                          this.props.addToCart(product);
                          this.closeModal();
                      }}
                      >Add To Cart</button>
                    </div>
                    
                  </div>
                </div>
              </Zoom>
            </Modal>
          )
        }
      </div>
    )
  }
}
