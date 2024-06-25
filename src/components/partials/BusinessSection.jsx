import { Button } from "antd";
import Image from "next/image";
import BlogOne from "../features/blogs/BlogOne";

const BusinessSection = () => {
  const Blogs = [
    {
      imageUrl: "1.jpg",
      title: "Learn from our Small Business Grant recipients",
      desc: "Bundle X Joy makes gut-friendly food, treats, and supplements for dogs. Learn more about them and see the full list of this year's grant recipients.",
      link: {
        title: "READ ABOUT THE RECIPIENTS",
        url: "/",
      },
    },
    {
      imageUrl: "2.jpg",
      title: "Solidify and strengthen your shipping strategy",
      desc: "A few simple shipping changes can mean more growth for your business. Get advice for saving time and money while improving your customers' experiences.",
      link: {
        title: "GET IDEAS FOR SHIPPING",
        url: "/",
      },
    },
    {
      imageUrl: "3.jpg",
      title: "Rack up rewards",
      desc: "Did you know you can earn gift cards to top retailers just for shipping? It’s free to enroll in My FedEx Rewards. You’ll get a $10 gift card for your first eligible shipment. Then, receive new offers every month to earn more rewards.",
      link: {
        title: "JOIN NOW",
        url: "/",
      },
    },
    {
      imageUrl: "4.jpg",
      title: "Have your packages tested by the experts",
      desc: "Proper packaging helps protect your products and your business. Smooth deliveries can also keep customers happy and reduce your replacement costs. Have your packages evaluated for free in the FedEx Packaging Lab.",
      link: {
        title: "APPLY FOR PACKAGE TESTING",
        url: "/",
      },
    },
    {
      imageUrl: "5.jpg",
      title: "Celebrate Pride Month",
      desc: "FedEx Cares funds two, 4-year scholarships in partnership with The Point Foundation. We’re proud to make a difference in supporting higher education for members of the LGBTQ+ community.",
      link: {
        title: "READ MORE ABOUT THE PROGRAM",
        url: "/",
      },
    },
    {
      imageUrl: "1.jpg",
      title: "Learn from our Small Business Grant recipients",
      desc: "Bundle X Joy makes gut-friendly food, treats, and supplements for dogs. Learn more about them and see the full list of this year's grant recipients.",
      link: {
        title: "READ ABOUT THE RECIPIENTS",
        url: "/",
      },
    },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-light mb-14 text-center">
          Sail into summer with these business boosters
        </h2>

        <div className="md:flex items-center justify-between bg-[#FAFAFA] px-6 py-10 md:py-6 mb-7">
          <div className="md:w-[140px] mb-5 md:mb-0">
            <Image
              className="mx-auto"
              src={"/images/icons/icon-2.png"}
              width={95}
              height={95}
              alt="Icon"
            />
          </div>

          <div className="flex-1 md:mx-5 text-center md:text-left mb-10 md:mb-0">
            <h3 className="text-3xl font-light mb-4">
              Get $10 off print orders of $50 or more*
            </h3>

            <p className="font-light">
              Offer available 6/10 - 7/14, online or in-store. Use promo code
              TOF625 in the cart.{" "}
              <a href="#" className="underline">
                Restrictions apply.
              </a>
            </p>
          </div>

          <div className="md:w-[160px] text-center md:text-left">
            <Button className="border-2 border-blue rounded-full text-blue font-bold px-9 py-6">
              SHOP NOW
            </Button>
          </div>
        </div>

        <div className="grid grid-flex-row grid-cols-12 gap-5">
          {Blogs?.map((blog, index) => (
            <div className="col-span-12 sm:col-span-6" key={index}>
              <BlogOne blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
