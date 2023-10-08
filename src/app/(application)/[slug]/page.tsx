import type { SanityDocument } from "sanity";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { postQuery, postPathsQuery } from "../../../../sanity/lib/queries";
import { client } from "../../../../sanity/lib/client";
import ImageSlideShow from "./ImageSlideShow";

import { PortableText } from "@portabletext/react";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Blog({ params }: { params: any }) {
  const post = await sanityFetch<
    SanityDocument & {
      title: string;
      mainImage: any;
      imageSlideShow: any;
      body: any;
    }
  >({
    query: postQuery,
    params,
  });

  return (
    <div
      className="
        h-full
        text-black p-4
        flex flex-col md:flex-row
        gap-4 overflow-y-auto
      "
    >
      <div className="md:w-1/3 h-fit">
        <ImageSlideShow post={post} />
      </div>
      <div className="">
        <h1 className="text-xl font-black text-secondary">
          {post.title as string}
        </h1>
        <br />
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
