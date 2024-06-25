import Image from "next/image";
import ALink from "../features/ALink";

const ShipmentsSection = () => {
  return (
    <section className="text-center py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-light mb-20">
          Manage your shipments and returns
        </h2>

        <div className="grid grid-flex-row grid-cols-12 lg:grid-cols-10 gap-5">
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <ALink href={"/"} className="text-center">
              <Image
                className="mx-auto mb-7"
                src={"/images/shipments/1.png"}
                width={79}
                height={79}
                alt="Icon"
              />

              <h4 className="uppercase font-semibold text-[#00689c]">
                DROP OFF A<br /> PACKAGE
              </h4>
            </ALink>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <ALink href={"/"} className="text-center">
              <Image
                className="mx-auto mb-7"
                src={"/images/shipments/2.png"}
                width={79}
                height={79}
                alt="Icon"
              />

              <h4 className="uppercase font-semibold text-[#00689c]">
                REDIRECT A<br /> PACKAGE
              </h4>
            </ALink>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <ALink href={"/"} className="text-center">
              <Image
                className="mx-auto mb-7"
                src={"/images/shipments/3.svg"}
                width={79}
                height={79}
                alt="Icon"
              />

              <h4 className="uppercase font-semibold text-[#00689c]">
                STORE HOURS <br /> AND SERVICES
              </h4>
            </ALink>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <ALink href={"/"} className="text-center">
              <Image
                className="mx-auto mb-7"
                src={"/images/shipments/4.png"}
                width={79}
                height={79}
                alt="Icon"
              />

              <h4 className="uppercase font-semibold text-[#00689c]">
                SERVICE
                <br /> ALERTS
              </h4>
            </ALink>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <ALink href={"/"} className="text-center">
              <Image
                className="mx-auto mb-7"
                src={"/images/shipments/5.png"}
                width={79}
                height={79}
                alt="Icon"
              />

              <h4 className="uppercase font-semibold text-[#00689c]">
                RETURN A<br /> PACKAGE
              </h4>
            </ALink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipmentsSection;
