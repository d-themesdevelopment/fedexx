// Import Custom Components
import Header from "./common/Header";
import Footer from "./common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;