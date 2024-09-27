import React from 'react';

interface Comment {
  id: number;
  content: string;
}

interface CommentListProps {
  comments: Comment[] | null;
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (!comments) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2 text-black">Comments</h3>
      {comments.length > 0 ? (
        <ul className="space-y-2">
          {comments.map((comment) => (
            <li key={comment.id} className="bg-gray-100 p-3 rounded shadow">
              {comment.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentList;