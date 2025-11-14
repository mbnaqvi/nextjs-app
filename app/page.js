import { auth } from "@/auth"
import Link from "next/link"

export default async function Home() {
  const session = await auth()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-6">
          Welcome to NextJS Auth Lab
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          A complete authentication system with protected routes
        </p>
        
        {session ? (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              {session.user.image && (
                <img 
                  src={session.user.image} 
                  alt={session.user.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-500"
                />
              )}
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-slate-800">
                  Hello, {session.user.name}!
                </h2>
                <p className="text-slate-600">{session.user.email}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Link 
                href="/main"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                View Main Page
              </Link>
              <Link 
                href="/posts/1"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                View Dynamic Posts
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-slate-700 mb-6">
              Please sign in to access protected content
            </p>
            <Link 
              href="/signin"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
            >
              Sign In
            </Link>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Secure Authentication
            </h3>
            <p className="text-slate-600">
              OAuth integration with Google, GitHub, and Facebook
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Protected Routes
            </h3>
            <p className="text-slate-600">
              Server-side session validation on every page
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Dynamic Content
            </h3>
            <p className="text-slate-600">
              Server-side data fetching with dynamic routing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}