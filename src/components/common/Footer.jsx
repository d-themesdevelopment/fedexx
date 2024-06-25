import {
  FacebookOutlined,
  GlobalOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  TwitterOutlined,
  UserOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import ALink from "../features/ALink";
import { Select } from "antd";

const Footer = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <footer className="bg-[#fafafa]">
      <div className="container">
        <div className="footer-middle py-16 border-b border-black">
          <div className="grid grid-flex-row grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h4 className="text-primary font-semibold mb-5">OUR COMPANY</h4>

              <div className="grid grid-flex-row grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6">
                  <ul className="font-light text-sm space-y-2">
                    <li>
                      <ALink href={"/"}>About FedEx</ALink>
                    </li>
                    <li>
                      <ALink href={"/"}>Our Portfolio</ALink>
                    </li>
                    <li>
                      <ALink href={"/"}>Investor Relations</ALink>
                    </li>
                    <li>
                      <ALink href={"/"}>Careers</ALink>
                    </li>
                  </ul>
                </div>

                <div className="col-span-12 lg:col-span-6">
                  <ul className="font-light text-sm space-y-2">
                    <li>
                      <ALink href={"/"}>EedEx Blog</ALink>
                    </li>
                    <li>
                      <ALink href={"/"}>Corporate Responsibility</ALink>
                    </li>
                    <li>
                      <ALink href={"/"}>Newsroom</ALink>
                    </li>
                    <li>
                      <ALink href={"/"}>Contact Us</ALink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h4 className="text-primary font-semibold mb-5">
                MORE FROM FEDEX
              </h4>

              <ul className="font-light text-sm space-y-2">
                <li>
                  <ALink href={"/"}>About FedEx</ALink>
                </li>
                <li>
                  <ALink href={"/"}>Our Portfolio</ALink>
                </li>
                <li>
                  <ALink href={"/"}>Investor Relations</ALink>
                </li>
                <li>
                  <ALink href={"/"}>Careers</ALink>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h4 className="text-primary font-semibold mb-5">LANGUAGE</h4>

              <div className="flex items-center space-x-2 mb-3">
                <GlobalOutlined />

                <span className="text-sm font-light">United States</span>
              </div>

              <Select
                defaultValue="english"
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: "english", label: "English" },
                  { value: "lucy", label: "Lucy" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom md:flex items-center md:space-x-5 py-10">
          <h4 className="text-primary font-semibold mb-5 md:mb-0">FOLLOW FEDEX</h4>

          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <MailOutlined />
            </div>

            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <FacebookOutlined />
            </div>

            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <TwitterOutlined />
            </div>

            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <YoutubeOutlined />
            </div>

            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <LinkedinOutlined />
            </div>

            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <InstagramOutlined />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-4 text-white text-sm">
        <div className="container md:flex items-center justify-between">
          <p>© FedEx 1995-2024</p>

          <ul className="flex items-center space-x-3">
            <li>
              <ALink href={"#"}>Site Map</ALink>
            </li>
            <li>|</li>
            <li>
              <ALink href={"#"}>Terms of Use</ALink>
            </li>
            <li>|</li>
            <li>
              <ALink href={"#"}>Privacy & Security</ALink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
