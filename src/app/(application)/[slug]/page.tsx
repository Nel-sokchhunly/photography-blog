import type { SanityDocument } from "sanity";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { postQuery, postPathsQuery } from "../../../../sanity/lib/queries";
import { client } from "../../../../sanity/lib/client";
import ImageSlideShow from "./ImageSlideShow";

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
    }
  >({
    query: postQuery,
    params,
  });

  return (
    <div
      className="
        text-black p-4
        grid grid-cols-12 gap-4
      "
    >
      <div className="col-span-4 overflow-hidden">
        <ImageSlideShow post={post} />
      </div>
      <div className="col-span-7">
        <h1 className="text-xl font-black text-secondary">
          {post.title as string}
        </h1>
      </div>
    </div>
  );
}
