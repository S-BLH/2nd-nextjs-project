import React from 'react';
import PostCard from './PostCard';

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: Comment[];
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;