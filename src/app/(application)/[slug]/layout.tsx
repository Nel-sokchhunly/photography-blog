import BlogSidebar from "../../components/BlogSidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative flex overflow-y-scroll overflow-x-visible">
      <BlogSidebar />
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
