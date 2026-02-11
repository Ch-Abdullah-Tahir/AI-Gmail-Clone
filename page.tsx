import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-24">
      <h1 className="text-5xl font-bold mb-6">AI Gmail 🤖</h1>
      <p className="text-xl mb-8 text-gray-300">Your smart email assistant is ready.</p>

      {/* If NOT logged in, show this button */}
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 transition">
            Sign In with Google
          </button>
        </SignInButton>
      </SignedOut>

      {/* If LOGGED IN, show this button */}
      <SignedIn>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl text-green-400">You are logged in!</h2>
          <div className="scale-150 p-2">
            <UserButton afterSignOutUrl="/" />
          </div>
          
          <Link href="/dashboard">
            <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-green-500 transition shadow-lg">
              Go to Dashboard 🚀
            </button>
          </Link>
        </div>
      </SignedIn>
    </div>
  )
}