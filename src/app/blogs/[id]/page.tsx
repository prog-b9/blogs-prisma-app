import { prisma } from "@/lib/prisma";
import UserSection from "@/components/features/users/UserSection";
import { UserCard } from "@/components/features/users/UserCard";
import { BlogsCard } from "@/components/features/blogs/BlogsCard";

export default async function page({ params }: any) {
  const blog: any = await prisma?.blogPost.findUnique({
    where: { id: params.id },
  });

  const user: any = await prisma?.users.findUnique({
    where: { id: blog.authorId },
  });

  console.log("blog: ", blog);
  console.log("user: ", user);
  return (
    <div>
      <BlogsCard
        isLink={false}
        id={blog?.id}
        title={blog?.title}
        slug={blog?.slug}
        content={blog?.content}
        createdAt={blog?.createdAt}
        updatedAt={blog?.updatedAt}
        published={blog?.published}
        authorName={user?.name}
      />
    </div>
  );
}
