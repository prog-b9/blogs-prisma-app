import { prisma } from "@/lib/prisma";
import UserSection from "@/components/features/users/UserSection";
import BlogsSection from "@/components/features/blogs/BlogsSection";

export default async function Home() {
  const users = await prisma?.users.findMany();
  const blogs = await prisma?.blogPost.findMany();

  return (
    <main className="min-h-screen p-5 sm:p-10">
      <div className="p-10">
        <div className="text-3xl">Users</div>
        <div className="h-5"></div>
        <UserSection data={users} />
      </div>

      <div className="p-10">
        <div className="text-3xl">Blogs</div>
        <div className="h-5"></div>
        <BlogsSection data={blogs} />
      </div>
    </main>
  );
}
