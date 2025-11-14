import { auth } from "@/auth"
import { redirect } from "next/navigation"
import SignInButtons from "@/components/SignInButtons"

export default async function SignInPage() {
  const session = await auth()
  
  if (session) {
    redirect("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-600">
              Sign in to access your account
            </p>
          </div>

          <SignInButtons />

          <div className="mt-6 text-center text-sm text-slate-600">
            <p>By signing in, you agree to our terms and privacy policy</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600">
            Secure authentication powered by Auth.js
          </p>
        </div>
      </div>
    </div>
  )
}