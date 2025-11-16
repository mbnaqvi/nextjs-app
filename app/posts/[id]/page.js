import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export async function generateMetadata({ params }) {
  const { id } = await params
  return {
    title: `Post ${id} - NextJS`,
    description: `View post ${id} with comments`,
  }
}

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store"
  })
  
  if (!res.ok) {
    throw new Error("Failed to fetch post")
  }
  
  return res.json()
}

async function getComments(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: "no-store"
  })
  
  if (!res.ok) {
    throw new Error("Failed to fetch comments")
  }
  
  return res.json()
}

export default async function PostPage({ params }) {
  const session = await auth()
  
  if (!session) {
    redirect("/signin")
  }

  const { id } = await params
  const post = await getPost(id)
  const comments = await getComments(id)

  const postIds = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Post #{post.id}
            </span>
            <h1 className="text-3xl font-bold text-slate-800 capitalize">
              {post.title}
            </h1>
          </div>

          <p className="text-slate-700 text-lg leading-relaxed">
            {post.body}
          </p>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Posted by User #{post.userId}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Comments ({comments.length})
          </h2>

          <div className="space-y-6">
            {comments.map((comment) => (
              <div 
                key={comment.id}
                className="border-l-4 border-blue-500 pl-4 py-2"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {comment.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 capitalize">
                      {comment.name}
                    </h3>
                    <p className="text-xs text-slate-500">{comment.email}</p>
                  </div>
                </div>
                <p className="text-slate-700 ml-10">
                  {comment.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Browse Other Posts
          </h3>
          <div className="flex flex-wrap gap-2">
            {postIds.map((postId) => (
              <Link
                key={postId}
                href={`/posts/${postId}`}
                className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                  postId === parseInt(id)
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Post {postId}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}