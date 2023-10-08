import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { postsQuery } from "../../../sanity/lib/queries";
import BlogButton from "../components/BlogButton";

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
    <div className="h-full  overflow-y-scroll">
      <div
        className="
          text-black p-4 
          grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]
          gap-4
        "
      >
        {posts.map((blog) => (
          <BlogButton key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
