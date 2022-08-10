import React from "react";

function Products() {
  return (
    <div className="shop">
      <div className="container-full-half">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 col-xl-2">
            <div className="shop-sidebar">
              <div className="shop-sidebar__content">
                <div className="shop-sidebar__section -categories">
                  <div
                    className="section-title -style1 -medium"
                    style={{ marginBottom: "1.875em" }}
                  >
                    <h2>Categories</h2>
                    <img
                      src="/app/assets/images/introduction/IntroductionOne/content-deco.png"
                      alt="Decoration"
                    />
                  </div>
                  <ul>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Eyes</a>
                    </li>
                    <li>
                      <a href="#">Face</a>
                    </li>
                    <li>
                      <a href="#">Lips</a>
                    </li>
                    <li>
                      <a href="#">Set</a>
                    </li>
                  </ul>
                </div>
                <div className="shop-sidebar__section -refine">
                  <div
                    className="section-title -style1 -medium"
                    style={{ marginBottom: "1.875em" }}
                  >
                    <h2>Refine Search</h2>
                    <img
                      src="/app/assets/images/introduction/IntroductionOne/content-deco.png"
                      alt="Decoration"
                    />
                  </div>
                  <div className="shop-sidebar__section__item">
                    <h5>Brand</h5>
                    <ul>
                      <li>
                        <label htmlFor="brand-0">
                          <input type="checkbox" name="Gucci" id="brand-0" />
                          Gucci
                        </label>
                      </li>
                      <li>
                        <label htmlFor="brand-1">
                          <input type="checkbox" name="Dolce" id="brand-1" />
                          Dolce
                        </label>
                      </li>
                      <li>
                        <label htmlFor="brand-2">
                          <input type="checkbox" name="H&amp;M" id="brand-2" />
                          H&amp;M
                        </label>
                      </li>
                      <li>
                        <label htmlFor="brand-3">
                          <input type="checkbox" name="Kenzo" id="brand-3" />
                          Kenzo
                        </label>
                      </li>
                      <li>
                        <label htmlFor="brand-4">
                          <input type="checkbox" name="Prada" id="brand-4" />
                          Prada
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-sidebar__section__item">
                    <h5>Price</h5>
                    <ul>
                      <li>
                        <label htmlFor="price-0">
                          <input
                            type="checkbox"
                            name="$0.00 - $25.00"
                            id="price-0"
                          />
                          $0.00 - $25.00
                        </label>
                      </li>
                      <li>
                        <label htmlFor="price-1">
                          <input
                            type="checkbox"
                            name="$25.00 - $50.00"
                            id="price-1"
                          />
                          $25.00 - $50.00
                        </label>
                      </li>
                      <li>
                        <label htmlFor="price-2">
                          <input
                            type="checkbox"
                            name="$50.00 - $75.00"
                            id="price-2"
                          />
                          $50.00 - $75.00
                        </label>
                      </li>
                      <li>
                        <label htmlFor="price-3">
                          <input
                            type="checkbox"
                            name="$75.00 - $100.00"
                            id="price-3"
                          />
                          $75.00 - $100.00
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9 col-xl-10">
            <div className="shop-header">
              <div className="shop-header__view">
                <div className="shop-header__view__icon">
                  <a className="active" href="#">
                    <i className="fas fa-th"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-bars"></i>
                  </a>
                </div>
                <h5 className="shop-header__page">Shop Fullwidth 4 Columns</h5>
              </div>
              <select className="customed-select" name="#">
                <option value="az">A to Z</option>
                <option value="za">Z to A</option>
                <option value="low-high">Low to High Price</option>
                <option value="high-low">High to Low Price</option>
              </select>
            </div>
            <div className="shop-products">
              <div className="shop-products__gird">
                <div className="row mx-n1 mx-xl-n3">
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type">
                        <h5 className="-new">New</h5>
                      </div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/1.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/2.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">eyes</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          The expert mascaraa
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$35.00</h5>
                          <div className="product-colors">
                            <div
                              className="product-colors__item"
                              style={{ backgroundColor: "#8B0000" }}
                            ></div>
                            <div
                              className="product-colors__item"
                              style={{ backgroundColor: "#4169E1" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/2.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/3.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">eyes</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Velvet Melon High Intensity
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$38.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type">
                        <h5 className="-sale">-15%</h5>
                      </div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/3.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/4.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">eyes</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Leather shopper bag
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$30.00</h5>
                          <h5 className="product-price--discount">$35.00</h5>
                          <div className="product-colors">
                            <div
                              className="product-colors__item"
                              style={{ backgroundColor: "#8B0000" }}
                            ></div>
                            <div
                              className="product-colors__item"
                              style={{ backgroundColor: "#4169E1" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/4.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/5.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">eyes</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Luxe jewel lipstick
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$38.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type">
                        <h5 className="-sale">-50%</h5>
                      </div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/5.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/6.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">face</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Penpoint seamless beauty
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$20.00</h5>
                          <h5 className="product-price--discount">$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/7.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/8.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">face</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          The Sneaky lips
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$38.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/8.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/9.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">face</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          White Facial Cream
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$38.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/9.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/10.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">face</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Orange Massage Cream
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$55.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/10.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/11.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">lips</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Valinta Fairness Massage Cream
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$27.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/11.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/12.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">lips</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Massage Cream Cucumber
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$16.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/12.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/13.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">lips</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Matte Walnut &amp; Bamboo Scrub
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$32.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-xl-3 px-1 px-xl-3">
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <a
                          className="product-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/13.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/14.png"
                            alt="Product image"
                          />
                        </a>
                        <div className="product-thumb__actions">
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-atc"
                              href="#"
                            >
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round product-qv"
                              href="#"
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                          </div>
                          <div className="product-btn">
                            <a
                              className="btn -white product__actions__item -round"
                              href="#"
                            >
                              <i className="fas fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header">
                          <div className="product-category">lips</div>
                          <div className="rate">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <a
                          className="product-name"
                          href="/shop/product-detail.html"
                        >
                          Castor Oil BP
                        </a>
                        <div className="product-content__footer">
                          <h5 className="product-price--main">$24.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-products__list">
                <div className="row mx-n1 mx-xl-n3">
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type">
                          <h5 className="-new">New</h5>
                        </div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/1.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/2.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">eyes</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            The expert mascaraa
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$35.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/2.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/3.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">eyes</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Velvet Melon High Intensity
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$38.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type">
                          <h5 className="-sale">-15%</h5>
                        </div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/3.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/4.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">eyes</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Leather shopper bag
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$30.00</h5>
                              <h5 className="product-price--discount">
                                $35.00
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/4.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/5.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">eyes</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Luxe jewel lipstick
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$38.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type">
                          <h5 className="-sale">-50%</h5>
                        </div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/5.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/6.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">face</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Penpoint seamless beauty
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$20.00</h5>
                              <h5 className="product-price--discount">
                                $40.00
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/7.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/8.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">face</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            The Sneaky lips
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$38.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/8.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/9.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">face</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            White Facial Cream
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$38.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/9.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/10.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">face</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Orange Massage Cream
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$55.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/10.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/11.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">lips</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Valinta Fairness Massage Cream
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$27.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/11.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/12.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">lips</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Massage Cream Cucumber
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$16.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/12.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/13.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">lips</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Matte Walnut &amp; Bamboo Scrub
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$32.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 px-1 px-xl-3">
                    <div className="product-list">
                      <div className="product-list-thumb">
                        <div className="product-type"></div>
                        <a
                          className="product-list-thumb__image"
                          href="/shop/product-detail.html"
                        >
                          <img
                            src="/app/assets/images/product/13.png"
                            alt="Product image"
                          />
                          <img
                            src="/app/assets/images/product/14.png"
                            alt="Product image"
                          />
                        </a>
                      </div>
                      <div className="product-list-content">
                        <div className="product-list-content__top">
                          <div className="product-category__wrapper">
                            <h5 className="product-category">lips</h5>
                            <div className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <a
                            className="product-name"
                            href="/shop/product-detail.html"
                          >
                            Castor Oil BP
                          </a>
                          <div className="product__price">
                            <div className="product__price__wrapper">
                              <h5 className="product-price--main">$24.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="product-list-content__bottom">
                          <p className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque ipsa fugiat accusantium reiciendis rem
                            doloribus iste doloremque
                          </p>
                          <div className="product-actions">
                            <div className="product-btn">
                              <div className="add-to-cart ">
                                <a className="btn -round -red" href="#">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                                <h5>Add to cart</h5>
                              </div>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-eye"></i>
                              </a>
                            </div>
                            <div className="product-btn">
                              <a
                                className="btn -white product__actions__item -round"
                                href="#"
                              >
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="paginator">
              <li className="page-item active">
                <button className="page-link">1</button>
              </li>
              <li className="page-item">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">
                  <i className="far fa-angle-right"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
