// components/BlogsCard.tsx
import Link from "next/link";

interface BlogsCardProps {
  id?: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  published?: boolean;
  isLink?: boolean;
  authorName?: string;
}

const contentRender = ({
  title,
  slug,
  content,
  createdAt,
  updatedAt,
  published,
  authorName,
}: BlogsCardProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title || slug}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
        {content}
      </p>
      {authorName && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          ✍️ Author: {authorName}
        </p>
      )}
      <p className="text-xs text-gray-400 mt-2">
        Created: {new Date(createdAt).toLocaleString()}
      </p>
      {updatedAt && (
        <p className="text-xs text-gray-400">
          Updated: {new Date(updatedAt).toLocaleString()}
        </p>
      )}
      <p className="text-xs text-gray-500 mt-1">
        Status:{" "}
        <span className={published ? "text-green-600" : "text-red-600"}>
          {published ? "Published" : "Draft"}
        </span>
      </p>
    </div>
  );
};

export function BlogsCard({
  id,
  title,
  slug,
  content,
  createdAt,
  updatedAt,
  published,
  isLink = true,
  authorName,
}: BlogsCardProps) {
  const href = id ? `/blogs/${id}` : "#";

  return isLink ? (
    <Link
      href={href}
      key={id}
      className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm bg-white dark:bg-gray-900"
    >
      {contentRender({
        title,
        slug,
        content,
        createdAt,
        updatedAt,
        published,
        authorName,
      })}
    </Link>
  ) : (
    <div
      key={id}
      className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm bg-white dark:bg-gray-900"
    >
      {contentRender({
        title,
        slug,
        content,
        createdAt,
        updatedAt,
        published,
        authorName,
      })}
    </div>
  );
}
