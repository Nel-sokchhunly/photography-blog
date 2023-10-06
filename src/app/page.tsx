import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "../../sanity/lib/fetch";
import { postsQuery } from "../../sanity/lib/queries";
import BlogButton from "./components/BlogButton";

async function Homepage() {
  const posts = await sanityFetch<
    Array<
      SanityDocument & {
        title: string;
        slug: { current: string };
      }
    >
  >({ query: postsQuery });

  return (
    <div className="text-black p-4 flex gap-4">
      {posts.map((blog) => (
        <BlogButton key={blog._id} blog={blog} />
      ))}
    </div>
  );
}

export default Homepage;
