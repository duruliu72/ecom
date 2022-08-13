import { Provider } from "react-redux";
import "../styles/globals.css";
import Script from "next/script";
import configureStore, { wrapper } from "./../store/configureStore";
const store = configureStore();
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Provider store={store}> */}
      <Component {...pageProps} />;{/* </Provider> */}
      <Script
        src="/app/assets/js/main.js"
        onLoad={() => {
          runHeroSliderAnimation();
          slickSlider();
          openSearchBox();
          onOpenDrawer();
          mobileSidebarMenuHandle();
          onOpenQuickViewModal();
          toggleProductView();
        }}
      />
    </>
  );
}
export default wrapper.withRedux(MyApp);
// export default MyApp;
