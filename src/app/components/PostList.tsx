import React from 'react';
import PostCard from './PostCard';

interface MyPost {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: MyComment[];
}

interface MyComment {
  id: number;
  author: string;
  content: string;
}

interface PostListProps {
  posts: MyPost[];
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
