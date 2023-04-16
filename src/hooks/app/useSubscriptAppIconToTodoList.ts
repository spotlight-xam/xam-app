import { setAppIcon } from "expo-dynamic-app-icon";
import { useEffect } from "react";

import { TodoEntity } from "@components/todo/todo.types";
import { useGlobalState } from "@hooks/queries/common";

export function useSubscriptAppIconToTodoList() {
  const [todoList] = useGlobalState<TodoEntity[]>(["todoList"], []);

  useEffect(() => {
    setAppIcon(todoList?.length ? "squirrel" : "acorn");
  }, [todoList]);
}
