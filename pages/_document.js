import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;700;900&amp;display=swap"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/app/assets/images/fav.png"
        />
        {/* --build:css /app/assets/css/styles.min.css-- */}
        <link rel="stylesheet" href="/app/assets/css/bootstrap.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />
        <link rel="stylesheet" href="/app/assets/css/slick.min.css" />
        <link rel="stylesheet" href="/app/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/app/assets/css/jquery.modal.min.css" />
        <link
          rel="stylesheet"
          href="/app/assets/css/bootstrap-drawer.min.css"
        />
        <link rel="stylesheet" href="/app/assets/css/style.css" />
        {/* --endbuild-- */}
        {/* --build:js assets/js/main.min.js-- */}
        <script src="/app/assets/js/jquery-3.5.1.min.js"></script>
        <script src="/app/assets/js/parallax.min.js"></script>
        <script src="/app/assets/js/slick.min.js"></script>
        <script src="/app/assets/js/jquery.validate.min.js"></script>
        <script src="/app/assets/js/jquery.modal.min.js"></script>
        <script src="/app/assets/js/bootstrap-drawer.min.js"></script>
        <script src="/app/assets/js/jquery.countdown.min.js"></script>
        {/* <script src="/app/assets/js/main.min.js"></script> */}
        {/* --endbuild-- */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
