"use client";

function TodosErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-black p-10">
      <p className="text-red-500 font-bold">Error page {error.message}</p>
      <button onClick={reset}>Try again</button>
    </section>
  );
}

export default TodosErrorPage;
