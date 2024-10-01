import buildClient from "@/api/build-client";
import Loader from "@/components/Loader/Loader";
import { Menu } from "@/components/Menu/Menu";
import { Navbar } from "@/components/Navbar/Navbar";
import { FoodDialog } from "@/components/Popup/Popup";
import { GlobalStyle } from "@/styles/GlobalStyle";

const AppComponent = ({ Component, pageProps, menu }) => {
  return !menu ? (
    <Loader />
  ) : (
    <>
      <GlobalStyle />
      <Navbar />
      <Menu menu={menu} />
      <Component {...pageProps} />
    </>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);

  const { data } = await client.get(`/kansino/nl/config/`);
  const menu = data?.menu || [];

  const pageProps = appContext.Component.getInitialProps
    ? await appContext.Component.getInitialProps(appContext.ctx, client)
    : {};

  return {
    pageProps,
    menu,
  };
};

export default AppComponent;