import type { SanityDocument } from "sanity";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { postQuery, postPathsQuery } from "../../../sanity/lib/queries";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

const builder = imageUrlBuilder(client);

export default async function Blog({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });

  return (
    <div className="w-full h-full text-black p-4">
      {post?.mainImage &&
        ((
          <div className="relative">
            <Image
              className="object-contain aspect-auto"
              src={builder.image(post.mainImage).url()}
              fill
              quality={100}
              priority
              alt=""
            />
          </div>
        ) as any)}

      <h1 className="text-xl font-black text-secondary">
        {post.title as string}
      </h1>
    </div>
  );
}
