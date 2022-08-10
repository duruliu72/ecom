import React from "react";
import Products from "../components/shop/Products";
import Layout from "../layouts/Layout";
function shop() {
  return (
    <Layout title="Shop Page">
      <div id="content">
        <div className="breadcrumb">
          <div className="container">
            <h2>Shop</h2>
            <ul>
              <li>Home</li>
              <li className="active">Shop</li>
            </ul>
          </div>
        </div>
        <Products />
      </div>
    </Layout>
  );
}

export default shop;
