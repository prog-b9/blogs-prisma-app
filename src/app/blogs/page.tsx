import { prisma } from "@/lib/prisma";
import BlogsSection from "@/components/features/blogs/BlogsSection";
import BlogsForm from "@/components/features/blogs/BlogsForm";

export default async function page() {
  const blogs = await prisma?.blogPost.findMany();
  const users = await prisma?.users.findMany();

  return (
    <div className="p-10">
      <div className="text-3xl">Blogs</div>
      <div className="h-10"></div>
      <BlogsSection data={blogs} />

      <div className="h-10"></div>
      <div className="text-3xl">Blogs Form</div>
      <div className="h-10"></div>

      <BlogsForm users={users} />
    </div>
  );
}
