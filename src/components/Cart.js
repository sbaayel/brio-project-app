import React, { Component } from 'react'
import currency from "../utility";


export default class Cart extends Component {
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
        </div>
        {cartItem.length !== 0 && (
          <div className="cart">
          <div className="total">
            <div>
              Total:{" "}
            {currency(
              cartItem.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </div>
            <button className="button primary">Checkout</button>
          </div>
        </div>
        )}
      </div>
      
    );
  }
}
