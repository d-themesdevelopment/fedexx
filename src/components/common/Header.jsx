import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Menu from "./partials/Menu";
import ALink from "../features/ALink";
import MobileMenu from "./partials/MobileMenu";

const Header = () => {
  return (
    <header className="sticky top-0 bg-primary text-white py-3 z-10">
      <div className="header-middle">
        <div className="container flex items-center justify-between">
          <div className="header-left">
            <img
              src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png"
              width="88"
              height="25"
              alt="FedEx Logo"
            />
          </div>

          <div className="header-center hidden lg:block">
            <Menu />
          </div>

          <div className="header-right flex items-center space-x-2 lg:space-x-5">
            <div className="lg:hidden">
              <MobileMenu />
            </div>

            <ALink
              href="#"
              className="flex items-center lg:space-x-3 px-3 py-3 text-sm underline"
            >
              <span className="hidden lg:inline-block">Sign Up or Log in</span>
              <div className="w-7 h-7 border-2 border-white rounded-full flex items-center justify-center">
                <UserOutlined className="text-xl" />
              </div>
            </ALink>

            <ALink href="#">
              <SearchOutlined className="text-2xl mt-1" />
            </ALink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
