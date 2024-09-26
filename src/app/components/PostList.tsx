import React from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link href={`/post/${post.id}`}>
            <div className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600">Click to read more</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;