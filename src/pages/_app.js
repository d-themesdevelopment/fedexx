import { ConfigProvider } from "antd";

// Import Custom Components
import Layout from "@/components/Layout";

// Import Global Styles
import "@/styles/globals.scss";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}
