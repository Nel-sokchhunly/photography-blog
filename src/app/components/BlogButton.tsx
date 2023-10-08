"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlForImage } from "../../../sanity/lib/image";

const BlogButton = ({ blog }: { blog: any }) => {
  const router = useRouter();

  return (
    <button
      key={blog.slug}
      onClick={() => router.push(`/${blog.slug.current}`)}
      className="
        h-fit w-full
        border-2 border-secondary
        hover:translate-x-1 hover:-translate-y-1
        hover:shadow-[-4px_4px_0_black]
        transition-all duration-300 
      "
    >
      <div className="relative w-full aspect-square">
        <Image
          className="object-cover object-center aspect-square"
          src={urlForImage(blog.mainImage).url()}
          quality={100}
          priority
          alt=""
          style={{
            width: "100%",
            height: "auto",
          }}
          width={300}
          height={300}
        />
      </div>

      <p className="text-black font-extrabold p-2">{blog.title}</p>
    </button>
  );
};

export default BlogButton;
