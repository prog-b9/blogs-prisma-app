import { BlogsCard } from "./BlogsCard";

export default function BlogsSection({ data }: any) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((item: any) => (
        <BlogsCard
          key={item?.id}
          id={item?.id}
          title={item?.title}
          slug={item?.slug}
          content={item?.content}
          createdAt={item?.createdAt}
          updatedAt={item?.updatedAt}
          published={item?.published}
          authorName={item?.authorName}
        />
      ))}
    </section>
  );
}
