import TaskMenuItem from "@components/TaskMenuItem";

export default function Menu({ action }: any) {
  return (
    <nav>
      <ul className="flex flex-row space-x-4">
        <TaskMenuItem onClick={() => action.call(null, "loaded")}>
          all
        </TaskMenuItem>

        <TaskMenuItem onClick={() => action.call(null, "pending")}>
          pending
        </TaskMenuItem>

        <TaskMenuItem onClick={() => action.call(null, "done")}>
          done
        </TaskMenuItem>
      </ul>
    </nav>
  );
}
