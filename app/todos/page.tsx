import DeleteTodo from "@/components/DeleteTodo";
import Link from "next/link";
import React from "react";
import { headers } from 'next/headers';
async function TodosPage() {
  const headersList = headers();
  
  const host=(await headersList).get('host'); // to get domain
  const response = await fetch(`http://${host}/api/todos`, {
    cache: "no-store",
    /* next: {
        revalidate: 15 // seconds
      } */
  });

  const data = await response.json();
  return (
    <section className="mt-24 w-full h-full flex justify-center">
      <table className="min-w-max bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
            <th className="py-3  px-6 text-left">ID</th>
            <th className="py-3  px-6 text-left">NAME</th>
            <th className="py-3  px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.todos.map((todo: { id: string; name: string }) => (
            <tr
              key={todo.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">
                <Link href={`/todos/${todo.id}`}>
                  <button>{todo.id}</button>
                </Link>
              </td>
              <td className="py-3 px-6">{todo.name}</td>
              <td className="py-3 px-6">
                <DeleteTodo id={todo.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TodosPage;
