import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Slider from "../components/home/Slider";
import IntroductionOne from "../components/home/IntroductionOne";
import IntroductionTwo from "../components/home/IntroductionTwo";
import ProductSlider from "../components/home/ProductSlider";
import Testimonial from "../components/home/Testimonial";
import TeamOne from "../components/home/TeamOne";
import BookService from "../components/home/BookService";
import Layout from "../layouts/Layout";
import { fetchBanners, getBanners } from "../store/bannerReducer";
import { wrapper } from "./../store/configureStore";
let p = {
  useSelector,
  useDispatch,
};
export default function Home() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchBanners());
  // }, [dispatch]);
  const banners = useSelector((state) => getBanners(state));
  console.log(banners);
  return (
    <Layout title="Home Page">
      <>
        <div id="content">
          {/* Slider */}
          <Slider />
          {/* IntroductionOne  */}
          <IntroductionOne />
          {/* IntroductionTwo  */}
          <IntroductionTwo />
          {/* ProductSlider  */}
          <ProductSlider />
          {/* Testimonial  */}
          <Testimonial />
          {/* TeamOne  */}
          <TeamOne />
          {/* BookService */}
          <BookService />
        </div>
      </>
    </Layout>
  );
}
// export async function getStaticProps(context) {
//   // const dispatch = useDispatch();
//   // console.log("context", context);
//   // const { useSelector, useDispatch } = p;
//   // const dispatch = useDispatch();
//   // dispatch(fetchBanners());
//   // Call an external API endpoint to get banners
//   // const banners = useSelector((state) => getBanners(state));
//   const banners = [];
//   return {
//     props: {
//       banners,
//     },
//   };
// }
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ params }) => {
      store.dispatch({
        type: "LOAD_BANNER",
        payload: [],
      });
      // const banners = store.useSelector((state) => getBanners(state));
      // const banners = useSelector((state) => getBanners(state));
      console.log(store.getState());
      return {
        props: {
          banners: [],
        },
      };
    }
);
