import React from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/Layout";
import RelatedProduct from "../../components/productdetails/RelatedProduct";
import InstagramSlider from "../../components/productdetails/InstagramSlider";
function ProductDetail() {
  const router = useRouter();
  const { productid } = router.query;
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <h2>Shop</h2>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li className="active">Product Detail</li>
          </ul>
        </div>
      </div>
      <div className="shop">
        <div className="container">
          <div className="product-detail__wrapper">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="product-detail__slide-two">
                  <div className="product-detail__slide-two__big">
                    <div className="slider__item">
                      <img
                        src="/app/assets/images/product/1.png"
                        alt="Product image"
                      />
                    </div>
                    <div className="slider__item">
                      <img
                        src="/app/assets/images/product/2.png"
                        alt="Product image"
                      />
                    </div>
                    <div className="slider__item">
                      <img
                        src="/app/assets/images/product/3.png"
                        alt="Product image"
                      />
                    </div>
                    <div className="slider__item">
                      <img
                        src="/app/assets/images/product/4.png"
                        alt="Product image"
                      />
                    </div>
                  </div>
                  <div className="product-detail__slide-two__small">
                    <div className="slider__item">
                      <img
                        src="/app/assets/images/product/1.png"
                        alt="Product image"
                      />
                    </div>
                    <div className="slider__item">
                      <img
                        src="/app/assets/images/product/2.png"
                        alt="Product image"
                      />
                    </div>
                    <div className="slider__item">
                      <img
                        src="/app/assets/images/product/3.png"
                        alt="Product image"
                      />
                    </div>
                    <div className="slider__item">
                      <img
                        src="/app/assets/images/product/4.png"
                        alt="Product image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="product-detail__content">
                  <div className="product-detail__content">
                    <div className="product-detail__content__header">
                      <h5>eyes</h5>
                      <h2>The expert mascaraa</h2>
                    </div>
                    <div className="product-detail__content__header__comment-block">
                      <div className="rate">
                        <i className="fas fa-star"></i>
                        <i
                          className="fas
                          fa-star"
                        ></i>
                        <i className="fas fa-star"></i>
                        <i
                          className="fas
                          fa-star"
                        ></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p>03 review</p>
                      <a href="#">Write a reviews</a>
                    </div>
                    <h3>$35.00</h3>
                    <div className="divider"></div>
                    <div className="product-detail__content__footer">
                      <ul>
                        <li>Brand:gucci</li>
                        <li>Product code: PM 01</li>
                        <li>Reward point: 30</li>
                        <li>Availability: In Stock</li>
                      </ul>
                      <div className="product-detail__colors">
                        <span>Color:</span>
                        <div
                          className="product-detail__colors__item"
                          style={{ backgroundColor: "#8B0000" }}
                        ></div>
                        <div
                          className="product-detail__colors__item"
                          style={{ backgroundColor: "#4169E1" }}
                        ></div>
                      </div>
                      <div className="product-detail__controller">
                        <div className="quantity-controller -border -round">
                          <div className="quantity-controller__btn -descrease">
                            -
                          </div>
                          <div className="quantity-controller__number">2</div>
                          <div className="quantity-controller__btn -increase">
                            +
                          </div>
                        </div>
                        <div className="add-to-cart -dark">
                          <a
                            className="btn -round
                            -red"
                            href="#"
                          >
                            <i className="fas fa-shopping-bag"></i>
                          </a>
                          <h5>Add to cart</h5>
                        </div>
                        <div className="product-detail__controler__actions"></div>
                        <a className="btn -round -white" href="#">
                          <i
                            className="fas
                            fa-heart"
                          ></i>
                        </a>
                      </div>
                      <div className="divider"></div>
                      <div className="product-detail__content__tab">
                        <ul className="tab-content__header">
                          <li
                            className="tab-switcher"
                            data-tab-index="0"
                            tabIndex="0"
                          >
                            Description
                          </li>
                          <li
                            className="tab-switcher"
                            data-tab-index="1"
                            tabIndex="0"
                          >
                            Shipping & Returns
                          </li>
                          <li
                            className="tab-switcher"
                            data-tab-index="2"
                            tabIndex="0"
                          >
                            Reviews ( 03 )
                          </li>
                        </ul>
                        <div id="allTabsContainer">
                          <div
                            className="tab-content__item -description"
                            data-tab-index="0"
                          >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo viverra maecenas
                              accumsan lacus vel facilisis.
                            </p>
                          </div>
                          <div
                            className="tab-content__item -ship"
                            data-tab-index="1"
                            style={{ display: "none" }}
                          >
                            <h5>
                              <span>Ship to</span>New york
                            </h5>
                            <ul>
                              <li>
                                Standard Shipping on order over 0kg - 5kg.
                                <span>+10.00</span>
                              </li>
                              <li>
                                Heavy Goods Shipping on oder over 5kg-10kg .
                                <span>+20.00</span>
                              </li>
                            </ul>
                            <h5>Delivery &amp; returns</h5>
                            <p>
                              We diliver to over 100 countries around the word.
                              For full details of the delivery options we offer,
                              please view our Delivery information.
                            </p>
                          </div>
                          <div
                            className="tab-content__item -review"
                            data-tab-index="2"
                            style={{ display: "none" }}
                          >
                            <div className="review">
                              <div className="review__header">
                                <div className="review__header__avatar">
                                  <img
                                    src="https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211127989.jpg?quality=90&amp;strip=all&amp;zoom=1&amp;resize=644%2C416&amp;ssl=1"
                                    alt="Reviewer avatar"
                                  />
                                </div>
                                <div className="review__header__info">
                                  <h5>Lionel Messi</h5>
                                  <p>Mar 17, 2020</p>
                                </div>
                                <div className="review__header__rate">
                                  <div className="rate">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i
                                      className="fas
                                      fa-star"
                                    ></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                  </div>
                                </div>
                              </div>
                              <p className="review__content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                              </p>
                              <a className="review__report" href="#">
                                Report as Inappropriate
                              </a>
                            </div>
                            <form>
                              <h5>Write a review</h5>
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  <div className="input-validator">
                                    <input
                                      type="text"
                                      name="name"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="input-validator">
                                    <input
                                      type="text"
                                      name="email"
                                      placeholder="Email"
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="input-validator">
                                    <textarea
                                      name="message"
                                      placeholder="Message"
                                      rows="5"
                                    ></textarea>
                                  </div>
                                  <span className="input-error"></span>
                                </div>
                                <div className="col-12">
                                  <button className="btn -dark">
                                    Write a review
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct />
      <InstagramSlider />
    </Layout>
  );
}

export default ProductDetail;
