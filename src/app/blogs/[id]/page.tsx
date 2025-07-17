import { prisma } from "@/lib/prisma";
import { BlogsCard } from "@/components/features/blogs/BlogsCard";

export default async function page({ params }: any) {
  const blog: any = await prisma?.blogPost.findUnique({
    where: { id: params.id },
  });

  const user: any = await prisma?.users.findUnique({
    where: { id: blog.authorId },
  });

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
