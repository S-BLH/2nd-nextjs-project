import { NextResponse } from 'next/server';

// This is a mock database. In a real app, you'd fetch this from a real database.
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newPost = {
    id: posts.length + 1,
    title: body.title,
    content: body.content,
  };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}