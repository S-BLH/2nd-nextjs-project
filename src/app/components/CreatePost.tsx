'use client';

import React, { useState } from 'react';

interface CreatePostProps {
  onNewPost: (post: { author: string; content: string; likes: number; comments: any[] }) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onNewPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      const newPost = {
        id: Date.now(), // This is a simple way to generate a unique ID
        author: 'Current User',
        content,
        likes: 0,
        comments: []
      };
      onNewPost(newPost);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-md rounded-lg p-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded text-black"
        placeholder="What's on your mind?"
      />
      <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
        Post
      </button>
    </form>
  );
};

export default CreatePost;