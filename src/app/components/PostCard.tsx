'use client';

import React, { useState } from 'react';
import CommentList from './CommentList';
import CreateComment from './CreateComment';

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

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    alert('Sharing post: ' + post.id);
  };

  const handleNewComment = (newComment) => {
    const commentWithId = { ...newComment, id: Date.now() };
    setComments([...comments, commentWithId]);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-black mb-2">{post.author}</h2>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <div className="flex justify-between items-center mb-4">
          <button onClick={handleLike} className="text-blue-600 hover:text-blue-800 transition duration-300">
            Like ({likes})
          </button>
          <button onClick={handleShare} className="text-blue-600 hover:text-blue-800 transition duration-300">
            Share
          </button>
        </div>
        <CommentList comments={comments} />
        <CreateComment onNewComment={handleNewComment} />
      </div>
    </div>
  );
};

export default PostCard;