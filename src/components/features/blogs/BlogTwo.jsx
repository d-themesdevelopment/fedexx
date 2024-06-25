import Image from "next/image";
import ALink from "../ALink";

const BlogTwo = ({ blog }) => {
  return (
    <div className="blog font-light sm:flex items-start lg:items-center">
      <div className="sm:w-[210px]">
        <div className="relative pt-[70%] overflow-hidden ">
          <Image
            className="absolute top-0 left-0 bottom-0 h-full w-full"
            src={`/images/blogs/${blog?.imageUrl}`}
            width={470}
            height={299}
            alt="Blog"
          />
        </div>
      </div>

      <div className="details sm:px-5 py-5 sm:py-0 flex-1">
        <h3 className="text-2xl mb-2">{blog?.title}</h3>
        <p className="mb-3">{blog?.desc}</p>

        <ALink href={`${blog?.link?.url}`} className="text-blue font-semibold">
          {blog?.link?.title}
        </ALink>
      </div>
    </div>
  );
};

export default BlogTwo;
