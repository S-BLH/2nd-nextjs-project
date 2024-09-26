'use client';

import { useEffect, useState } from 'react';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // In a real app, you'd implement pagination here
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <main className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">My Social Blog</h1>
      <div className="max-w-2xl mx-auto">
        <CreatePost onNewPost={handleNewPost} />
        <PostList posts={posts} />
      </div>
    </main>
  );
}