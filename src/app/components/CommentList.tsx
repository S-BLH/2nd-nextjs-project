import React from 'react';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2 text-black">Comments</h3>
      {comments.length > 0 ? (
        <ul className="space-y-2">
          {comments.map((comment) => (
            <li key={comment.id} className="bg-gray-100 p-3 rounded shadow">
              <span className="font-semibold text-black">{comment.author}: </span>
              <span className="text-gray-700">{comment.content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}
    </div>
  );
};

export default CommentList;