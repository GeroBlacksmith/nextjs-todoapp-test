"use client";

import { useRouter } from "next/navigation";

function DeleteTodo({ id }: { id: string }) {
    const {refresh} = useRouter();
  async function handleDelete() {
    const response =await fetch(`http://${window.location.host}/api/todos`, {
      method: "DELETE",
      headers: {},
      body: JSON.stringify({ id }),
    });
    if(response.ok){
refresh();
    }
    console.log(await response.json());
  }
  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteTodo;
