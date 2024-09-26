'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Post() {
  const [post, setPost] = useState<Post | null>(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div className="text-center py-10">Loading...</div>;

  return (
    <article className="container mx-auto px-4 py-8 max-w-2xl">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to all posts</Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600">{post.content}</p>
      </div>
    </article>
  );
}