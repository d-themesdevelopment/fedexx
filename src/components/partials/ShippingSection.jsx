import BlogTwo from "../features/blogs/BlogTwo";

const ShippingSection = () => {
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
  ];

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-light mb-14 text-center">
          Get ready for summer shipping and celebrations
        </h2>

        <ul className="space-y-5">
          {Blogs?.map((blog, index) => (
            <li key={index}>
              <BlogTwo blog={blog} />
            </li>
          ))}
        </ul>

        <div className="pt-14 pb-5">
          <h5 className="font-semibold text-sm mb-3">
            FedEx money-back guarantee
          </h5>

          <p className="font-light text-sm">
            We offer a money-back guarantee for select services. This guarantee
            may be suspended, modified, or revoked. Please check money-back
            guarantee for the latest status of our money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
