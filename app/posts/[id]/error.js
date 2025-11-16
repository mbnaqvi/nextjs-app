"use client"

export default function PostError({ error, reset }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
          <svg
            className="w-16 h-16 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Failed to Load Post
          </h2>
          <p className="text-slate-600 mb-6">
            {error.message || "There was an error loading the post content"}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Try Again
            </button>
            <a
              href="/"
              className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
