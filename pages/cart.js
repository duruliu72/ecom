import React from "react";
import { useRouter } from "next/router";
import Layout from "../layouts/Layout";
import RelatedProduct from "../components/productdetails/RelatedProduct";
import InstagramSlider from "../components/productdetails/InstagramSlider";
function cart() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <h2>Cart</h2>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li className="active">Cart</li>
          </ul>
        </div>
      </div>
      <div className="shop">
        <div className="container">
          <div className="cart">
            <div className="container">
              <div className="cart__table">
                <div className="cart__table__wrapper">
                  <table>
                    <colgroup>
                      <col style={{ width: "40%" }} />
                      <col style={{ width: "17%" }} />
                      <col style={{ width: "17%" }} />
                      <col style={{ width: "17%" }} />
                      <col style={{ width: "9%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="cart-product">
                            <div className="cart-product__image">
                              <img
                                src="/app/assets/images/product/1.png"
                                alt="Product image"
                              />
                            </div>
                            <div className="cart-product__content">
                              <h5>eyes</h5>
                              <a href="product-detail.html">
                                The expert mascaraa
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>The expert mascaraa</td>
                        <td>
                          <div className="quantity-controller ">
                            <div className="quantity-controller__btn -descrease">
                              -
                            </div>
                            <div className="quantity-controller__number">1</div>
                            <div className="quantity-controller__btn -increase">
                              +
                            </div>
                          </div>
                        </td>
                        <td>35.00</td>
                        <td>
                          <a href="#">
                            <i className="fal fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cart-product">
                            <div className="cart-product__image">
                              <img
                                src="/app/assets/images/product/2.png"
                                alt="Product image"
                              />
                            </div>
                            <div className="cart-product__content">
                              <h5>eyes</h5>
                              <a href="product-detail.html">
                                Velvet Melon High Intensity
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>Velvet Melon High Intensity</td>
                        <td>
                          <div className="quantity-controller ">
                            <div className="quantity-controller__btn -descrease">
                              -
                            </div>
                            <div className="quantity-controller__number">1</div>
                            <div className="quantity-controller__btn -increase">
                              +
                            </div>
                          </div>
                        </td>
                        <td>38.00</td>
                        <td>
                          <a href="#">
                            <i className="fal fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cart-product">
                            <div className="cart-product__image">
                              <img
                                src="/app/assets/images/product/3.png"
                                alt="Product image"
                              />
                            </div>
                            <div className="cart-product__content">
                              <h5>eyes</h5>
                              <a href="product-detail.html">
                                Leather shopper bag
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>Leather shopper bag</td>
                        <td>
                          <div className="quantity-controller ">
                            <div className="quantity-controller__btn -descrease">
                              -
                            </div>
                            <div className="quantity-controller__number">1</div>
                            <div className="quantity-controller__btn -increase">
                              +
                            </div>
                          </div>
                        </td>
                        <td>35.00</td>
                        <td>
                          <a href="#">
                            <i className="fal fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="cart__table__footer">
                  <a href="shop-fullwidth-4col.html">
                    <i className="fal fa-long-arrow-left"></i>Continue Shopping
                  </a>
                  <a href="#">
                    <i className="fal fa-trash"></i>Clear Shopping Cart
                  </a>
                </div>
              </div>
              <div className="cart__total">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <div className="cart__total__discount">
                      <p>Enter coupon code. It will be applied at checkout.</p>
                      <div className="input-validator">
                        <form action="">
                          <input
                            type="text"
                            name="discountCode"
                            placeholder="Your code here"
                          />
                          <button className="btn -dark">Apply</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="cart__total__content">
                      <h3>Cart</h3>
                      <table>
                        <tbody>
                          <tr>
                            <th>Subtotal</th>
                            <td>$169.00</td>
                          </tr>
                          <tr>
                            <th>Total</th>
                            <td className="final-price">$169.00</td>
                          </tr>
                        </tbody>
                      </table>
                      <a className="btn -dark" href="/checkout.html">
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <RelatedProduct /> */}
      <InstagramSlider />
    </Layout>
  );
}

export default cart;
