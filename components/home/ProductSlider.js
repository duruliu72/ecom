const ProductSlider = () => {
  return (
    <div className="product-slide">
      <div className="container">
        <div
          className="section-title -center"
          style={{ marginBottom: "1.875em" }}
        >
          <h2>Beauty Products</h2>
          <img
            src="/app/assets/images/introduction/IntroductionOne/content-deco.png"
            alt="Decoration"
          />
        </div>
        <div className="product-slider">
          <div className="product-slide__wrapper">
            <div className="product-slide__item">
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
                  <a className="product-name" href="/shop/product-detail.html">
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
            <div className="product-slide__item">
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
                  <a className="product-name" href="/shop/product-detail.html">
                    Velvet Melon High Intensity
                  </a>
                  <div className="product-content__footer">
                    <h5 className="product-price--main">$38.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-slide__item">
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
                  <a className="product-name" href="/shop/product-detail.html">
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
            <div className="product-slide__item">
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
                  <a className="product-name" href="/shop/product-detail.html">
                    Luxe jewel lipstick
                  </a>
                  <div className="product-content__footer">
                    <h5 className="product-price--main">$38.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-slide__item">
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
                  <a className="product-name" href="/shop/product-detail.html">
                    Penpoint seamless beauty
                  </a>
                  <div className="product-content__footer">
                    <h5 className="product-price--main">$20.00</h5>
                    <h5 className="product-price--discount">$40.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-slide__item">
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
                  <a className="product-name" href="/shop/product-detail.html">
                    The Sneaky lips
                  </a>
                  <div className="product-content__footer">
                    <h5 className="product-price--main">$38.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-slide__item">
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
                  <a className="product-name" href="/shop/product-detail.html">
                    White Facial Cream
                  </a>
                  <div className="product-content__footer">
                    <h5 className="product-price--main">$38.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-slide__item">
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
                  <a className="product-name" href="/shop/product-detail.html">
                    Orange Massage Cream
                  </a>
                  <div className="product-content__footer">
                    <h5 className="product-price--main">$55.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              className="btn -transparent -underline"
              href="shop-fullwidth-4col.html"
            >
              View all product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
