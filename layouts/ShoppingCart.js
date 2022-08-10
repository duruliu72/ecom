const ShoppingCart = () => {
  return (
    <div
      className="drawer drawer-right slide"
      id="cart-drawer"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="drawer-demo-title"
      aria-hidden="true"
    >
      <div className="drawer-content drawer-content-scrollable" role="document">
        <div className="drawer-body">
          <div className="cart-sidebar">
            <div className="cart-items__wrapper">
              <h2>Shopping cart</h2>
              <div className="cart-item">
                <div className="cart-item__image">
                  <img
                    src="/app/assets/images/product/1.png"
                    alt="Product image"
                  />
                </div>
                <div className="cart-item__info">
                  <a href="/product-detail.html">The expert mascaraa</a>
                  <h5>$35.00</h5>
                  <p>
                    Quantity:<span> 1</span>
                  </p>
                </div>
                <a className="cart-item__remove" href="#">
                  <i className="fal fa-times"></i>
                </a>
              </div>
              <div className="cart-item">
                <div className="cart-item__image">
                  <img
                    src="/app/assets/images/product/3.png"
                    alt="Product image"
                  />
                </div>
                <div className="cart-item__info">
                  <a href="/product-detail.html">Velvet Melon High Intensity</a>
                  <h5>$38.00</h5>
                  <p>
                    Quantity:<span> 1</span>
                  </p>
                </div>
                <a className="cart-item__remove" href="#">
                  <i className="fal fa-times"></i>
                </a>
              </div>
              <div className="cart-items__total">
                <div className="cart-items__total__price">
                  <h5>Total</h5>
                  <span>$73.00</span>
                </div>
                <div className="cart-items__total__buttons">
                  <a className="btn -dark" href="cart.html">
                    View cart
                  </a>
                  <a className="btn -red" href="checkout.html">
                    Checkout
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

export default ShoppingCart;
