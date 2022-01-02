import { DataProvider } from "../store/GlobalState";
import "../styles/globals.css";
import Layout from "./components/Layout";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </DataProvider>
  );
}

export default MyApp;
