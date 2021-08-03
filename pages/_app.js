import "../styles/globals.css";
import { wrapper } from "../redux/store";
import { CookiesProvider } from "react-cookie";

const MyApp = ({ Component, pageProps }) => (
  <CookiesProvider>
    <Component {...pageProps} />
  </CookiesProvider>
);

export default wrapper.withRedux(MyApp);
