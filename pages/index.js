import CreateTodo from "@/components/CreateTodo";
import ToDo from "@/components/ToDo";

export default function Home() {
  return (
    <>
      <div className="container">
        <ToDo />
        <CreateTodo/>
      </div>
    </>
  );
}
