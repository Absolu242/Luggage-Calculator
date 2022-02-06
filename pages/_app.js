import { AppProvider } from "../context/Appstore";

//styles
import "../styles/globals.css";
import "../styles/loadingSpinner.css";
import "../styles/Card.css";
import "../styles/form.css"



function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
