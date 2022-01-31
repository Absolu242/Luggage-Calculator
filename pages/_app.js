import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import "../styles/loadingSpinner.css";
import "../styles/Card.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
