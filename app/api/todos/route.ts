import { NextResponse } from "next/server";

let todos = [
  { id: "1", name: "Get groceries" },
  { id: "2", name: "DO homeworkt" },
  { id: "3", name: "Go to the gym" },
];

export async function GET() {
  return NextResponse.json({ todos });
}

export async function DELETE(request: Request) {
  const data = await request.json();
  const { id } = data;
  todos = todos.filter((todo) => todo.id !== id);
  return NextResponse.json({ todos });
}

export async function POST(request: Request) {
    const data = await request.json();
    const { name } = data;
    todos.push({id:(todos.length+1).toString(), name});
    return NextResponse.json({ todos });
  }
  