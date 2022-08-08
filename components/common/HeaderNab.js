import React from "react";

function HeaderNab() {
  return (
    <div className="header -one">
      <div className="top-nav -style-1">
        <div className="container">
          <div className="top-nav__wrapper">
            <div className="top-nav-social">
              <div className="social-icons -white">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      style={{ color: "undefined" }}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      style={{ color: "undefined" }}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/"
                      style={{ color: "undefined" }}
                    >
                      <i className="fab fa-instagram"> </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      style={{ color: "undefined" }}
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="top-nav-promo">
              Free shipping on international orders of $120+
            </p>
            <div className="top-nav-selections">
              <div className="top-nav-selections__item">
                <select
                  className="customed-select -borderless -white"
                  name="cur"
                >
                  <option value="USD">USD</option>
                  <option value="JPY">JPY</option>
                  <option value="VND">VND</option>
                </select>
              </div>
              <div className="top-nav-selections__item">
                <select
                  className="customed-select -borderless -white"
                  name="lang"
                >
                  <option value="EN">ENG</option>
                  <option value="JP">JAP</option>
                  <option value="VI">VIE</option>
                </select>
              </div>
              <div className="top-nav-selections__item">
                <a href="#">Signin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu -style-1">
        <div className="container">
          <div className="menu__wrapper">
            <a className="menu-logo" href="index.html">
              <img src="/app/assets/images/logo.png" alt="Logo" />
            </a>
            <div className="navigator ">
              <ul>
                <li className="relative">
                  <a href="">
                    Home
                    <span className="dropable-icon">
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="">Beauty Salon</a>
                    </li>
                    <li>
                      <a href="homepage2.html">Makeup Salon</a>
                    </li>
                    <li>
                      <a href="homepage3.html">Natural Shop</a>
                    </li>
                    <li>
                      <a href="homepage4.html">Spa Shop</a>
                    </li>
                    <li>
                      <a href="homepage5.html">Mask Shop</a>
                    </li>
                    <li>
                      <a href="homepage6.html">Skincare Shop</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="shop-fullwidth-4col.html">
                    Shop
                    <span className="dropable-icon">
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu -wide">
                    <ul className="dropdown-menu__col">
                      <li>
                        <a href="shop-fullwidth-4col.html">
                          Shop Fullwidth 4 Columns
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-5col.html">
                          Shop Fullwidth 5 Columns
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-left-sidebar.html">
                          Shop Fullwidth Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-right-sidebar.html">
                          Shop Fullwidth Right Sidebar
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown-menu__col">
                      <li>
                        <a href="shop-grid-4col.html">Shop grid 4 Columns</a>
                      </li>
                      <li>
                        <a href="shop-grid-3col.html">Shop Grid 3 Columns</a>
                      </li>
                      <li>
                        <a href="shop-grid-sidebar.html">Shop Grid Sideber</a>
                      </li>
                      <li>
                        <a href="shop-list-sidebar.html">Shop List Sidebar</a>
                      </li>
                    </ul>
                    <ul className="dropdown-menu__col">
                      <li>
                        <a href="product-detail.html">Product Detail</a>
                      </li>
                      <li>
                        <a href="cart.html">Shopping cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wish list</a>
                      </li>
                    </ul>
                    <ul className="dropdown-menu__col -banner">
                      <a href="shop-fullwidth-4col.html">
                        <img
                          src="/app/assets/images/header/dropdown-menu-banner.png"
                          alt="New product banner"
                        />
                      </a>
                    </ul>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="menu-functions ">
              <a className="menu-icon -search" href="#">
                <img
                  src="/app/assets/images/header/search-icon.png"
                  alt="Search icon"
                />
              </a>
              <div className="search-box">
                <form>
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    name="search"
                  />
                  <button>
                    <img
                      src="/app/assets/images/header/search-icon.png"
                      alt="Search icon"
                    />
                  </button>
                </form>
              </div>
              <a className="menu-icon -wishlist" href="/wishlist.html">
                <img
                  src="/app/assets/images/header/wishlist-icon.png"
                  alt="Wishlist icon"
                />
              </a>
              <div className="menu-cart">
                <a className="menu-icon -cart" href="#">
                  <img
                    src="/app/assets/images/header/cart-icon.png"
                    alt="Wishlist icon"
                  />
                  <span className="cart__quantity">0</span>
                </a>
                <h5>
                  Cart:<span>$100</span>
                </h5>
              </div>
              <a className="menu-icon -navbar" href="#">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNab;
