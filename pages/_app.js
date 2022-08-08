import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Script
        src="/app/assets/js/main.js"
        onLoad={() => {
          runHeroSliderAnimation();
          slickSlider();
          openSearchBox();
          onOpenDrawer();
          mobileSidebarMenuHandle();
          onOpenQuickViewModal();
        }}
      />
    </>
  );
}

export default MyApp;
