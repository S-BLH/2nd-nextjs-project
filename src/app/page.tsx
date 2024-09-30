'use client';

import { useEffect, useState } from 'react';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: Comment[];
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]); // Specify the type here

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleNewPost = (newPost: Post) => { // Specify the type for newPost
    setPosts([newPost, ...posts]);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center"> Blog App</h1>
      <div className="max-w-2xl mx-auto">
        <CreatePost onNewPost={handleNewPost} />
        <PostList posts={posts} />
      </div>
    </main>
  );
}
