import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <div  >
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
    </div>
  )
}
