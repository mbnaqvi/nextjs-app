import { auth } from "@/auth"
import Link from "next/link"
import SignOutButton from "./SignOutButton"

export default async function Navbar() {
  const session = await auth()

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Auth Lab
          </Link>

          <div className="flex items-center gap-6">
            {session ? (
              <>
                <Link 
                  href="/main" 
                  className="text-slate-700 hover:text-blue-600 font-medium transition"
                >
                  Main
                </Link>
                <Link 
                  href="/posts/1" 
                  className="text-slate-700 hover:text-blue-600 font-medium transition"
                >
                  Posts
                </Link>
                <div className="flex items-center gap-3">
                  <img 
                    src={session.user.image} 
                    alt={session.user.name}
                    className="w-10 h-10 rounded-full border-2 border-blue-500"
                  />
                  <span className="text-slate-700 font-medium">
                    {session.user.name}
                  </span>
                  <SignOutButton />
                </div>
              </>
            ) : (
              <Link 
                href="/signin"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}