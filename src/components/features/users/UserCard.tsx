import Link from "next/link";

// components/UserCard.tsx
interface UserCardProps {
  id?: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  isLink?: boolean;
  author?: string;
}

const contentRender = ({
  name,
  email,
  role,
  createdAt,
  author,
}: UserCardProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        📧 {email}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        🛡️ Role: {role}
      </p>
      {author && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Auther: {author}
        </p>
      )}
      <p className="text-xs text-gray-400 mt-2">
        Created at: {new Date(createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export function UserCard({
  id,
  name,
  email,
  role,
  createdAt,
  isLink = true,
  author,
}: UserCardProps) {
  return isLink ? (
    <Link
      href={`/users/${id}`}
      className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm bg-white dark:bg-gray-900"
    >
      {contentRender({ name, email, role, createdAt, author })}
    </Link>
  ) : (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm bg-white dark:bg-gray-900">
      {contentRender({ name, email, role, createdAt, author })}
    </div>
  );
}
