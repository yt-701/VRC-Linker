'use client'
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const loginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    console.log(data, error)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="p-8">
          <button
            onClick={loginWithGoogle}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Googleでログイン
          </button>
        </div>
      </main>
    </div>
  );
}
