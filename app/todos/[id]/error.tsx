'use client';

import Link from "next/link";

function TodoErrorPage({error, reset} :{
    error: Error & { digest?: string }
    reset: () => void
  }) {
  return (
    <section className="bg-black p-10 text-red-500 font-bold">

    <p>Error page {error.message}</p>
    <Link href="/todos">Go back</Link>
    <button onClick={reset}>Try again</button>
    </section>
  )
}

export default TodoErrorPage