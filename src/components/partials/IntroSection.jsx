import { MedicineBoxOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import ALink from "../features/ALink";

const IntroSection = () => {
  return (
    <section
      className="intro-section min-h-[470px] flex items-center justify-center"
      style={{
        background: `no-repeat 60%/cover url(./images/intro-banner.jpg)`,
      }}
    >
      <div className="container">
        <h1 className="text-center text-white text-4xl font-light mb-10">
          Ship, manage, track, deliver
        </h1>

        <div className="flex items-end justify-center mb-10">
          <div className="flex items-center flex-col justify-center text-center bg-white text-black w-[158px] h-[120px]">
            <MedicineBoxOutlined className="text-4xl" />

            <h4 className="uppercase font-semibold mt-2">Rate & Ship</h4>
          </div>

          <div className="flex items-center flex-col justify-center text-center bg-primary text-white w-[158px] h-[140px] pt-5">
            <MedicineBoxOutlined className="text-4xl" />

            <h4 className="uppercase font-semibold mt-2">Track</h4>
          </div>

          <div className="flex items-center flex-col justify-center text-center bg-white text-black w-[158px] h-[120px]">
            <MedicineBoxOutlined className="text-4xl" />

            <h4 className="uppercase font-semibold mt-2">Locations</h4>
          </div>
        </div>

        <div className="max-w-[592px] mx-auto">
          <div className="flex items-center justify-between space-x-1 mb-4">
            <Input
              className="flex-1 h-[60px] text-lg font-semibold"
              placeholder="Tracking ID"
            />
            <Button
              type="secondary"
              className="text-lg bg-secondary text-white h-[60px] w-[100px] lg:w-[142px] uppercase font-semibold"
            >
              Track
            </Button>
          </div>

          <div className="flex items-center text-white font-semibold">
            <ALink href={"#"}>MULTIPLE TRACKING NUMBERS</ALink>
            |
            <ALink href={"#"}>NEED HELP?</ALink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
