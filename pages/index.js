import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "../components/home/Slider";
import IntroductionOne from "../components/home/IntroductionOne";
import IntroductionTwo from "../components/home/IntroductionTwo";
import ProductSlider from "../components/home/ProductSlider";
import Testimonial from "../components/home/Testimonial";
import TeamOne from "../components/home/TeamOne";
import BookService from "../components/home/BookService";
import Layout from "../layouts/Layout";
export default function Home() {
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
