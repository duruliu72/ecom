const Modal = () => {
  return (
    <div className="modal" id="quick-view-modal">
      <div className="product-quickview">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="product-detail__slide-one">
              <div className="slider-wrapper">
                <div className="slider-item">
                  <img
                    src="/app/assets/images/product/1.png"
                    alt="Product image"
                  />
                </div>
                <div className="slider-item">
                  <img
                    src="/app/assets/images/product/2.png"
                    alt="Product image"
                  />
                </div>
                <div className="slider-item">
                  <img
                    src="/app/assets/images/product/3.png"
                    alt="Product image"
                  />
                </div>
                <div className="slider-item">
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
              <div className="product-detail__content__header">
                <h5>eyes</h5>
                <h2>The expert mascaraa</h2>
              </div>
              <div className="product-detail__content__header__comment-block">
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
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
                    <div className="quantity-controller__btn -descrease">-</div>
                    <div className="quantity-controller__number">2</div>
                    <div className="quantity-controller__btn -increase">+</div>
                  </div>
                  <div className="add-to-cart -dark">
                    <a className="btn -round -red" href="#">
                      <i className="fas fa-shopping-bag"></i>
                    </a>
                    <h5>Add to cart</h5>
                  </div>
                  <div className="product-detail__controler__actions"></div>
                  <a className="btn -round -white" href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
