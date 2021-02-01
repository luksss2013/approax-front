import "../public/fonts/fonts-style.css";
import "../styles/globals.css";
import "../assets/self-styles.less";
import { AppProps } from "next/app";
import App from "next/app";
import MainLayout from "../components/main-layout/MainLayout";
import { appWithTranslation } from "./i18n";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
