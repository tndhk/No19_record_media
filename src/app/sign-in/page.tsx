import { SignInForm } from '@/components/features/auth/SignInForm'

export default function SignInPage() {
  return (
    <div className="container mx-auto max-w-md py-16">
      <div className="rounded-lg border shadow-sm p-8">
        <h1 className="text-2xl font-bold mb-8 text-center">ログイン</h1>
        <SignInForm />
      </div>
    </div>
  )
} 