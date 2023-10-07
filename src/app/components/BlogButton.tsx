"use client";

import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/navigation";

const builder = imageUrlBuilder(client);

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
      <div className="relative w-full aspect-[6/4]">
        <Image
          className="object-cover object-center aspect-video"
          src={builder.image(blog.mainImage).url()}
          fill
          quality={100}
          priority
          alt=""
        />
      </div>

      <p className="text-black font-extrabold p-2">{blog.title}</p>
    </button>
  );
};

export default BlogButton;
