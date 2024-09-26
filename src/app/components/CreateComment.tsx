'use client';

import React, { useState } from 'react';

interface CreateCommentProps {
  onNewComment: (comment: { author: string; content: string }) => void;
}

const CreateComment: React.FC<CreateCommentProps> = ({ onNewComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onNewComment({ author: 'Current User', content });
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded text-black"
        placeholder="Write a comment..."
      />
      <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
        Post Comment
      </button>
    </form>
  );
};

export default CreateComment;