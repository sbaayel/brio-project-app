import React, { Component } from 'react'
import currency from "../utility";
import Fade from "react-reveal/Fade";


export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: false,
      name: "",
      address: "",
      email: ""
    };
  };
  
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      cartItem: this.props.cartItem
    };
    this.props.createOrder(order);
  };


  render() {
    const {cartItem} = this.props;
    return (
      <div>
        {cartItem.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) :(
            <div className="cart cart-header">You have {cartItem.length } in cart{""}</div>
          )}

        <div className="cart">
          <Fade left cascade>
        <ul className="cart-item">
          {cartItem.map(item =>(
            <li key={item._id}>
              <div>
                <img src={item.image} alt={item.title}></img>
              </div>
              <div>
                <div>{cartItem.title}</div>
                <div className="right">
                  {currency(item.price)} x {item.count} {""}
                <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
            </ul>
            </Fade>
        </div>
        {cartItem.length !== 0 && (
          <div>
          <div className="cart">
          <div className="total">
            <div>
              Total:{" "}
            {currency(
              cartItem.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </div>
              <button className="button primary" onClick={() => {
                this.setState({showCheckout: true})
            }}>Proceed</button>
          </div>
          </div>
            {this.state.showCheckout && (
              <Fade right cascade>
          <div className="cart">
          <form onSubmit={this.createOrder}>
                  <ul className="form-container">
                    <li>
                  <lable>Name</lable>
                      <input
                      name="name"
                      type="text"
                      required
                      onChange={this.handleInput}
                      ></input>
                    </li>

                    <li>
                  <lable>Email</lable>
                      <input
                      name="email"
                      type="email"
                      required
                      onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                  <lable>Address</lable>
                      <input
                      name="address"
                      type="text"
                      required
                      onChange={this.handleInput}
                      ></input>
                    </li>
                    <li >
                      <button class="button primary" type="submit">Checkout</button>
                    </li>
                </ul>
                </form>
                </div>
                </Fade>
            )}
          </div>
        )}
      </div>
      
    );
  }
}
