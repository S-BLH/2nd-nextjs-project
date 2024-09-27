import { useState, useEffect } from 'react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import CommentList from '../../components/CommentList';

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function PostPage({ params, searchParams }: PageProps) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    // Fetch comments for the post
    const fetchComments = async () => {
      
      const response = await fetch(`/api/posts/${params.id}/comments`);
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [params.id]);

  return (
    <div>
      <h1>Post {params.id}</h1>
      {/* Other post content */}
      <CommentList comments={comments} />
    </div>
  );
}