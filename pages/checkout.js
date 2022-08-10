import React from "react";
import Layout from "../layouts/Layout";
import InstagramSlider from "../components/productdetails/InstagramSlider";
function checkout() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <h2>Checkout</h2>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li className="active">Checkout</li>
          </ul>
        </div>
      </div>
      <div className="shop">
        <div className="container">
          <div className="checkout">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <form action="">
                    <div className="checkout__form">
                      <div className="checkout__form__contact">
                        <div className="checkout__form__contact__title">
                          <h5 className="checkout-title">
                            Contact information
                          </h5>
                          <p>
                            {" "}
                            Already have an account?<a href="#">Login</a>
                          </p>
                        </div>
                        <div className="input-validator">
                          <input
                            type="text"
                            name="contact"
                            placeholder="Email or mobile phone number"
                          />
                        </div>
                        <label className="checkbox-label" for="subcribe-news">
                          <input
                            type="checkbox"
                            id="subcribe-news"
                            name="subcribeNews"
                          />
                          Keep me up to dateon news and exclusive offers
                        </label>
                      </div>
                      <div className="checkout__form__shipping">
                        <h5 className="checkout-title">Shipping address</h5>
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <div className="input-validator">
                              <label>
                                First name <span>*</span>
                                <input type="text" name="firstName" />
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="input-validator">
                              <label>
                                Last name<span>*</span>
                                <input type="text" name="lastName" />
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-validator">
                              <label>
                                Country<span>*</span>
                                <input type="text" name="country" />
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-validator">
                              <label>
                                Address <span>*</span>
                                <input
                                  type="text"
                                  name="streetAddress"
                                  placeholder="Steet address"
                                />
                                <input
                                  type="text"
                                  name="apartment"
                                  placeholder="Apartment, suite, unite ect ( optinal )"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-validator">
                              <label>
                                Town/City <span>*</span>
                                <input type="text" name="town" />
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-validator">
                              <label>
                                Country/State <span>*</span>
                                <input type="text" name="state" />
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-validator">
                              <label>
                                Postcode/ZIP <span>*</span>
                                <input type="text" name="zip" />
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-validator">
                              <label>
                                Order note
                                <input
                                  type="text"
                                  name="note"
                                  placeholder="Note about your order, e.g, special noe for delivery"
                                />
                              </label>
                            </div>
                          </div>
                          <label className="checkbox-label" for="save">
                            <input id="save" type="checkbox" name="saveInfo" />
                            Save this infomation for next time
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-12 ml-auto">
                      <div className="checkout__total">
                        <h5 className="checkout-title">Your order</h5>
                        <form className="checkout__total__coupon">
                          <h5>Coupon code</h5>
                          <div className="input-validator">
                            <input
                              type="text"
                              placeholder="Your code here"
                              name="coupon"
                            />
                          </div>
                          <a className="btn -dark" href="#">
                            apply
                          </a>
                        </form>
                        <div className="checkout__total__price">
                          <h5>Product</h5>
                          <table>
                            <colgroup>
                              <col style={{ width: "70%" }} />
                              <col style={{ width: "30%" }} />
                            </colgroup>
                            <tbody>
                              <tr>
                                <td>
                                  <span>01 x </span>The expert mascaraa
                                </td>
                                <td>$35.00</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>01 x </span>Velvet Melon High Intensity
                                </td>
                                <td>$38.00</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>01 x </span>Leather shopper bag
                                </td>
                                <td>$35.00</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="checkout__total__price__total-count">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Subtotal</td>
                                  <td>$108.00</td>
                                </tr>
                                <tr>
                                  <td>Total</td>
                                  <td>$108.00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="checkout__total__price__payment">
                            <label className="checkbox-label" for="payment">
                              <input
                                id="payment"
                                type="checkbox"
                                name="payment"
                              />
                              Cheque payment
                            </label>
                            <label className="checkbox-label" htmlfor="paypal">
                              <input
                                id="paypal"
                                type="checkbox"
                                name="paypal"
                              />
                              PayPal
                            </label>
                          </div>
                        </div>
                        <button className="btn -red">Place order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstagramSlider />
    </Layout>
  );
}

export default checkout;
