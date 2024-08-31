import Image from "next/image";
import TodoList from "./components/TodoList";


export default function Home() {
  return (
    <main className="container mx-auto p-8 text-center max-w-2xl">
      <h1 className="text-2xl mb-4">Todo App</h1>
      <TodoList/>
    </main>
  );
}
