import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
    return [{id:"one"},{id:"two"},{id:"three"}];
}

type TodoPageProps = Promise<{ id: string }>;

async function TodoPage(props: { params: TodoPageProps }) {
  const { params } = props;
  const { id } = await params;
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
    /* next: {
        revalidate: 15 // seconds
      } */
  });

  const data:{todos:{id:string, name:string}[]} = await response.json();
  if(!data.todos.find((todo)=>todo.id===id)){
    notFound();
  }
  
  return <div>TodoPage {id}</div>;
}

export default TodoPage;
