'use client';

import { useEffect, useState } from 'react';
import PostList from './components/PostList';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Blog</h1>
      <div className="max-w-2xl mx-auto">
        <PostList posts={posts} />
      </div>
    </main>
  );
}