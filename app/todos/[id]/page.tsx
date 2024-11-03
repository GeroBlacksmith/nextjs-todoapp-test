import { headers } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
    return [{id:"one"},{id:"two"},{id:"three"}];
}

type TodoPageProps = Promise<{ id: string }>;

async function TodoPage(props: { params: TodoPageProps }) {
  const { params } = props;
  const { id } = await params;
  const headersList = headers();
  
  const host=(await headersList).get('host'); // to get domain
  const response = await fetch(`http://${host}/api/todos`, {
    cache: "no-store",
    /* next: {
        revalidate: 15 // seconds
      } */
  });
  const data:{todos:{id:string, name:string}[]} = await response.json();
  const todo = data.todos.find((todo)=>todo.id===id);
  if(!todo){
    notFound();
  }
  
  return <div>
    <p>ID: {todo.id}</p>
    <p>NAME: {todo.name}</p>
  </div>;
}

export default TodoPage;
