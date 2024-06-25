import Image from "next/image";
import ALink from "../ALink";

const BlogOne = ({ blog }) => {
  return (
    <div className="blog font-light">
      <div className="relative pt-[63%] overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full"
          src={`/images/blogs/${blog?.imageUrl}`}
          width={470}
          height={299}
          alt="Blog"
        />
      </div>

      <div className="details py-5">
        <h3 className="text-2xl mb-3">{blog?.title}</h3>
        <p className="mb-5">{blog?.desc}</p>

        <ALink href={`${blog?.link?.url}`} className="text-blue font-semibold">
          {blog?.link?.title}
        </ALink>
      </div>
    </div>
  );
};

export default BlogOne;
